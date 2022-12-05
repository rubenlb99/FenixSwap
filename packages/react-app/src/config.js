import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0xd5fbac1A4CE65270228d3E196f40e45d13494323"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/m7a68Z63IKtOCAVbGF-SdwIWfDcXWQJV",
  },
};