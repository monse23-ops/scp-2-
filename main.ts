radio.setGroup(50)
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        radio.sendNumber(0)
    } else if (input.pinIsPressed(TouchPin.P1)) {
        basic.showLeds(`
            . # # . .
            . . # . .
            . . # . .
            . . # . .
            . # # # .
            `)
        radio.sendNumber(1)
    } else if (input.pinIsPressed(TouchPin.P2)) {
        basic.showLeds(`
            . # # # #
            . . . . #
            . # # # #
            . # . . .
            . # # # #
            `)
        radio.sendNumber(2)
    }
})
