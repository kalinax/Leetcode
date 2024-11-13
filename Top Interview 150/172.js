/**
 * @param {number} n
 * @return {number}
 */

function factorialize(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
}
  
var trailingZeroesKaja = function(n) {
    console.log(factorialize(n))
    let factorReverse = factorialize(n).toString().split("").reverse()
    console.log(factorReverse[0])
    if (factorReverse[0] != 0) return 0;
    let zeroes = 0
    for (let i = 0; i < factorReverse.length; i++) {
        if(factorReverse[i] == 0) {
            zeroes++
        }
        else {
            break
        }
    }
    return zeroes;

};

// resenje je dobro, ali ne radi za velike brojeve sto treba nikome

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let res = 0;
     while(n > 0){
         n = Math.floor(n/5);
         res += n;
     }
     return res;
 };
 