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
const getCollectionsByWallet = async (walletAddress)=> {
    const result = await sdk.api.getCollectionsByWallet({
        walletAddress: walletAddress,
      });
      console.log('collections:', result);
}

(async() => {
    try {
      await getCollectionsByWallet('0xacdaEEb57ff6886fC8e203B9Dd4C2b241DF89b7a');
    } catch (error) {
      console.log(error);
    }
})();
