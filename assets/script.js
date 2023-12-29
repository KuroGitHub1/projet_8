const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

let currentIndex = 0;

let arrow = document.querySelectorAll(".arrow");
arrow.forEach(function(element){
	element.addEventListener("click", () => {
		if (element.classList.contains("arrow_left")){
			currentIndex = (currentIndex - 1 + slides.length) % slides.length;
			console.log("allez a gauche");
		} else {
			currentIndex = (currentIndex + 1) % slides.length;
			console.log("allez a droite");
		}
		changerImage();
    	mettreAJourDots();
		
	});
});

function dotInjection(dotId){
    const dotsContainer = document.querySelector(".dots");
    
    slides.forEach(function(element, index){
        const dotElement = document.createElement("div");
        dotElement.classList.add("dot");
		dotElement.setAttribute("number",index);

        if (index == dotId) {
            dotElement.classList.add("dot_selected");
        }

        dotsContainer.append(dotElement);
    });
	dotclick();
}

function mettreAJourDots() {
	const dotsContainer = document.querySelector(".dots");
	dotsContainer.innerHTML = ""; 

	dotInjection(currentIndex);
}

function changerImage (){
	var imgElement = document.querySelector(".banner-img");
	imgElement.src = "assets/images/slideshow/" + slides[currentIndex].image;
	var tagLineElement = document.querySelector("#banner p");
	tagLineElement.innerHTML = slides[currentIndex].tagLine;

}

function dotclick (){
	document.querySelectorAll(".dot").forEach(function(element){
		element.addEventListener("click", () => {
			currentIndex = element.getAttribute("number");
			changerImage();
			mettreAJourDots()
		})
})
}

changerImage(); 
dotInjection(currentIndex); 
