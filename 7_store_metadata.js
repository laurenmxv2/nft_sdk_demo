// Import the libraries and load the environment variables.
const { SDK, Auth, TEMPLATES, Metadata } = require('@infura/sdk') ;
require('dotenv').config()

// Create Auth object
const auth = new Auth({
      projectId: process.env.INFURA_API_KEY,
      secretId: process.env.INFURA_API_KEY_SECRET,
      privateKey: process.env.WALLET_PRIVATE_KEY,
      chainId: 11155111,
});

// Instantiate SDK
const sdk = new SDK(auth);

async function createAndStoreMetadata() {
  try {
    // Create metadata
    const collectionMetadata = Metadata.openSeaCollectionLevelStandard({
      name: 'penguins',
      description: "just some penguins",
      image: await sdk.storeFile({
        path: 'https://gateway.pinata.cloud/ipfs/QmWtgDewkagKn7ZYTFyHfkJ3uYCnmL3gfdWdSQpXs4VCaN/jet_img3', // replace with your image file path
      }),
      external_link: 'infura.io',
    });

    // Store metadata
    const storeMetadata = await sdk.storeMetadata({ metadata: collectionMetadata });

    // Log the result
    console.log('Stored metadata:', storeMetadata);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

createAndStoreMetadata();
