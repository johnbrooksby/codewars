function contamination(text, char){
    // Code here ;)
    let textStr = ''
    if (text === "" || char === ""){
      return ""
    } else {
        for (let i = 0; i < text.length; i++){
            textStr += char
        }
    }
    return textStr
  }


contamination("abcdef","z")//, "zzz")
// contamination("","z")//, "")
// contamination("abc","")//, "")
// contamination("_3ebzgh4","&")//, "&&&&&&&&")
// contamination("//case"," ")//, "      ")