import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 1,
    lpSymbol: 'SAWON-BUSD LP',
    lpAddresses: { 137: '0xe386c51F09d3dA7AE403838F3864317cd3fbaD7B', }, // SAWON-BUSD LP swap.c4ei.net 137
    tokenSymbol: 'SAWON',
    tokenAddresses: { 137: '0x52D1eC2ed762D7Fb3bE336Ec678569C730B87d66', }, // SaWonToken
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    image: 'sawon-busd',
  },
  {
    pid: 1,
    risk: 2,
    lpSymbol: 'SAWON-C4EI LP',
    lpAddresses: { 137: '0x987d4aBAFcfaC6e384aCe500B5688F9e824261e9', }, // SAWON-C4EI LP swap.c4ei.net 137
    tokenSymbol: 'SAWON',
    tokenAddresses: { 137: '0x52D1eC2ed762D7Fb3bE336Ec678569C730B87d66', }, // SaWonToken
    quoteTokenSymbol: QuoteToken.C4EI,
    quoteTokenAdresses: contracts.wbnb,
    image: 'sawon-klay',
    // isDisplay: 'N',
  },
  {
    pid: 2,
    risk: 1,
    lpSymbol: 'C4EI-BUSD LP',
    lpAddresses: { 137: '0x45732739B1E47821A625aF3d8F818A1DBf6c1B65', },
    tokenSymbol: 'C4EI',
    tokenAddresses: { 137: '0x41b02ED26Da14a3CC790B861174Dd4AD02213790', }, // wbnb (0x41b02ED26Da14a3CC790B861174Dd4AD02213790) --> wklay ? 
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    // isDisplay: 'N',
  },
]

export default farms
