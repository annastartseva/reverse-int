module.exports = function reverse(n) {

    let n_str = String(Math.abs(n));
    let result = '';
    //console.log('n: ' + n);
    //console.log("n_str.length: " + n_str.length);
    for (let i = 0; i < n_str.length; i++) {
        //console.log("i: " + i);
        //console.log('n_str[i]: ' + n_str[i]);
        result = `${n_str[i]}${result}`;
    }
    return Number(result);
}