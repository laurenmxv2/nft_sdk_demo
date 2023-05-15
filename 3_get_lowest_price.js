

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
async function getLowestTradePrice() {
    try {
      const nft = await sdk.api.getLowestTradePrice({
        tokenAddress: '0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D',
      });
      console.log('Lowest price:', nft);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
  
  getLowestTradePrice();
  