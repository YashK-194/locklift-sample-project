async function main() {
  const signer = (await locklift.keystore.getSigner("0"))!;
  const { contract: helloWorld, tx } = await locklift.factory.deployContract({
    contract: "HelloWorld",
    publicKey: signer.publicKey,
    initParams: {
      _nonce: locklift.utils.getRandomNonce(),
    },
    constructorParams: {},
    value: locklift.utils.toNano(3),
  });

  console.log(`HelloWorld deployed at: ${helloWorld.address.toString()}`);
  
  // Wait a bit to make sure the contract is properly deployed
  console.log("Waiting for contract deployment to be processed...");
  await new Promise(resolve => setTimeout(resolve, 5000));
  
  // Now interact with the deployed contract
  try {
    const result = await helloWorld.methods.printHello().call();
    console.log("Contract response:", result);
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error calling the contract:", error.message);
    } else {
      console.error("Error calling the contract:", error);
    }
  }
}

main()
  .then(() => process.exit(0))
  .catch(e => {
    console.log(e);
    process.exit(1);
  });