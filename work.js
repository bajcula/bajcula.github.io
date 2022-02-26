
let currentImageIndex = 0;

let textArray = [
    "PROJECT 1",
    "PROJECT 2",
    "PROJECT 3",
    "PROJECT 4"
]

const showNextPic = () => {

    const numOfImages = $('.carousel-images').children().length - 1;
    let currentImage = $('.carousel-images').children().eq(currentImageIndex)
    currentImage.css("display", "none")
    if (currentImageIndex < numOfImages) {
        currentImageIndex++;
    } else {
        currentImageIndex = 0;
    }
    $('.carousel-images').children().eq(currentImageIndex).css('display', 'block')
    $("#text").text(textArray[currentImageIndex])
}
$('.next').on('click', showNextPic)

const showPrevPic = () => {
    const numOfImages = $('.carousel-images').children().length - 1;
    let currentImage = $('.carousel-images').children().eq(currentImageIndex)
    currentImage.css("display", "none")
    if (currentImageIndex > 0) {
        currentImageIndex--;
    } else {
        currentImageIndex = numOfImages;
    }
    $('.carousel-images').children().eq(currentImageIndex).css('display', 'block')
    $("#text").text(textArray[currentImageIndex])
}
$('.previous').on('click', showPrevPic)

const changeImageFunc = (num) => {
    const numOfImages = $('.carousel-images').children().length - 1;
    for (i = 0; i <= numOfImages; i++) {
        $('.carousel-images').children().eq(i).css('display', 'none')
    }
    currentImageIndex = num - 1
    $('.carousel-images').children().eq(currentImageIndex).css('display', 'block')
    $("#text").text(textArray[currentImageIndex])
}

$("#image1button").on('click', () => {
    changeImageFunc(1)
})
$("#image2button").on('click', () => {
    changeImageFunc(2)
})
$("#image3button").on('click', () => {
    changeImageFunc(3)
})
$("#image4button").on('click', () => {
    changeImageFunc(4)
})

