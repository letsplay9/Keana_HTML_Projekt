
var imageArray1 = ["assets/condescending-willy-wonka.jpg","assets/success-kid.jpg","assets/surprised-pikachu.jpg","assets/kim-in-bed.jpg"];
var imageArray2 = ["assets/ermahgerd.jpg","assets/how-dare-you.jpg","assets/math-lady.jpg","assets/philosoraptor.jpg"];
var imageArray3 = ["assets/but-thats-none-of-my-business.jpg","assets/religion-pigeon.jpg","assets/scumbag-steve.jpg","assets/skeletor.jpg"];


var imageIndex1 = 0;
var imageIndex2 = 0;
var imageIndex3 = 0;

function changeImage1() {
    if(++imageIndex1 >= imageArray1.length) {
        imageIndex1 = 0;
    }
    document.getElementById("Image1").src = imageArray1[imageIndex1];
}

function changeImage2() {
    if(++imageIndex2 >= imageArray2.length) {
        imageIndex2 = 0;
    }
    document.getElementById("Image2").src = imageArray2[imageIndex2];
}

function changeImage3() {
    if(++imageIndex3 >= imageArray3.length) {
        imageIndex3 = 0;
    }
    document.getElementById("Image3").src = imageArray3[imageIndex3];
}

function delayChangeImage2() {
    setInterval(changeImage2, 3000);
}

function delayChangeImage3() {
    setInterval(changeImage3, 3000);
}

setInterval(changeImage1, 3000);

setTimeout(delayChangeImage2, 1000);
setTimeout(delayChangeImage3, 2000);




