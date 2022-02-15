// print in color
module.exports = Object.freeze({
    log(text, color) {
        console.log(`%c${text}`, `color: ${color}`)
    },

    log(text, color, fontSize) {
        console.log(`%c${text}`, `color: ${color}; font-size: ${fontSize}px`)
    }
})