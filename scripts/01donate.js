const { getNamedAccounts, ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  const { deployer } = await getNamedAccounts(); // Destructure the 'deployer' address from the named accounts
  const deployedContractAddress = process.env.polygonMumbaiContractAddress;
  // Ensure 'deployer' is a valid address or ENS name
  if (!ethers.utils.isAddress(deployer)) {
    throw new Error("Invalid 'deployer' address or ENS name");
  }

  const donates = await ethers.getContractAt(
    "donation",
    deployedContractAddress
  );
  console.log(`Donating at ${donates.address}`);
  console.log("Donating....");

  const tx = await donates.donate({ value: ethers.utils.parseEther("0.001") });
  await tx.wait(); // Remove the argument from wait() since it's not needed

  console.log("Donated 🔥🔥");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
