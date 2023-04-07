function pigIt(str){
    //Code here
    let split = str.split(' ')
        let splitStr = split.map(word => {
            if(word !== '!'){
                let firstLetter = word.charAt(0)
                let remaining = word.slice(1, word.length)
                word = remaining + firstLetter + "ay"
                return word
            }
            // else {
            //     // word += '!'
                return word
            // }
        })
        return splitStr.join(' ')
}

  console.log(pigIt("Pig latin is cool !"))