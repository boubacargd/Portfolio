const lang = document.getElementById("langues");
const salut = document.querySelector(".salut");
const developpeur = document.querySelector(".developpeur");
const bienvenue = document.querySelector(".bienvenue");
const skills_list = document.querySelector(".skills_list")
const apropos_para = document.querySelector(".apropos_para")

lang.addEventListener('change', function() {
    const selectedLanguage = lang.value;
    salut.innerHTML = data[selectedLanguage].salut;
    developpeur.innerHTML = data[selectedLanguage].developpeur;
    bienvenue.innerHTML = data[selectedLanguage].bienvenue;
    skills_list.innerHTML = data[selectedLanguage].skills_list;
    apropos_para.innerHTML = data[selectedLanguage].apropos_para;

});

var data = {

    "english": {
        "salut": "Hello, i am",
        "developpeur": "Developer ",
        "bienvenue": "welcome to my site",

        "skills_list": "<ul><li><i class='bi bi-check-circle'></i><span>Application Developer Designer (2023 - in progress).</span> </li><li><i class='bi bi-check-circle'></i><span>Web and mobile web developer (degree level, obtained).</span></li><li><i class='bi bi-check-circle'></i><span>More than 15 projects in the company and at school.</span></li><li><i class='bi bi-check-circle'></i><span>More than <i>3 years</i> of experience in new technologies</span></li></ul>",

        "apropos_para": "I'm Boubacar, 22 years old. Passionate about the world of programming, I specialize as an <a3>Application Developer Designer</a3>, with particular expertise in Java. I am currently searching for a permanent (or fixed-term) contract. <br><br> Graduated in web development, I have accumulated more than <a2>3 years</a2> of experience in new technologies. Motivated by the challenges of web development, I am driven by the desire to apply my skills in practice, advance professionally, and contribute to innovative projects."

    },
    "italiano": {
        "salut": "Ciao, sono",
        "developpeur": "Sviluppatore ",
        "bienvenue": "benvenuto nel mio sito",

        "skills_list": "<ul><li><i class='bi bi-check-circle'></i><span>Progettista sviluppatore di applicazioni (2023 - in corso).</span> </li><li><i class='bi bi-check-circle'></i><span>Sviluppatore web e mobile web (laurea, ottenuto).</span></li><li><i class='bi bi-check-circle'></i><span>Più di 15 progetti aziendali e scolastici.</span></li><li><i class='bi bi-check-circle'></i><span>Più di <i>3 anni</i> di esperienza nelle nuove tecnologie</span></li></ul>",

        "apropos_para": "Sono Boubacar, ho 22 anni. Appassionato nell'universo della programmazione, mi sono specializzato come <a3>Progettista Sviluppatore di Applicazioni</a3>, con competenze specifiche in Java. Attualmente sono alla ricerca di opportunità di un contratto a tempo indeterminato (o determinato) in questo settore. <br><br> Diplomato in sviluppo web, ho accumulato oltre <a2>3 anni</a2> di esperienza nelle nuove tecnologie. Attratto dalle sfide dello sviluppo web, sono determinato a mettere in pratica le mie competenze, a progredire professionalmente e a contribuire a progetti innovativi."
    }
}