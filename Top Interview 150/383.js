/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let ransomList = ransomNote.split("");  
    let magazineList = magazine.split("");  
    
    for (let i = 0; i < ransomList.length; i++) {
        console.log(ransomList[i])
        console.log(magazineList)
        let includes = magazineList.indexOf(ransomList[i])
        if(includes >= 0) {
            magazineList.splice(includes, 1)
            continue
        }
        else return false
    }
    return true;
};

console.log(canConstruct("aa", "ab"))