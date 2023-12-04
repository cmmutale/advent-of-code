const fs = require('node:fs');

function getFile(inputFile) {
    const stringArray = []
    try {
        const data = fs.readFileSync(inputFile, 'utf8');
        data.split(/\r?\n/).forEach(line => {
            // console.log(`adding line: ${line}`)
            stringArray.push(processLine(line))
            // stringArray.forEach((item) => {
            //     console.log(item)
            // })
        });
        const used = process.memoryUsage().heapUsed / 1024 / 1024;
        console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
        // console.log(data)
    } catch (err) {
        console.error(err)
    }
    console.log(summation(stringArray))
}

function processLine(stringLine) {
    var ret = stringLine.replace(/[a-zA-Z]+/g, '')
    let new_ret = ''
    new_ret = new_ret.concat(ret.charAt(0), ret.charAt(ret.length - 1))
    while(new_ret !== ''){
        return parseInt(new_ret)
    }
    return 0
}

function summation(numArray){
    var sum = 0
    numArray.forEach((num) => {
        sum = sum + num
    })
    return sum
}

module.exports = {
    getFile,
    processLine
}