// create a variable to hold your NFT's
const NFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, skinColor, accessories, upperOutfit, lowerOutfit) {
  // To have a unique Id for each NFT that we create
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let uniqueId = '';

  for (let i = 0; i < 10; i++) {
    const randomCharacters = Math.floor(Math.random() * characters.length);
    uniqueId += characters.charAt(randomCharacters);
  }

  const NFT = {
    uniqueId: uniqueId,
    skinColor: skinColor,
    accessories: accessories,
    upperOutfit: upperOutfit,
    lowerOutfit: lowerOutfit
  };

  NFTs.push(NFT);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata to the output div
function listNFTs() {
  const outputDiv = document.getElementById('output');

  NFTs.forEach((nft) => {
    outputDiv.innerHTML += 'Unique ID: ' + nft.uniqueId + '<br>';
    outputDiv.innerHTML += 'Skin Color: ' + nft.skinColor + '<br>';
    outputDiv.innerHTML += 'Accessories: ' + nft.accessories + '<br>';
    outputDiv.innerHTML += 'Upper Outfit: ' + nft.upperOutfit + '<br>';
    outputDiv.innerHTML += 'Lower Outfit: ' + nft.lowerOutfit + '<br>';
    outputDiv.innerHTML += '----------------------<br>';
  });
}

// print the total number of NFTs we have minted
function getTotalSupply() {
  const outputDiv = document.getElementById('output');
  outputDiv.innerHTML += 'Total Supply: ' + NFTs.length + '<br>';
}

// call your functions below this line
mintNFT('Bob', 'Red', 'Hat', 'T-Shirt', 'Jeans');
mintNFT('Mark', 'Blue', 'Glasses', 'Hoodie', 'Shorts');
listNFTs();
getTotalSupply();
