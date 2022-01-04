module.exports = function toReadable(number) {
    let upToTen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let teenNumbers = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let upToHundred = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let HundredS = "hundred";

    if (number >= 0 && number < 10) { // from 0 to 9
        return upToTen[number];

    } else if ((number > 10 && number < 20)) { // from 11 to 19
        let teensNumber = number - (Math.floor(number / 10) * 10) - 1;
        return teenNumbers[teensNumber];

    } else if ((number > 20 && number < 100 && number % 10 !== 0)) { // from 21 to 99
        let firstTensNumber = Math.floor(number / 10);
        let secondTensNumber = number - firstTensNumber * 10;
        return `${upToHundred[firstTensNumber - 1]} ${upToTen[secondTensNumber]}`

    } else if (number % 10 === 0 && number < 100) { // number is up to hundred & multiple of ten
        let isMultipleOfTen = (number / 10) - 1;
        return upToHundred[isMultipleOfTen];

    } else if (number % 100 === 0) { // number is multiple of hundred
        let isMultipleOfHundred = (number / 100);
        return `${upToTen[isMultipleOfHundred]} ${HundredS}`;

    } else if (number % 100 !== 0 && number > 100 && number < 1000) { // from 101 to 999
        let firstHundredNumber = Math.floor(number / 100);
        let secondHundredNumber = (Math.floor(number / 10) - Math.floor(number / 100) * 10);
        let thirdHundredNumber = number - (Math.floor(number / 10) * 10);

        let numbersAfterHundred = number - Math.floor(number / 100) * 100;

        if (numbersAfterHundred < 10) { // hundred and number less than 10
            return `${upToTen[firstHundredNumber]} ${HundredS} ${upToTen[thirdHundredNumber]}`;

        } else if (numbersAfterHundred > 10 && numbersAfterHundred < 20) { // hundred and teens
            return `${upToTen[firstHundredNumber]} ${HundredS} ${teenNumbers[thirdHundredNumber - 1]}`;

        } else if (numbersAfterHundred % 10 === 0) { // hundred multiple of ten
            return `${upToTen[firstHundredNumber]} ${HundredS} ${upToHundred[secondHundredNumber - 1]}`;

        } else { // all others 101 to 999
            return `${upToTen[firstHundredNumber]} ${HundredS} ${upToHundred[secondHundredNumber - 1]} ${upToTen[thirdHundredNumber]}`;
        }
    }
}