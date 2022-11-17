import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 1,
    lpSymbol: 'SAWON-BUSD LP',
    lpAddresses: { 137: '0x89e485E5c252A3289CB6BFF07FbBDeEf8dEE0372', }, // SAWON-BUSD LP swap.c4ei.net 137
    tokenSymbol: 'SAWON',
    tokenAddresses: { 137: '0x52D1eC2ed762D7Fb3bE336Ec678569C730B87d66', }, // SaWonToken
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    image: 'sawon-busd',
  },
  {
    pid: 1,
    risk: 2,
    lpSymbol: 'SAWON-MATIC LP',
    lpAddresses: { 137: '0x59Ab84C3aEcd642eaf802d3D25E080db7A655558', }, // SAWON-MATIC LP swap.c4ei.net 137
    tokenSymbol: 'SAWON',
    tokenAddresses: { 137: '0x52D1eC2ed762D7Fb3bE336Ec678569C730B87d66', }, // SaWonToken
    quoteTokenSymbol: QuoteToken.MATIC,
    quoteTokenAdresses: contracts.wbnb,
    image: 'sawon-klay',
    // isDisplay: 'N',
  },
  {
    pid: 2,
    risk: 1,
    lpSymbol: 'MATIC-BUSD LP',
    lpAddresses: { 137: '0xf91B1B3a6b7a934B645cE203317B545202538E23', },
    tokenSymbol: 'MATIC',
    tokenAddresses: { 137: '0x41b02ED26Da14a3CC790B861174Dd4AD02213790', }, // wbnb (0x41b02ED26Da14a3CC790B861174Dd4AD02213790) --> wklay ? 
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    // isDisplay: 'N',
  },
]

export default farms
