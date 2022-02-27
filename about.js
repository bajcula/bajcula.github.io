console.log("about js running")

const flipping = () => {
    $(".card").toggleClass("is-flipped")
}

$(".card").on("click", flipping)
console.log($(".card"))

