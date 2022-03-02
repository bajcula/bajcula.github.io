console.log("js running")


const openModal = () => {
    $("#message-modal").css('display', 'block')
}

$("#message").on('click', openModal)

$("#close-modal").on('click', () => {
    $("#message-modal").css('display', 'none')
})
