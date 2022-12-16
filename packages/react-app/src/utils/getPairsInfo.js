import { abis } from "@my-app/contracts";


export const getPairsInfo = async (pairAddresses, web3) => {
    const pairsInfo = [];
    const pairABI = abis.pair;
    const tokenABI = abis.erc20.abi;

    for (let index = 0; index < pairAddresses.length; index++) {
        const pairAddress = pairAddresses[index];
        const pair = new web3.eth.Contract(pairABI, pairAddress);
        
        const token0Address = await pair.methods.token0().call();
        const token1Address = await pair.methods.token1().call();

        const token0contract = new web3.eth.Contract(tokenABI, token0Address);
        const token1contract = new web3.eth.Contract(tokenABI, token1Address);

        const token0name = await token0contract.methods.name.call();
        const token1name = await token1contract.methods.name.call();

        pairsInfo.push({
            address: pairAddress,
            token0Address,
            token1Address,
            token0name,
            token1name
        });
    }

    return pairsInfo;

}