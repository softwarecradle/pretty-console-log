const DEFAULTS = Object.freeze({
    BACKGROUND: '#0000',
    COLOR: '#777',
    FONT: {
        SIZE: 14
    }
})


// print in color
exports.pretty = {
    log(text, color) {
        console.log(`%c${text ? text : ''}`, 
            `background: ${DEFAULTS.BACKGROUND}; color: ${color ? color : DEFAULTS.COLOR}`)
    },

    log(text, color, fontSize) {
        console.log(`%c${text ? text : ''}`, 
            `background: ${DEFAULTS.BACKGROUND}; color: ${color ? color : DEFAULTS.COLOR}; font-size: ${fontSize ? fontSize : DEFAULTS.FONT.SIZE}px`)
    }
}