console.log("js running")


const openModal = () => {
    $("#message-modal").css('display', 'flex')
}

$("#message").on('click', openModal)

$("#close-modal").on('click', () => {
    $("#message-modal").css('display', 'none')
})

$("#modal-submit").on('click', () => {
    $("#message-modal").css('display', 'none')
})
