export const playSound = (url) => {
    const audio = new Audio(url)
    audio.play()
}

export const disableReload = () => {
    addEventListener('beforeunload', (e) => e.preventDefault(), { capture: true })
}
export const 