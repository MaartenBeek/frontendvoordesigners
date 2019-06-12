/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var uri = "https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json";

var section = document.querySelector('section');
var article = document.querySelector('article');
console.log("section",section);


console.log("loadimagesmetXHR");
var request = new XMLHttpRequest();
request.open('get', uri);
request.responseType = 'json';
request.send();

request.addEventListener("load", function() {
    var data = request.response;
    populateArticle(data);
    console.log("request is geladen: ", request.response);
    //er is data
    //nu kun je iets doen
    //section.textContent = JSON.stringify(data);
});

function populateArticle(jsonObj) {
    console.log(jsonObj.length);
    
    var movies = jsonObj;
    
    for (var i = 0; i < movies.length; i++) {
        var myArticle = document.createElement('article');
        myArticle.textContent = jsonObj;
        section.appendChild(myArticle);
        
        var myH2 = document.createElement('h2');
        myH2.textContent = jsonObj[0].title;
        article.appendChild(myH2);

        var myPara = document.createElement('p');
        myPara.textContent = jsonObj[0].plot;
        article.appendChild(myPara);
    }
    
    
}
