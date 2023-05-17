import { ethers } from "./ethers-5.1.esm.min.js";
import { abi, contractAddress } from "./constants.js";

const connectButton = document.getElementById("ConnectButton");
const donateButton = document.getElementById("DonateButton");

connectButton.onclick = connect;
donateButton.onclick = donate;

async function connect() {
  if (typeof window.ethereum !== "undefined") {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    connectButton.innerHTML = "Connected";
    connectButton.style.justifyContent = "center";
    connectButton.style.alignItems = "center";
  } else {
    alert("Metamask Not Found");
  }
}

async function donate() {
  const ethAmount = document.getElementById("ethamount").value;

  if (typeof window.ethereum !== "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    const address = await contract.signer.getAddress();
    console.log(address);

    try {
      const tx = await contract.donate({
        value: ethers.utils.parseEther(ethAmount),
      });
      await listenForTransactionMine(tx, provider);
    } catch (error) {
      console.log(error);
    }
  }
}
function listenForTransactionMine(transactionResponse, provider) {
  console.log(`Mining ${transactionResponse.hash}...`);
  //return new Promise();
  //listen for the transaction to be mined

  return new Promise((resolve, reject) => {
    provider.once(transactionResponse.hash, (transactionReceipt) => {
      console.log(
        `Completed with ${transactionReceipt.confirmations} confirmations`
      );
      resolve(); //THe promise ends when resolves or reject is called
      //Since resolve is called the promise is resolved and function is returned
    });
  });
}
