const { ethers } = require("ethers");
require("dotenv").config({path: ".env"})

const INFURA_RPC_URL = process.env.INFURA_RPC_URL;
async function main() {
    // for infura
    // const provider = new ethers.providers.JsonRpcProvider(INFURA_RPC_URL);
    // For meta mask
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", "any");
    const signer = provider.getSigner();
    console.log(signer.address);
    // const balance = await provider.getBalance("0xE9Ec3662277405f4144c93347d7C568497d88146");
    // console.log(ethers.utils.formatEther(balance));
}

main();
