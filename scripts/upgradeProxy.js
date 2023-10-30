const { ethers, upgrades } = require('hardhat');

// The address of proxy
const proxyAddress = '0xa09178F186739bd4D835f4d201F628cA50842Faf';

async function main() {
  const VendingMachineV3 = await ethers.getContractFactory('VendingMachineV3');
  const upgraded = await upgrades.upgradeProxy(proxyAddress, VendingMachineV3);

  const implementationAddress = await upgrades.erc1967.getImplementationAddress(
    proxyAddress
  );

  console.log("The current contract owner is: " + upgraded.owner());
  console.log('Implementation contract address: ' + implementationAddress);
}

main();