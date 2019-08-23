var userLang = navigator.language || navigator.userLanguage; 
    if (userLang == "pt-BR"){
        window.location = "pt-br/index.html";
    } else {
        window.location = "eng/index.html";
    }