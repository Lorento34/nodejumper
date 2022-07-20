import { Chain } from "../model/chain";

export const CHAINS: Chain[] = [
  {
    id: "rizon",
    chainName: "Rizon",
    chainId: "titan-1",
    snapshotServer: "https://snapshots1.nodejumper.io",
    rpcServer: "https://rizon.nodejumper.io",
    rpcPeer: "0d51e8b9eb24f412dffc855c7bd854a8ecb3dff5@rizon.nodejumper.io:26656",
    serviceName: "rizond",
    homeDirectoryName: ".rizon",
    twitter: "https://twitter.com/hdac_rizon",
    github: "https://github.com/rizon-world",
    globe: "https://rizon.world",
    medium: "https://medium.com/hdac",
    discord: "https://discord.gg/Vgbcu5Hhmz",
    validatorUrl: "https://ping.pub/rizon/staking/rizonvaloper1hy3em3nfngyntk7tre9d0626mj9swhu9ughurh",
    denomName: "uatolo",
    denomPow: 6,
    githubRepoName: 'rizon'
  },
  {
    id: "bitcanna",
    chainName: "Bitcanna",
    chainId: "bitcanna-1",
    snapshotServer: "https://snapshots1.nodejumper.io",
    rpcServer: "https://bitcanna.nodejumper.io",
    rpcPeer: "45589e6147e36dda9e429668484d7614fb25b142@bitcanna.nodejumper.io:27656",
    serviceName: "bcnad",
    homeDirectoryName: ".bcna",
    twitter: "https://twitter.com/BitCannaGlobal",
    github: "https://github.com/BitCannaGlobal",
    globe: "https://www.bitcanna.io",
    medium: "https://medium.com/@bitcannaglobal",
    discord: "https://discord.gg/GaubcRyg3t",
    validatorUrl: "https://ping.pub/bitcanna/staking/bcnavaloper1nlyurpgk5zcg6f6dcpdt2mq9khv27ajg4px45y",
    denomName: "ubcna",
    denomPow: 6,
    isProjectSupportUs: true,
    githubRepoName: 'bcna'
  },
  {
    id: "kichain",
    chainName: "Kichain",
    chainId: "kichain-2",
    snapshotServer: "https://snapshots1.nodejumper.io",
    rpcServer: "https://kichain.nodejumper.io",
    rpcPeer: "766ed622c79fa9cfd668db9741a1f72a5751e0cd@kichain.nodejumper.io:28656",
    serviceName: "kid",
    homeDirectoryName: ".kid",
    twitter: "https://twitter.com/Ki_Foundation",
    github: "https://github.com/KiFoundation",
    globe: "https://foundation.ki",
    medium: "https://medium.com/ki-foundation",
    discord: "https://discord.gg/Vg4F2uMZYq",
    coingekoCoinId: "ki",
    validatorUrl: "https://ping.pub/kichain/staking/kivaloper1q5vfka8z05t27jf4fuawpec99mvv9df90yc57a",
    denomName: "uxki",
    denomPow: 6,
    newWayUnsafeResetAll: true,
    githubRepoName: 'ki-tools'
  },
  {
    id: "desmos",
    chainName: "Desmos",
    chainId: "desmos-mainnet",
    snapshotServer: "https://snapshots1.nodejumper.io",
    rpcServer: "https://desmos.nodejumper.io",
    rpcPeer: "f090ead239426219d605b392314bdd73d16a795f@desmos.nodejumper.io:32656",
    serviceName: "desmosd",
    binaryName: "desmos",
    homeDirectoryName: ".desmos",
    twitter: "https://twitter.com/DesmosNetwork",
    github: "https://github.com/desmos-labs",
    globe: "https://www.desmos.network/",
    medium: "https://medium.com/desmosnetwork",
    discord: "https://discord.com/invite/ckFcU5vxxc",
    validatorUrl: "https://ping.pub/desmos/staking/desmosvaloper184nr4azm7kwas40yzftfxy9ma2lrm5pp5q795x",
    denomName: "udsm",
    denomPow: 6,
    isProjectSupportUs: true,
    githubRepoName: 'desmos'
  },
  {
    id: "omniflix",
    chainName: "Omniflix",
    chainId: "omniflixhub-1",
    snapshotServer: "https://snapshots2.nodejumper.io",
    rpcServer: "https://omniflix.nodejumper.io",
    rpcPeer: "b7ac7a52dbb4041133e31e0552f4e01e926d3bb4@omniflix.nodejumper.io:33656",
    serviceName: "omniflixhubd",
    homeDirectoryName: ".omniflixhub",
    twitter: "https://twitter.com/@OmniFlixNetwork",
    github: "https://github.com/OmniFlix",
    globe: "https://omniflix.network/",
    medium: "https://medium.com/@OmniFlix",
    discord: "https://discord.com/invite/6gdQ4yZSTC",
    coingekoCoinId: "omniflix-network",
    validatorUrl: "",
    projectOverview: "OmniFlix is a peer-to-peer network designed for creators and communities/DAOs to to mint, manage and monetize NFTs and social tokens across blockchain networks. Independent artists & communities can create Media Studios (Record Labels, Agencies or even your own band)& Media Communities to coordinate and collaborate.",
    denomName: "uflix",
    denomPow: 6,
    githubRepoName: 'omniflixhub'
  },
  {
    id: "starname",
    chainName: "Starname",
    chainId: "iov-mainnet-ibc",
    snapshotServer: "https://snapshots2.nodejumper.io",
    rpcServer: "https://starname.nodejumper.io",
    rpcPeer: "3180fdc5e477e675acd22e63477ce3a2db20edf9@starname.nodejumper.io:34656",
    serviceName: "starnamed",
    homeDirectoryName: ".starnamed",
    twitter: "https://twitter.com/starname_me",
    github: "https://github.com/iov-one",
    globe: "https://www.starname.me/",
    medium: "https://medium.com/iov-internet-of-values",
    discord: "https://discord.gg/xE36Rcsv37",
    validatorUrl: "https://ping.pub/starname/staking/starvaloper1c8p90su0tdz67xdhx5470lzvs2lw8twqw9j0vf",
    projectOverview: "Starname is a fully decentralized, blockchain-based username platform, bridging the popular internet and the complex blockchain ecosystem by allowing users to create customised usernames that represent their blockchain wallet and identity.",
    stateSyncDisabled: true,
    denomName: "uiov",
    denomPow: 6,
    apiChainId: "iov",
    githubRepoName: 'starnamed'
  },
  {
    id: "osmosis",
    chainName: "Osmosis",
    chainId: "osmosis-1",
    snapshotServer: "https://snapshots2.nodejumper.io",
    rpcServer: "https://osmosis.nodejumper.io",
    rpcPeer: "83c06bc290b6dffe05aa9cec720bedfc118afcbc@osmosis.nodejumper.io:35656",
    serviceName: "osmosisd",
    homeDirectoryName: ".osmosisd",
    twitter: "https://twitter.com/osmosiszone",
    github: "https://github.com/osmosis-labs",
    globe: "https://osmosis.zone",
    medium: "https://medium.com/osmosis",
    discord: "https://discord.gg/H8S3dApme6",
    validatorUrl: "https://www.mintscan.io/osmosis/validators/osmovaloper1vpqqry2dfrrrh33wrnxjj9k9xg928z646w97p6",
    denomName: "uosmo",
    denomPow: 6,
    stateSyncDisabled: true,
    stateSyncExtraStep: '\n\n# wait for "wrong Block.Header.Version. Expected {11 0}, got {11 1}" error\n\n' +
      'cd && git clone https://github.com/tendermint/tendermint\n' +
      'cd tendermint && git checkout callum/app-version && make install\n' +
      'tendermint set-app-version 1 --home $HOME/.osmosisd\n' +
      '\n' +
      'sudo systemctl restart osmosisd && sudo journalctl -u osmosisd -f --no-hostname -o cat',
    newWayUnsafeResetAll: true,
    githubRepoName: 'osmosis'
  },
  {
    id: "galaxy",
    chainName: "Galaxy",
    chainId: "galaxy-1",
    snapshotServer: "https://snapshots2.nodejumper.io",
    rpcServer: "https://galaxy.nodejumper.io",
    rpcPeer: "1e9aa80732182fd7ea005fc138b05e361b9c040d@galaxy.nodejumper.io:30656",
    serviceName: "galaxyd",
    homeDirectoryName: ".galaxy",
    twitter: "https://twitter.com/glxuniverse",
    github: "https://github.com/galaxies-labs",
    globe: "https://galaxychain.zone",
    medium: "https://medium.com/@galaxyuniverse",
    discord: "https://discord.com/invite/DkPNtpJQ8C",
    validatorUrl: "https://explorer.postcapitalist.io/galaxy/staking/galaxyvaloper18nlst8rzmj0m2r7d2fattr3qmn3pmzyg740978",
    projectOverview: "The Galaxy protocol builds a base system for further advanced metaverse.",
    summaryDisabled: true,
    denomName: "uglx",
    denomPow: 6,
    githubRepoName: 'galaxy'
  },
  {
    id: "evmos",
    chainName: "Evmos",
    chainId: "evmos_9001-2",
    snapshotServer: "https://snapshots1.nodejumper.io",
    rpcServer: "https://evmos.nodejumper.io",
    rpcPeer: "876eadd24a1f4f9f88f4ea540cb1ff456a4e34ee@evmos.nodejumper.io:36656",
    serviceName: "evmosd",
    homeDirectoryName: ".evmosd",
    twitter: "https://twitter.com/EvmosOrg",
    github: "https://github.com/tharsis",
    globe: "https://evmos.org/",
    medium: "https://medium.com/@TharsisHQ",
    discord: "https://discord.gg/evmos",
    validatorUrl: "https://ping.pub/evmos/staking/evmosvaloper1hm5elxdjfx4pltn00e0tde0avhpj03tynuhkk3",
    denomName: "aevmos",
    denomPow: 18,
    newWayUnsafeResetAll: true,
    githubRepoName: 'evmos'
  },
  {
    id: "another1-testnet",
    chainName: "Another-1",
    chainId: "anone-testnet-1",
    snapshotServer: "https://snapshots1-testnet.nodejumper.io",
    rpcServer: "https://another1-testnet.nodejumper.io",
    rpcPeer: "2b540c43d640befc35959eb062c8505612b7d67f@another1-testnet.nodejumper.io:26656",
    serviceName: "anoned",
    homeDirectoryName: ".anone",
    twitter: "https://twitter.com/AN1official",
    github: "https://github.com/notional-labs",
    globe: "https://another-1.io",
    medium: "https://medium.com/@TharsisHQ",
    discord: "https://discord.gg/wHP4sYwHCJ",
    validatorUrl: "https://anone.explorers.guru/validator/onevaloper1fngfsax3w9mywln2njh5s3nf92nyfaueqg6jhy",
    denomName: "uan1",
    denomPow: 6,
    summaryDisabled: true,
    isTestnet: true,
    hardwareRequirements: "4CPU 8RAM 200GB",
    projectOverview: "Another-1 platform is an ecosystem that aggregates users and markets using a hybrid approach making it seamless for non crypto native users. The AN1 front end is built in Vue.js and served via the browser or electron app.",
    githubRepoName: 'anone'
  },
  {
    id: "sei-testnet",
    chainName: "Sei Protocol",
    chainId: "atlantic-1",
    snapshotServer: "https://snapshots1-testnet.nodejumper.io",
    rpcServer: "https://sei-testnet.nodejumper.io",
    rpcPeer: "4b5fb7390e9c64bc96f048816f472f4559fafd94@sei-testnet.nodejumper.io:28656",
    serviceName: "seid",
    homeDirectoryName: ".sei",
    twitter: "https://twitter.com/SeiNetwork",
    github: "https://github.com/sei-protocol",
    globe: "https://www.seinetwork.io/",
    discord: "https://discord.gg/6vg2WYEzr2",
    telegram: "https://t.me/seinetwork",
    validatorUrl: "https://sei.explorers.guru/validator/seivaloper1kl7885wtqwu2pau3c6z7x6ptes730fnt4auawd",
    denomName: "usei",
    denomPow: 6,
    summaryDisabled: true,
    newWayUnsafeResetAll: true,
    isTestnet: true,
    hardwareRequirements: "4CPU 8RAM 200GB",
    projectOverview: "Sei Network is the first orderbook-specific L1 blockchain. It is built using the Cosmos SDK and Tendermint core, and features a built-in central limit orderbook (CLOB) module. Decentralized applications building on Sei can build on top of the CLOB, and other Cosmos-based blockchains can leverage Sei's CLOB as a shared liquidity hub and create markets for any asset.",
    githubRepoName: 'sei-chain'
  },
  {
    id: "dws-testnet",
    chainName: "DWS",
    chainId: "deweb-testnet-1",
    snapshotServer: "https://snapshots1-testnet.nodejumper.io",
    rpcServer: "https://dws-testnet.nodejumper.io",
    rpcPeer: "c5b45045b0555c439d94f4d81a5ec4d1a578f98c@dws-testnet.nodejumper.io:27656",
    serviceName: "dewebd",
    homeDirectoryName: ".deweb",
    twitter: "https://twitter.com/dewebservices",
    github: "https://github.com/deweb-services",
    globe: "https://deweb.services",
    discord: "https://discord.gg/EeH8C8gUuX",
    validatorUrl: "https://dws.explorers.guru/validator/dewebvaloper1pdhaj6ct3wyfahn2u6zllxp3dq6dfuatwtkf6n",
    denomName: "udws",
    denomPow: 6,
    summaryDisabled: true,
    isTestnet: true,
    hardwareRequirements: "4CPU 8RAM 200GB",
    projectOverview: "DWS (Decentralized Web Services) is a decentralized cloud infrastructure management platform. DWS will take care of all the decentralized services health and will smoothly reinstantiate any service, which will go down, DWS will control funds spendings and will notify you in Slack/Telegram/Jami about any needed fundings. Also DWS will have a nice dashboard showing all the balances, spendings and incidents happen regarding the cloud infrastructure you use.",
    githubRepoName: 'deweb'
  },
  {
    id: "uptick-testnet",
    chainName: "Uptick",
    chainId: "uptick_7776-1",
    snapshotServer: "https://snapshots1-testnet.nodejumper.io",
    rpcServer: "https://uptick-testnet.nodejumper.io",
    rpcPeer: "ce7e61b565292d6606fc0fbf4b2bc364227a1ef0@uptick-testnet.nodejumper.io:30656",
    serviceName: "uptickd",
    homeDirectoryName: ".uptickd",
    twitter: "https://twitter.com/uptickproject",
    github: "https://github.com/UptickNetwork",
    globe: "https://uptick.network",
    medium: "https://medium.com/@uptickproject",
    discord: "https://discord.gg/w7mYy8btu7",
    validatorUrl: "https://explorer.testnet.uptick.network/uptick-network-testnet/staking/uptickvaloper1krfszwgypy2pzzkh94juf4jcnyfkczzqr45l5u",
    denomName: "auptick",
    denomPow: 6,
    summaryDisabled: true,
    newWayUnsafeResetAll: true,
    isTestnet: true,
    hardwareRequirements: "4CPU 8RAM 200GB",
    projectOverview: "The Business Grade Multi-Chain NFT Infrastructure for Web 3.0.",
    githubRepoName: 'uptick'
  },
  {
    id: "quicksilver-testnet",
    chainName: "Quicksilver",
    chainId: "killerqueen-1",
    snapshotServer: "https://snapshots1-testnet.nodejumper.io",
    rpcServer: "https://quicksilver-testnet.nodejumper.io",
    rpcPeer: "420ddb75ac0c0eb27d46c41007f18a0bf5588fc0@quicksilver-testnet.nodejumper.io:31656",
    serviceName: "quicksilverd",
    homeDirectoryName: ".quicksilverd",
    twitter: "https://twitter.com/quicksilverzone",
    github: "https://github.com/ingenuity-build",
    globe: "https://quicksilver.zone/",
    medium: "https://medium.com/quicksilverzone",
    discord: "https://discord.gg/6BXWvuGZYn",
    validatorUrl: "https://quicksilver.explorers.guru/validator/quickvaloper159njc3xk0xv76x323936frgwxf9zn3wvp0dj8n",
    denomName: "uqck",
    denomPow: 6,
    summaryDisabled: true,
    newWayUnsafeResetAll: true,
    isTestnet: true,
    hardwareRequirements: "4CPU 8RAM 200GB",
    projectOverview: "THE COSMOS LIQUID STAKING ZONE",
    githubRepoName: 'quicksilver'
  },
  {
    id: "paloma-testnet",
    chainName: "Paloma",
    chainId: "paloma-testnet-6",
    snapshotServer: "https://snapshots1-testnet.nodejumper.io",
    rpcServer: "https://paloma-testnet.nodejumper.io",
    rpcPeer: "484e0d3cc02ba868d4ad68ec44caf89dd14d1845@paloma-testnet.nodejumper.io:33656",
    serviceName: "palomad",
    homeDirectoryName: ".paloma",
    twitter: "https://twitter.com/paloma_chain",
    github: "https://github.com/palomachain",
    globe: "https://www.palomachain.com",
    telegram: "https://t.me/palomachain",
    validatorUrl: "https://paloma.explorers.guru/validator/palomavaloper18dc22w5ayq0xqfp8skpeq8ghx4c7ahtgnpfs4l",
    denomName: "ugrain",
    denomPow: 6,
    summaryDisabled: true,
    newWayUnsafeResetAll: true,
    isTestnet: true,
    hardwareRequirements: "4CPU 8RAM 200GB",
    projectOverview: "Paloma is a Cosmos-SDK blockchain protocol for sending and receiving messages from any other blockchain. Paloma’s design aims to enable any developer to control any smart contract from the Paloma network. Paloma may be compared to the numerous cross-chain messaging protocols currently exploding into the cryptocurrency ecosystem, but with a few key differences.",
  },
  {
    id: "stafihub-testnet",
    chainName: "Stafihub",
    chainId: "stafihub-public-testnet-3",
    snapshotServer: "https://snapshots2-testnet.nodejumper.io",
    rpcServer: "https://stafihub-testnet.nodejumper.io",
    rpcPeer: "4b5afbe0bd0d128f98943c0f2941976bd3fb0b9b@stafihub-testnet.nodejumper.io:26656",
    serviceName: "stafihubd",
    homeDirectoryName: ".stafihub",
    twitter: "https://twitter.com/StaFiHub_",
    github: "https://github.com/stafihub",
    globe: "https://www.stafihub.io",
    discord: "https://discord.gg/98GuF8AE3D",
    validatorUrl: "https://testnet-explorer.stafihub.io/stafi-hub-testnet/staking/stafivaloper18nuuhuwywsk8at72pxk94rw27nkkf7pl8ws3kv",
    denomName: "ufis",
    denomPow: 6,
    summaryDisabled: true,
    newWayUnsafeResetAll: true,
    isTestnet: true,
    hardwareRequirements: "4CPU 8RAM 200GB",
    projectOverview: "StaFiHub is a parallel chain developed by StaFi based on the Cosmos SDK, by implementing the rToken Protocol, StaFiHub releases liquidity of tokens staked in other chains of the Cosmos Ecosystem.",
    githubRepoName: 'stafihub'
  },
  {
    id: "teritori-testnet",
    chainName: "Teritori",
    chainId: "teritori-testnet-v2",
    snapshotServer: "https://snapshots2-testnet.nodejumper.io",
    rpcServer: "https://teritori-testnet.nodejumper.io",
    rpcPeer: "0d19829b0dd1fc324cfde1f7bc15860c896b7ac1@teritori-testnet.nodejumper.io:27656",
    serviceName: "teritorid",
    homeDirectoryName: ".teritorid",
    twitter: "https://twitter.com/TeritoriNetwork",
    github: "https://github.com/TERITORI",
    globe: "https://teritori.com",
    discord: "https://discord.gg/UAzKUpsZhn",
    validatorUrl: "https://explorer.ericet.xyz/teritori/staking/torivaloper18t2j2kc08su2l2dafcanq43yxj9akpwp6gemr0",
    denomName: "utori",
    denomPow: 6,
    summaryDisabled: true,
    newWayUnsafeResetAll: true,
    isTestnet: true,
    hardwareRequirements: "4CPU 8RAM 200GB",
    projectOverview: "Teritori is a multi-chain hub designed to allow IBC and non IBC communities to connect, trade services & NFTs, launch new projects & build further existing ones. The hub notably includes dApps for a daily use such as an NFT launchpad, a marketplace and social features for individuals & communities: Innovate, Trade, Organize.",
    githubRepoName: 'teritori-chain'
  }
]
