console.log("about js running")

$("#resume").on('click', () => {
    alert('COMING SOON')
})


const flipping1 = () => {
    $("#1").toggleClass("is-flipped")
}

$("#1").on("click", flipping1)

const flipping2 = () => {
    $("#2").toggleClass("is-flipped")
}

$("#2").on("click", flipping2)

