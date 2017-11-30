document.addEventListener("DOMContentLoaded", function(event) {

	window.onscroll = function() {myFunction()};

	function myFunction() {
	    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
	        document.getElementById("navigation-container").className = "navigation-on-scroll";
	        document.getElementById("top-name").className = "my-name-after-scroll";
	      // document.getElementById("top-name").className = "scrolled-top-name";
	    } else {
	        document.getElementById("navigation-container").className = "navigation-container";
	        document.getElementById("top-name").className = "my-name-before-scroll";
	      // document.getElementById("top-name").className = "top-name";
	    }
	}
	scrollTo = (element) => {
  		window.scroll({
    		behavior: 'smooth',
    		left: 0,
    		top: element.offsetTop
  		});
  	}

// document.getElementById("toLast").addEventListener('click', () => {
//   scrollTo(document.getElementById("10"));
// });
	var clickHandler = (e) => {
		e.preventDefault();
		var hrefOfE = e.target.hash;
		var hrefOfEFinal = hrefOfE.substr(1);
  		scrollTo(document.getElementById(hrefOfEFinal));
	}

	var listOfInternalLinks = document.getElementsByClassName("fn-clickHandler");
	var elementArray = [...listOfInternalLinks];
	elementArray.map((elem)=>elem.addEventListener('click', clickHandler));
});