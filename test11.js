let langObj = {
  english: "Welcome",
  czech: "Vitejte",
  danish: "Velkomst",
  dutch: "Welkom",
  estonian: "Tere tulemast",
  finnish: "Tervetuloa",
  flemish: "Welgekomen",
  french: "Bienvenue",
  german: "Willkommen",
  irish: "Failte",
  italian: "Benvenuto",
  latvian: "Gaidits",
  lithuanian: "Laukiamas",
  polish: "Witamy",
  spanish: "Bienvenido",
  swedish: "Valkommen",
  welsh: "Croeso",
};

// function greet(language) {
//   if (language === "" || langObj[language] === undefined) {
//     language = "english";
//   }
//       return langObj[language];
// }
function greet(language) {
  if (!language) {
    language = "english";
  }
  if (language in langObj) {
    return langObj[language];
  }
  return langObj.english;
}

console.log(greet("welsh")); // Croeso
console.log(greet("fds")); // Welcome

console.log(greet("adsf"));
