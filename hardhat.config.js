require("@nomiclabs/hardhat-waffle")
require("hardhat-gas-reporter")
require("@nomiclabs/hardhat-etherscan")
require("dotenv").config()
require("solidity-coverage")
require("hardhat-deploy")
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || ""
const KOVAN_RPC_URL =
    process.env.KOVAN_RPC_URL ||
    "https://mainnet.infura.io/v3/fdb9960fee154d058a8b211b3cb550cd"
// const RINKEBY_RPC_URL =
//     process.env.RINKEBY_RPC_URL ||
//     "https://mainnet.infura.io/v3/fdb9960fee154d058a8b211b3cb550cd"
const PRIVATE_KEY =
    process.env.PRIVATE_KEY ||
    "0x11ee3108a03081fe260ecdc106554d09d9d1209bcafd46942b10e02943effc4a"
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || ""

module.exports = {
    // defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            chainId: 31337,
            // gasPrice: 130000000000,
        },
        kovan: {
            url: KOVAN_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 42,
            blockConfirmations: 6,
        },
        rinkeby: {
            url: "https://rinkeby.infura.io/v3/92695d013ef64f9abdbcdfb1f7b951e8",
            accounts: [PRIVATE_KEY],
            chainId: 4,
            blockConfirmations: 6,
        },
    },
    solidity: {
        compilers: [
            {
                version: "0.8.8",
            },
            {
                version: "0.6.6",
            },
        ],
    },
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
    gasReporter: {
        enabled: true,
        currency: "USD",
        outputFile: "gas-report.txt",
        noColors: true,
        // coinmarketcap: COINMARKETCAP_API_KEY,
    },
    namedAccounts: {
        deployer: {
            default: 0, // here this will by default take the first account as deployer
            1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
        },
    },
}

// require("dotenv").config();

// require("@nomiclabs/hardhat-etherscan");
// require("@nomiclabs/hardhat-waffle");
// require("hardhat-gas-reporter");
// require("solidity-coverage");
// require("hardhat-deploy")

// // You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

// /**
//  * @type import('hardhat/config').HardhatUserConfig
//  */
// const RINKEBY_RPC_URL=process.env.RINKEBY_RPC_URL
// const PRIVATE_KEY=process.env.PRIVATE_KEY
// const COINMARKET_API_KEY=process.env.COINMARKET_API_KEY
// const ETHERSCAN_API_KEY=process.env.ETHERSCAN_API_KEY
// module.exports = {
//   // solidity: "0.8.8",
//   solidity:{
//     compilers:[
//       {version:"0.8.8"},{version:"0.6.6"},
//     ]
//   },
//   defaultNetwork:"hardhat",
//   networks: {
//     url:RINKEBY_RPC_URL,
//     accounts:[PRIVATE_KEY],
//     chainId:4,
//     blockConfirmations:6,
//   },
//   gasReporter: {
//     enabled: false,
//     currency: "USD",
//     outputFile:"gas-report.txt",
//     noColors:true,
//     coinmarketcap:COINMARKET_API_KEY,
//     token:"MATIC",
//   },
//   etherscan: {
//     apiKey: ETHERSCAN_API_KEY,
//   },
//   namedAccounts:{
//     deployer:{
//       default:0,

//     }
//   }
// };
