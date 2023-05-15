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

async function transfersByTokenId(contractAddress, tokenId) {
  try {
    const result = await sdk.api.getTransfersByTokenId({
      contractAddress: contractAddress,
      tokenId: tokenId,
    });
    console.log('transfers:', result);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

transfersByTokenId('0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D', '6083');

