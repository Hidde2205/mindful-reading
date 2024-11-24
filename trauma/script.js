const stories = [
    [
        "Trauma is een emotionele of psychologische reactie op een diep verontrustende of schokkende gebeurtenis die iemands gevoel van veiligheid en controle over het leven verstoort. Het kan het gevolg zijn van verschillende ervaringen, zoals misbruik, verlies van een geliefde, een ernstig ongeluk, of andere overweldigende situaties. Hoewel trauma in eerste instantie vaak wordt geassocieerd met de directe gebeurtenis, is het belangrijk om te begrijpen dat het effect ervan veel langer kan blijven bestaan."
    ],
    [
        "Een trauma kan zich op vele manieren manifesteren. Mensen die met trauma worstelen, kunnen gevoelens van angst, schuld, of een diepgeworteld verdriet ervaren. Ze kunnen flashbacks hebben naar de traumatische gebeurtenis, moeite hebben om vertrouwen te herstellen, of zich emotioneel ‘verdoofd’ voelen. Soms leidt het tot fysieke symptomen, zoals slaapproblemen, vermoeidheid of zelfs pijnklachten zonder duidelijke medische oorzaak.",
        "Trauma kan ook invloed hebben op iemands relaties, werk en dagelijkse functioneren. Het kan een persoon het gevoel geven gevangen te zitten in het verleden, waardoor het moeilijk is om in het moment te leven of naar de toekomst te kijken."
    ],
    [
        "Omgaan met trauma is een persoonlijk proces dat voor iedereen anders verloopt. Voor velen is professionele hulp, zoals therapie, een belangrijke stap om emoties en herinneringen te verwerken. Ook steun van anderen kan helend zijn; het delen van je verhaal met mensen die je vertrouwt biedt erkenning en verbinding. Creatieve uitingen zoals schrijven of muziek helpen vaak om gevoelens een plek te geven die moeilijk in woorden te vatten zijn."
    ],
    [
        "Herstellen van een trauma is geen lineair proces. Het is een reis die ups en downs kent. Voor sommigen voelt het als een gevecht, terwijl anderen het zien als een kans voor persoonlijke groei. Wat belangrijk is, is dat herstel niet betekent dat de pijn volledig verdwijnt, maar dat iemand leert om ermee te leven en weer richting te vinden in zijn leven."
    ]
];

let currentPage = 0;

const storyTextContainer = document.getElementById('story-text');
const nextButton = document.getElementById('next-button');
const storyMusic = document.getElementById('story-music');

function updateStory() {
    storyTextContainer.innerHTML = "";

    if (currentPage < stories.length) {
        stories[currentPage].forEach(paragraph => {
            const p = document.createElement('p');
            p.textContent = paragraph;
            storyTextContainer.appendChild(p);
        });
    } else {
        storyTextContainer.innerHTML = "<p>Audio</p>";
    }

    if (currentPage === stories.length) {
        nextButton.style.display = 'none';
        storyMusic.play();
    }
}

nextButton.addEventListener('click', () => {
    if (currentPage <= stories.length) {
        currentPage++;
        updateStory();
    }
});

updateStory();