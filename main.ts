input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.lightLevel())
})
input.onButtonPressed(Button.B, function () {
    if (true) {
        led.setBrightness(input.lightLevel())
        basic.showNumber(input.lightLevel())
    }
})
basic.forever(function () {
	
})
