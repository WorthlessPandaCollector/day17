// 1) create a function that accepts an array of strings, and prints out each one in a loop


    let names: string[] = ["ryan", "tim"];
function printStringInLoop(array: string[]) {
    array.forEach(element => console.log(element));
}

printStringInLoop(names)


// 2) Create a function that takes 3 numbers, adds them together, and returns them as a number.

function addThreeNumbersAndReturn(x: number, y:number, z:number) {
    const add = x + y + z;
    console.log(add)
}
addThreeNumbersAndReturn(1, 2, 3);

// 3) Create a function that takes a string as an argument, and returns a promise to return "hello" plus that string, as a string..

const aString: string = "Timmmmmay";

function takesStringArgumentReturnsPromise(myString: string): Promise<string> {
    return new Promise((resolve) => resolve("helloooooooooo " + myString));
}

takesStringArgumentReturnsPromise(aString).then((str) => console.log(str))

// 4) Create a function that accepts a single array where the elements can be strings OR numbers OR booleans. 
// Loop over the array, and if the element is a string, print the string plus the text "is a string". 
// If it's a number, print out the number plus "is a number". If it's a boolean, print out the boolean plus "is a boolean".

const myArray: (string | number | boolean)[] = [1, 69, 420, "tim", "cokcs", "r", "gross", true, true, true]

function defineElementsInArray(array: (string | number | boolean)[]) {
    myArray.forEach(element => {
        if (typeof element === 'string'){
            console.log(element, "is a string");
        }
        else if (typeof element === 'number') {
            console.log(element, "is a numbah");
        }
        else if (typeof element === 'boolean'){
            console.log(element, "is a woolybooooooly");
        }
    });

}

defineElementsInArray(myArray)

// 5 something to do with objects ??dafuq??

// Knowing this, create a type that represents a discord user that has the following properties:
// name, which is a string
// isAdmin, which is a boolean
// isGMI, which is a boolean
// and roles, which is an array of strings.

type DiscordUser = {
    name: string;
    isAdmin: boolean;
    isGMI: boolean;
    roles: string[]
}

// Then, create a type that represents a discord message that has the following properties:
// user, which is type DiscordUser
// text, which is a string
// keks, which is a number.

type DiscordMessage = {
    user: DiscordUser;
    text: string;
    keks: number;
}



// 6) Create functions that use your types:
// - addKekToMessage which takes a discord message


function addKeksToMessage(message: DiscordMessage) {
    message.keks += 1;
}

const tim: DiscordUser = {
    name: "tim",
    isAdmin: true,
    isGMI: true,
    roles:["gay"]
}

const timsMessage: DiscordMessage = {
    user: tim,
    text: "poapin",
    keks: 68

}

addKeksToMessage(timsMessage);
console.log(timsMessage)

// - canDeleteServer which takes a discord user and checks if they are admin or not before returning a boolean

function canDeleteServer(user: DiscordUser){
    if(user.isAdmin === true){
        return true;
    } else {
        return false;
    }
}

console.log(canDeleteServer(tim));


// - editMessage which takes a discord message, a discorduser, and newText, 
//          and IF the user name is the same as the user on the discordmessage itself, allows them to edit the message.

function editDiscordMessage(message: DiscordMessage, user: DiscordUser, newText: string) {
    if(user.name === message.user.name) {
        message.text = newText;
    } 
}

editDiscordMessage(timsMessage, tim, "suck my nftitttttties")
console.log(timsMessage)


// 7) Create a type that represents an NFT, with properties like imageURL, name, currentOwnerAddress, openSeaFloorPrice, and description.

type NFT = {
    imageURL: string;
    name: string;
    currentOwnerAddress: string;
    openSeaFloorPrice: number;
    description: string;
}


// 8) Create a function that accepts an array of NFTs and returns the one with the lowest floor price. 
// Not the floor price itself, but it returns an NFT. getCheapestNft
const nounPhunks: NFT = {
    imageURL: "https://nounphunks.cool",
    name: "nounphunk #9696",
    currentOwnerAddress: "0x2349529347672934572349752890378452358324908534",
    openSeaFloorPrice: 69,
    description: "well isn't that special"
}

const rektguy: NFT = {
    imageURL: "https://poortoby.io",
    name: "tobys stupid cheap rekt guy #696966996",
    currentOwnerAddress: "tobyGMINGMI.eth",
    openSeaFloorPrice: 1.68,
    description: "SAD"
}

const eggGuy: NFT = {
    imageURL: "ipfs://asdlfaji.io.io.io.io",
    name: "duke has lots of money $420milion",
    currentOwnerAddress: "duke.eth",
    openSeaFloorPrice: 420,
    description: "take on me video but with potato or egg or w/e i dunno"
}

const nftArray: NFT[] = [nounPhunks, rektguy, eggGuy]

function getCheapestNft(nft: NFT[]){
    nft.sort(function(a,b){
       return a.openSeaFloorPrice - b.openSeaFloorPrice
    });
    return nft[0];
}

console.log(getCheapestNft(nftArray));

