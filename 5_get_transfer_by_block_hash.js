
// Import the libraries and load the environment variables.
const { SDK, Auth, TEMPLATES, Metadata } = require('@infura/sdk') ;
require('dotenv').config()

// Create Auth object
const auth = new Auth({
      projectId: process.env.INFURA_API_KEY,
      secretId: process.env.INFURA_API_KEY_SECRET,
      privateKey: process.env.WALLET_PRIVATE_KEY,
      rpcUrl: process.env.RPC_URL,
      chainId: 1,
});

// Instantiate SDK
const sdk = new SDK(auth);
async function getTransfersByBlockHash(blockHash) {
    try {
      const transfersByBlockHash = await sdk.api.getTransfersByBlockHash({
        blockHash: blockHash,
      });
      console.log('transfers:', transfersByBlockHash);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
getTransfersByBlockHash('0xfb68701659daa9385e071613daaeab6196d815bac4679602fb9b7a4540490d6e');
  