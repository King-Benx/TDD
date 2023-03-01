const getStringLength = (string) => {
    if(string.length < 1 || string.length > 10)
        throw 'Invalid string length';
    return string.length;
}

module.exports = getStringLength;