// Import the libraries and load the environment variables.
const { SDK, Auth, TEMPLATES, Metadata } = require('@infura/sdk') ;
require('dotenv').config()

// Create Auth object
const auth = new Auth({
      projectId: process.env.INFURA_API_KEY,
      secretId: process.env.INFURA_API_KEY_SECRET,
      privateKey: process.env.WALLET_PRIVATE_KEY,
      chainId: 1,
});

// Instantiate SDK
const sdk = new SDK(auth);

async function getOwnersbyContractAddress(contractAddress) {
  try {
    const result = await sdk.api.getOwnersbyContractAddress({
      contractAddress: contractAddress,
    });
    console.log('Owners:', result);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

getOwnersbyContractAddress('0x45272B4C395261e91588515744E35fd6EBbC6804');

