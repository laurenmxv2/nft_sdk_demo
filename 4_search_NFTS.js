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

async function searchNFTs(query) {
  try {
    const result = await sdk.api.searchNfts({
      query: query,
    });
    console.log('nfts:', result);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

searchNFTs('rainbow penguins');
