/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var uri = "https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json";

var section = document.querySelector('section');
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
        section.appendChild(myArticle);
    
        var myH2 = document.createElement('h2');
        myH2.textContent = jsonObj[i].title;
        myArticle.appendChild(myH2);
        
        var myImg = document.createElement('img');
        myImg.src = jsonObj[i].cover;
        myArticle.appendChild(myImg);

        var myPara = document.createElement('p');
        myPara.textContent = jsonObj[i].simple_plot;
        myArticle.appendChild(myPara);
        
        var myDate = document.createElement('span');
        myDate.textContent = jsonObj[i].release_date;
        myArticle.appendChild(myDate);
        
    }
    
}

function myFunction() {
  // Declare variables 
  var input, filter, section, article, h2, i, txtValue, noResult;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  section = document.getElementById("mySection");
  article = section.getElementsByTagName("article");
  noResult = document.getElementById("noResult");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < article.length; i++) {
    h2 = article[i].getElementsByTagName("h2")[0];
    if (h2) {
      txtValue = h2.textContent || h2.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        article[i].style.display = "";
      } else {
        article[i].style.display = "none";
        noResult.style.display = "block";
      }
    } 
  }
}



















