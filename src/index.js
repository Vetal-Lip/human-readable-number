module.exports = function toReadable(number) {
    const Units = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
    }
    const Dozens = {
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
    }
    const Hundreds = {
        100: 'one hundred',
        200: 'two hundred',
        300: 'three hundred',
        400: 'four hundred',
        500: 'five hundred',
        600: 'six hundred',
        700: 'seven hundred',
        800: 'eight hundred',
        900: 'nine hundred',
    }

    if (number < 10) {
        return Units[number];
    };

    if (number > 9 && number < 100) {
        if(number < 20){
            return Dozens[number];
        }
        if (number % 10 === 0) {
            return Dozens[number];
        }
        else {
            let modulo = number % 10;
            number = number - modulo;
            return Dozens[number] + ' ' + Units[modulo];
        }
    }

    if (number > 99 && number < 1000) {
        if (number % 100 === 0) {
            return Hundreds[number];
        }
        else {
            if (number % 10 === 0) {
                let modulo = number % 100;
                number = number - modulo;
                return Hundreds[number] + ' ' + Dozens[modulo];
            }
            else {
                if (number % 100 < 10) {
                    let modulo = number % 100;
                    number = number - modulo;
                    return Hundreds[number] + ' ' + Units[modulo];
                }
                else {
                    if (number % 100 < 20) {
                        let modulo = number % 100;
                        number = number - modulo;
                        return Hundreds[number] + ' ' + Dozens[modulo];
                    }
                    else{
                        if(number % 100 > 20 && number % 100 < 100){
                            let moduloUnits = number % 10;
                            number = number -moduloUnits;
                            let moduloDozens = number % 100;
                            number = number - moduloDozens;
                            return Hundreds[number] + ' ' + Dozens[moduloDozens] + ' ' + Units[moduloUnits];
                        }
                    }
                }
            }
        }
    }
}

