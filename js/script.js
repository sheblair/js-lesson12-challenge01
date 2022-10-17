const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

const getImage = async function () {
    // calling the api to fetch the data
    const res = await fetch("https://picsum.photos/v2/list?limit=100");
    // translating the json data to javascript object. images becomes the array of JS objects
    const images = await res.json();
    
    // calling the function to grab a random image from the array of JS objects
    selectRandomImage(images);
};

const selectRandomImage = function (images) {
    // index position for random images
    const randomIndex = Math.floor(Math.random() * images.length);
    // pulling a random image from the images array using the random index position
    const randomImage = images[randomIndex];

    displayImage(randomImage);
};

// function to display the image. it receives randomImage as a parameter because it will be accepting the random image object.
// the randomImage const is possible to access because this function will be called within selectRandomImage() which is where const randomImage was declared
const displayImage = function (randomImage) {
    const author = randomImage.author;
    const imageAddress = randomImage.download_url;
    
    authorSpan.innerText = author;
    img.src = imageAddress;
    imgDiv.classList.remove("hide");
};

// move the main function into the button event listener so it only happens when button is clicked
button.addEventListener("click", function () {
    getImage();
});