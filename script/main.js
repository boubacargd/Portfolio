
const dynamicText = document.getElementById("developpeur");

const words = ["Fullstack", "Java", "React JS", "Wordpress"];
const colors = ["yellow", "red", "#61dafb", "violet"]; // Tableau des couleurs correspondant à chaque mot
// Variables pour suivre la position et l'état de suppression du mot
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.style.color = colors[wordIndex]; // Appliquer la couleur correspondante au mot en cours
    dynamicText.classList.add("stop-blinking");
    if (!isDeleting && charIndex < currentWord.length) {
        // Si la condition est vraie, taper le prochain caractère
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {
        // Si la condition est vraie, supprimer le caractère précédent
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        // Si le mot est supprimé, passer au mot suivant
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}
typeEffect();

function sendMail() {
    var params = {
        nom: document.getElementById("nom").value,
        email: document.getElementById("email").value,
        sujet: document.getElementById("sujet").value,
        message: document.getElementById("message").value
    }

    const serviceID = "service_qdp2m2p"
    const templateID = "template_yr7wght"

    emailjs.init("BQD1Hu1dDCy93XVce")
    emailjs
        .send(serviceID, templateID, params) 
        .then((res) => {

            document.getElementById("nom").value = "",
            document.getElementById("email").value = "",
            document.getElementById("sujet").value = "",
            document.getElementById("message").value = ""

            console.log(res);
            alert("Message bien envoyé!");
        })
            .catch((err) => {
            console.log(err);
            alert("Erreur lors de l'envoi du message, veuillez réessayer.");
        });

}

function optionLangues() {
    var languesElement = document.getElementById("langues");
    
    if (languesElement.style.display === "block") {
        languesElement.style.display = "none"; // If currently displayed, hide it
    } else {
        languesElement.style.display = "block"; // If currently hidden, display it
    }
}
function optionLanguesClose() {
    document.getElementById("langues").style.display = "none";
}

function optionLanguesClose_fr(){
    document.getElementById("langues").style.display = "none";
    window.location.reload();
}




let items = document.querySelectorAll('.cartes .carte');
/* premier carte */
let active = 1;
function loadShow(){
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;
    // apres
    let stt = 0;
    for(var i = active + 1; i < items.length; i ++){
        stt++;
        items[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
     stt = 0;
    for(var i = (active - 1); i >= 0; i --){
        stt++;
        items[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
}
loadShow();
let next = document.getElementById('next');
let prev = document.getElementById('prev');
next.onclick = function(){
   active = active + 1 < items.length ?  active + 1 : active;
   loadShow();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active -1 : active;
    loadShow();
}