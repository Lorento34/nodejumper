#!/bin/bash

sudo apt update
sudo apt install -y make gcc jq curl git

if [ ! -f "/usr/local/go/bin/go" ]; then
  . <(curl -s "https://raw.githubusercontent.com/nodejumper-org/cosmos-utils/main/utils/go_install.sh")
  . .bash_profile
fi

go version # go version goX.XX.X linux/amd64

cd || return
rm -rf anone
git clone https://github.com/notional-labs/anone
cd anone || return
git checkout testnet-1.0.3
make install
$binaryName version # testnet-1.0.3

# replace nodejumper with your own moniker, if you'd like
$binaryName config chain-id $chainId
$binaryName init nodejumper --chain-id $chainId

curl https://raw.githubusercontent.com/notional-labs/anone/master/networks/testnet-1/genesis.json > $HOME/$homeDirectoryName/config/genesis.json
sha256sum $HOME/$homeDirectoryName/config/genesis.json # ba7bea692350ca8918542a26cabd5616dbebe1ff109092cb1e98c864da58dabf

sed -i 's|^minimum-gas-prices *=.*|minimum-gas-prices = "0.0001$denomName"|g' $HOME/$homeDirectoryName/config/app.toml
seeds=""
peers="$rpcPeer"
sed -i -e 's|^seeds *=.*|seeds = "'$seeds'"|; s|^persistent_peers *=.*|persistent_peers = "'$peers'"|' $HOME/$homeDirectoryName/config/config.toml

# in case of pruning
sed -i 's|pruning = "default"|pruning = "custom"|g' $HOME/$homeDirectoryName/config/app.toml
sed -i 's|pruning-keep-recent = "0"|pruning-keep-recent = "100"|g' $HOME/$homeDirectoryName/config/app.toml
sed -i 's|pruning-interval = "0"|pruning-interval = "10"|g' $HOME/$homeDirectoryName/config/app.toml

sudo tee /etc/systemd/system/$serviceName.service > /dev/null << EOF
[Unit]
Description=$chainName Node
After=network-online.target
[Service]
User=$USER
ExecStart=$(which $binaryName) start
Restart=on-failure
RestartSec=10
LimitNOFILE=10000
[Install]
WantedBy=multi-user.target
EOF

$binaryName unsafe-reset-all

SNAP_RPC="$rpcServer"
LATEST_HEIGHT=$(curl -s $SNAP_RPC/block | jq -r .result.block.header.height); \
BLOCK_HEIGHT=$((LATEST_HEIGHT - 2000)); \
TRUST_HASH=$(curl -s "$SNAP_RPC/block?height=$BLOCK_HEIGHT" | jq -r .result.block_id.hash)

echo $LATEST_HEIGHT $BLOCK_HEIGHT $TRUST_HASH

sed -i -E "s|^(enable[[:space:]]+=[[:space:]]+).*$|\1true| ; \
s|^(rpc_servers[[:space:]]+=[[:space:]]+).*$|\1\"$SNAP_RPC,$SNAP_RPC\"| ; \
s|^(trust_height[[:space:]]+=[[:space:]]+).*$|\1$BLOCK_HEIGHT| ; \
s|^(trust_hash[[:space:]]+=[[:space:]]+).*$|\1\"$TRUST_HASH\"|" $HOME/$homeDirectoryName/config/config.toml

sudo systemctl daemon-reload
sudo systemctl enable $serviceName
sudo systemctl restart $serviceName

sudo journalctl -u $serviceName -f --no-hostname -o cat

Create Validator Delimiter

# Create wallet
$binaryName keys add wallet

## Console output
#- name: wallet
#  type: local
#  address: one1wpkxhzufzrmz6glt4sjp54k3umgvx5hv3rx6y7
#  pubkey: '{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"Auq9WzVEs5pCoZgr2WctjI7fU+lJCH0I3r6GC1oa0tc0"}'
#  mnemonic: ""

#!!! SAVE SEED PHRASE
kite upset hip dirt pet winter thunder slice parent flag sand express suffer chest custom pencil mother bargain remember patient other curve cancel sweet

# Wait util the node is synced, should return FALSE
$binaryName status 2>&1 | jq .SyncInfo.catching_up

# Go to discord channel #faucet-testnet-1 and paste
$request <YOUR_WALLET_ADDRESS>

# Verify the balance
$binaryName q bank balances <YOUR_WALLET_ADDRESS>

## Console output
#  balances:
#  - amount: "5000000"
#    denom: uan1

#Create validator
$binaryName tx staking create-validator \
--amount=4500000$denomName \
--pubkey=$($binaryName tendermint show-validator) \
--moniker=<YOUR_MONIKER_NAME> \
--chain-id=$chainId \
--commission-rate=0.1 \
--commission-max-rate=0.2 \
--commission-max-change-rate=0.05 \
--min-self-delegation=1 \
--fees=20000$denomName \
--from=wallet \
-y