const randomStrings = (length = 8) => {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789,./[]()"{}';
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
    return result;
};

const randomNumbers = (length = 1) => {
    let result = '';
    let characters = '123456789';
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
    return result;
};

module.exports = {randomStrings, randomNumbers};