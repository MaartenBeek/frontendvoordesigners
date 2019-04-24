/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var meerinfo = document.querySelector('#meer');
var article = document.querySelector('.kamer');

function changeButton() {
      var x = document.getElementById("meer");
      if (x.innerHTML === "Toon minder") {
        x.innerHTML = "Toon meer";
      } else {
        x.innerHTML = "Toon minder";
      }
    }

meerinfo.addEventListener('click',function(){
    article.classList.toggle('show-more');
    changeButton();
});
