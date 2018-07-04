

var toggle = document.querySelector(".movile-menu");
var topNav = document.querySelector(".menu-mobile");
var closeNav = document.querySelector(".close-menu");
var voteNow = document.querySelector(".voteNow");
var voteDone = document.querySelector(".voting-done");
var votePend = document.querySelector(".pending");
var voteAgain = document.querySelector(".vote-again");


toggle.addEventListener('click', function() {
  topNav.classList.add("active");
}, false);

closeNav.addEventListener('click', function() {
  topNav.classList.remove("active");
}, false);

voteNow.addEventListener('click', function(e) {
	e.preventDefault();
	votePend.parentNode.classList.add("done-vote");
 	voteDone.classList.add("active");
}, false);

voteAgain.addEventListener('click', function(e) {
	e.preventDefault();
	this.parentNode.classList.remove("active");
 	votePend.parentNode.classList.remove("done-vote");
}, false);
