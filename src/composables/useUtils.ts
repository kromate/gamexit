export const playSound = (url) => {
    const audio = new Audio(url)
    audio.play()
}

export const disableReload = () => {
    window.onbeforeunload = () => {
        return 'Dude, are you sure you want to leave? Think of the kittens!'
    }
}