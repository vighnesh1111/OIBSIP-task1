const display = document.getElementById('display')

function funct(val) {
    if (val == 1) {
        display.value = ''
    } else if (val == 2) {
        display.value += ')'
    } else if (val == 3) {
        display.value += '('
    } else if (val == 4) {
        display.value += '/'
    } else if (val == 5) {
        display.value += '7'
    } else if (val == 6) {
        display.value += '8'
    } else if (val == 7) {
        display.value += '9'
    } else if (val == 8) {
        display.value += '*'
    } else if (val == 9) {
        display.value += '4'
    } else if (val == 10) {
        display.value += '5'
    } else if (val == 11) {
        display.value += '6'
    } else if (val == 12) {
        display.value += '+'
    } else if (val == 13) {
        display.value += '1'
    } else if (val == 14) {
        display.value += '2'
    } else if (val == 15) {
        display.value += '3'
    } else if (val == 16) {
        display.value += '-'
    } else if (val == 17) {
        display.value += '00'
    } else if (val == 18) {
        display.value += '0'
    } else if (val == 19) {
        display.value += '.'
    } else if (val == 20) {
        display.value = eval(display.value)
    } else { }
}