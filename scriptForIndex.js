document.addEventListener("DOMContentLoaded", function(event) {//to start the script when DOM is ready

	window.onscroll = function() {myFunction()}; //sticky top nav bar that resizes when scrolled down over 50px

	function myFunction() {
	    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
	        document.getElementById("navigation-container").className = "navigation-on-scroll";
	        document.getElementById("top-name").className = "my-name-after-scroll";
	    } else { //reassign orginal classes when scrolling back up
	        document.getElementById("navigation-container").className = "navigation-container";
	        document.getElementById("top-name").className = "my-name-before-scroll";
	    }
	}
	scrollTo = (element) => { //functin for scrolling smoothly down the internal links when links are clicked
  		window.scroll({
    		behavior: 'smooth',
    		left: 0,
    		top: element.offsetTop
  		});
  	}
	var clickHandler = (e) => { //event handler for when internal nav links are clicked
		e.preventDefault(); //to stop from picking up the behaviour of same page links (jumping to them)
		var hrefOfE = e.target.hash; //to get hashed local hyperlink references
		var hrefOfEFinal = hrefOfE.substr(1); //to chop of the hash in order to provide actual element ID
  		scrollTo(document.getElementById(hrefOfEFinal));
	}
	var listOfInternalLinks = document.getElementsByClassName("fn-clickHandler");
	var elementArray = [...listOfInternalLinks];
	elementArray.map((elem)=>elem.addEventListener('click', clickHandler)); //to iterate through all elements of class fn-clickHandler
});