
function toggleLanguage(language) {
    if (language === "fr") {
        console.log(language);
        $.removeCookie("lang");
        $.cookie("lang",language);
        console.log($.cookie("lang"));
    }
    else if (language === "en") {
        console.log(language);
        $.removeCookie("lang");
        $.cookie("lang",language);
        console.log($.cookie("lang"));
    }
    window.location.reload();
}

 //apply the language values to the content
document.addEventListener('DOMContentLoaded', () => {
    //skip the lang value in the HTML tag for this example
    let zones = document.querySelectorAll("body");
    getJson("trad.json",zones);
});

function applyStrings(containers,langdata) {
    containers.forEach(container => {
        container.querySelectorAll(`[data-key]`).forEach(element => {
            let key = element.getAttribute('data-key');
            //console.log(element);
            let lang = $.cookie("lang"); //first 2 characters
            if (lang == null) {
                lang = "fr";
            }
            if (key) {
                element.textContent = langdata.languages[lang].strings[key];
            }
        });
    })
}

function getJson(path,zones) {
    $.getJSON(path, function(data){
        applyStrings(zones, data);
    }).fail(function(){
        console.log("An error has occurred.");
    });
}

// $('#changeDataFr').change(function (e) { 
//     e.preventDefault();
//     var num = +$('body').attr("lang");
//     console.log(num);
//     $('body').attr('lang', "fr");
// });