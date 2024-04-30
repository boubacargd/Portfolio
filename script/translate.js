const lang = document.getElementById("langues");
const salut = document.querySelector(".salut");
const developpeur = document.querySelector(".developpeur");
const bienvenue = document.querySelector(".bienvenue");
const skills_list = document.querySelector(".skills_list")
const apropos_para = document.querySelector(".apropos_para")
const experience1 = document.querySelector(".experience1")
const experience2 = document.querySelector(".experience2")
const experience3 = document.querySelector(".experience3")
const experience1_para = document.querySelector(".experience1_para")
const experience2_para = document.querySelector(".experience2_para")
const experience3_para = document.querySelector(".experience3_para")
const carte1_para = document.querySelector(".carte1_para")
const carte2_para = document.querySelector(".carte2_para")
const carte3_para = document.querySelector(".carte3_para")
const carte4_para = document.querySelector(".carte4_para")

const apropos = document.querySelector(".apropos")
const experience = document.querySelector(".experience")
const portfolio = document.querySelector(".portfolio")
const contact = document.querySelector(".contact")

const envoyer = document.querySelector(".envoyer")



lang.addEventListener('change', function() {

    const selectedLanguage = lang.value;

    salut.innerHTML = data[selectedLanguage].salut;
    developpeur.innerHTML = data[selectedLanguage].developpeur;
    bienvenue.innerHTML = data[selectedLanguage].bienvenue;
    skills_list.innerHTML = data[selectedLanguage].skills_list;
    apropos_para.innerHTML = data[selectedLanguage].apropos_para;
    experience1.innerHTML = data[selectedLanguage].experience1;
    experience2.innerHTML = data[selectedLanguage].experience2;
    experience3.innerHTML = data[selectedLanguage].experience3;
    experience1_para.innerHTML = data[selectedLanguage].experience1_para;
    experience2_para.innerHTML = data[selectedLanguage].experience2_para;
    experience3_para.innerHTML = data[selectedLanguage].experience3_para;
    carte1_para.innerHTML = data[selectedLanguage].carte1_para;
    carte2_para.innerHTML = data[selectedLanguage].carte2_para;
    carte3_para.innerHTML = data[selectedLanguage].carte3_para;
    carte4_para.innerHTML = data[selectedLanguage].carte4_para;

    apropos.innerHTML = data[selectedLanguage].apropos;
    experience.innerHTML = data[selectedLanguage].experience;
    portfolio.innerHTML = data[selectedLanguage].portfolio;
    contact.innerHTML = data[selectedLanguage].contact;

    envoyer.innerHTML = data[selectedLanguage].envoyer;


});

var data = {

    "english": {

        "salut": "Hello, i am",
        "developpeur": "Developer ",
        "bienvenue": "welcome to my site",

        "skills_list": "<ul><li><i class='bi bi-check-circle'></i><span>Application Developer Designer (2023 - in progress).</span> </li><li><i class='bi bi-check-circle'></i><span>Web and mobile web developer (degree level, obtained).</span></li><li><i class='bi bi-check-circle'></i><span>More than 15 projects in the company and at school.</span></li><li><i class='bi bi-check-circle'></i><span>More than <i>3 years</i> of experience in new technologies</span></li></ul>",

        "apropos" : "About me",
        "apropos_para": "I'm Boubacar, 22 years old. Passionate about the world of programming, I specialize as an <a3>Application Developer Designer</a3>, with particular expertise in Java. I am currently searching for a permanent (or fixed-term) contract. <br><br> Graduated in web development, I have accumulated more than <a2>3 years</a2> of experience in new technologies. Motivated by the challenges of web development, I am driven by the desire to apply my skills in practice, advance professionally, and contribute to innovative projects.",

        "experience": "Experience",
        "experience1" : "Application Developer",
        "experience2" : "Web Developer",
        "experience3" : "Restaurant Server",

        "experience1_para" : "I worked on the front-end and back-end development of applications, using React Native, TypeScript, Angular for the front-end, Java, Spring Boot for the back-end, and ensuring communication via REST APIs",
        "experience2_para" : "I designed both the front-end and back-end of websites, using HTML/CSS, JavaScript, and PHP, while having specialized expertise in WordPress development with Elementor and WooCommerce.",
        "experience3_para" : "Development of adaptability and customer relationships. Ability to quickly adapt and interact effectively with clients to ensure their satisfaction.",
    
        "portfolio" : "Projects",
        "carte1_para" : "Using JavaScript, I developed a search bar that allows users to search for recipes in TheMealDB database. When a search is performed, the details of the corresponding recipe are displayed. Additionally, I integrated a feature that allows users to get up to six random recipes when they click on the dedicated button. Each search result or random recipe is presented in the form of a card, including an image, the recipe name, and a link to view more information.",
        "carte2_para" : "My recent project as a developer involves creating an interactive portfolio integrating a fictional book store. Using React.js for the front-end and PHP for the back-end, I developed a dynamic interface allowing users to browse, purchase, and make secure payments via integration with Stripe. To facilitate content management, I added an admin interface allowing administrators to add, update, or delete books for sale. Communication between the front-end and back-end is handled by Axios, ensuring smooth data exchanges.",
        "carte3_para" : "In my recent project, I developed an application using Spring Boot with a particular emphasis on security. By integrating the Spring Security starter, I configured authentication in Spring to ensure secure access to the application. To enhance security, I implemented the generation of a JWT (JSON Web Token), and then managed token processing using a dedicated filter. This filter ensures validation and authentication of users with each request, providing protection. Additionally, I secured different resources by assigning roles to users, ensuring appropriate access control.",
        "carte4_para" : "The Tic Tac Toe game is designed with an object-oriented design approach (POO) in Java. Key classes such as Game, Cell, and Player encapsulate specific functionalities. The Game class manages the game logic with methods like move(), isValidMove(), and checkPlayerWin(). The Player class defines the individual characteristics of players. This structure promotes a clear and modular organization of the code, improving readability and project maintenance.",

        "contact": "Let's do great <br> things together!",

        "envoyer" : "Send the message <i class='bi bi-send'></i>",
    },

    "italiano": {

        "salut": "Ciao, sono",
        "developpeur": "Sviluppatore ",
        "bienvenue": "benvenuto nel mio sito",

        "skills_list": "<ul><li><i class='bi bi-check-circle'></i><span>Progettista sviluppatore di applicazioni (2023 - in corso).</span> </li><li><i class='bi bi-check-circle'></i><span>Sviluppatore web e mobile web (laurea, ottenuto).</span></li><li><i class='bi bi-check-circle'></i><span>Più di 15 progetti aziendali e scolastici.</span></li><li><i class='bi bi-check-circle'></i><span>Più di <i>3 anni</i> di esperienza nelle nuove tecnologie</span></li></ul>",

        "apropos_para": "Sono Boubacar, ho 22 anni. Appassionato nell'universo della programmazione, mi sono specializzato come <a3>Progettista Sviluppatore di Applicazioni</a3>, con competenze specifiche in Java. Attualmente sono alla ricerca di opportunità di un contratto a tempo indeterminato (o determinato) in questo settore. <br><br> Diplomato in sviluppo web, ho accumulato oltre <a2>3 anni</a2> di esperienza nelle nuove tecnologie. Attratto dalle sfide dello sviluppo web, sono determinato a mettere in pratica le mie competenze, a progredire professionalmente e a contribuire a progetti innovativi.",
        
        "apropos" : "A proposito di me",
        "experience": "Esperienza",
        "experience1" : "Sviluppatore di Applicazioni",
        "experience2" : "Sviluppatore Web",
        "experience3" : "Cameriere",

        "experience1_para" : "Ho lavorato nello sviluppo front-end e back-end di applicazioni, utilizzando React Native, TypeScript, Angular per il front-end, Java, Spring Boot per il back-end, e garantendo la comunicazione tramite API REST.",
        "experience2_para" : "Ho progettato sia il front-end che il back-end di siti web, utilizzando HTML/CSS, JavaScript e PHP, avendo anche competenze specializzate nello sviluppo su WordPress con Elementor e WooCommerce.",
        "experience3_para" : "Sviluppo dell'adattabilità e delle relazioni con i clienti. Capacità di adattarsi rapidamente e interagire efficacemente con i clienti per garantirne la soddisfazione.",

        "portfolio" : "Progetti",
        "carte1_para" : "Utilizzando JavaScript, ho sviluppato una barra di ricerca che consente agli utenti di cercare ricette nel database di TheMealDB. Quando viene effettuata una ricerca, vengono visualizzati i dettagli della ricetta corrispondente. Inoltre, ho integrato una funzionalità che consente agli utenti di ottenere fino a sei ricette casuali quando cliccano sul pulsante dedicato. Ogni risultato di ricerca o ricetta casuale è presentato sotto forma di scheda, includendo un'immagine, il nome della ricetta e un link per visualizzare ulteriori informazioni",
        "carte2_para" : "Il mio recente progetto come sviluppatore consiste nella creazione di un portfolio interattivo che integra un negozio di libri fittizi. Utilizzando React.js per il front-end e PHP per il back-end, ho sviluppato un'interfaccia dinamica che consente agli utenti di navigare, acquistare e effettuare pagamenti sicuri tramite l'integrazione con Stripe. Per facilitare la gestione dei contenuti, ho aggiunto un'interfaccia amministrativa che consente agli amministratori di aggiungere, aggiornare o eliminare libri in vendita. La comunicazione tra il front-end e il back-end è gestita da Axios, garantendo scambi di dati fluidi.",
        "carte3_para" : "Nel mio recente progetto, ho sviluppato un'applicazione utilizzando Spring Boot con un'attenzione particolare alla sicurezza. Integrando lo starter di Spring Security, ho configurato l'autenticazione in Spring per garantire un accesso sicuro all'applicazione. Per rafforzare la sicurezza, ho implementato la generazione di un token JWT (JSON Web Token), e poi ho gestito il processo del token utilizzando un filtro dedicato. Questo filtro garantisce la validazione e l'autenticazione degli utenti con ogni richiesta, fornendo protezione. Inoltre, ho assicurato diverse risorse assegnando ruoli agli utenti, garantendo un controllo di accesso appropriato.",
        "carte4_para" : "Il gioco del Tic Tac Toe è progettato con un approccio di progettazione orientata agli oggetti (POO) in Java. Le classi chiave come Game, Cell e Player incapsulano funzionalità specifiche. La classe Game gestisce la logica di gioco con metodi come move(), isValidMove() e checkPlayerWin(). La classe Player definisce le caratteristiche individuali dei giocatori. Questa struttura favorisce un'organizzazione chiara e modulare del codice, migliorando la leggibilità e la manutenzione del progetto.",
    
        "contact": "Facciamo grandi <br> cose insieme!",

        "envoyer" : "Inviare il messaggio <i class='bi bi-send'></i>",
    }
}