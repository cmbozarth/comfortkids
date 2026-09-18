let navToggle = document.getElementById("nav-toggle");
let navContain = document.getElementById("nav-contain");
let burger1 = document.getElementById("burger-1");
let burger2 = document.getElementById("burger-2");
let burger3 = document.getElementById("burger-3");

navToggle.addEventListener('click', function(){
	if (navContain.classList.contains('nav-contain-hide')){
	navContain.classList.remove('nav-contain-hide');
	navContain.classList.add('nav-contain-show');
	burger1.style.transform = "rotate(45deg)";
	burger1.style.top = "13px";
	burger3.style.transform = "rotate(-45deg)";
	burger3.style.top = "13px";
	burger2.style.transform = "rotate(45deg)";
	} else {
		navContain.classList.remove('nav-contain-show');
		navContain.classList.add('nav-contain-hide');
		burger1.style.transform = "rotate(0deg)";
		burger1.style.top = "0px";
		burger3.style.transform = "rotate(0deg)";
		burger3.style.top = "26px";
		burger2.style.transform = "rotate(0deg)";
	}
});
