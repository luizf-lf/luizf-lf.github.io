var userLang = navigator.language || navigator.userLanguage; 
if (userLang == "pt-BR" || userLang == "pt"){
    window.location = "pt-br/index.html";
} else {
    window.location = "eng/index.html";
}