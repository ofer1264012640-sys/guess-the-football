
let score = 0;
let currentRoundIndex = 0;
let completedRounds = [];

// Players database
const players = window.players || [];

// All game rounds
const rounds = [
    {
        number: 1,
        answer: "Kaka",
        clubs: [
            { name: "Sao Paulo", years: "2000–2003", image: "images/Sao-Paulo.png" },
            { name: "AC Milan", years: "2003–2009", image: "images/AC-Milan.png" },
            { name: "Real Madrid", years: "2009-2013", image: "images/Real-Madrid.png" },
            { name: "AC Milan", years: "2013–2014", image: "images/AC-Milan.png" },
            { name: "Orlando City", years: "2014–2017", image: "images/Orlando-City.png" },
            { name: "Sao Paulo", years: "(loan) 2014", image: "images/Sao-Paulo.png" },
            { name: "Orlando City", years: "2014–2017", image: "images/Orlando-City.png" }
        ]
    },

    {
        number: 2,
        answer: "Zlatan Ibrahimovic",
        clubs: [
            { "name": "Malmö FF", "years": "1999–2001", "image": "images/Malmo-FF.png" },
            { "name": "Ajax", "years": "2001–2004", "image": "images/Ajax1991-2025.png" },
            { "name": "Juventus", "years": "2004–2006", "image": "images/Juventus2004-2017.png" },
            { "name": "Inter Milan", "years": "2006–2009", "image": "images/Inter-Milan2007-2014.png" },
            { "name": "Barcelona", "years": "2009–2010", "image": "images/Barcelona.png" },
            { "name": "AC Milan", "years": "(loan) 2010–2011", "image": "images/AC-Milan.png" },
            { "name": "AC Milan", "years": "2011–2012", "image": "images/AC-Milan.png" },
            { "name": "Paris Saint-Germain", "years": "2012–2016", "image": "images/PSG.png" },
            { "name": "Manchester United", "years": "2016–2018", "image": "images/Manchester-United.png" },
            { "name": "LA Galaxy", "years": "2018–2019", "image": "images/LA-Galaxy.png" },
            { "name": "AC Milan", "years": "2020–2023", "image": "images/AC-Milan.png" }
        ]
    },

    {
        number: 3,
        answer: "Maor Buzaglo",
        clubs: [
            { "name": "Maccabi Haifa", "years": "2005–2008", "image": "images/Maccabi-Haifa2004-2006.png" },
            { "name": "Hapoel Petah Tikva", "years": "(loan) 2006–2007", "image": "images/Hapoel-Petah-Tikva1996-2010.png" },
            { "name": "Bnei Sakhnin", "years": "(loan) 2007–2008", "image": "images/Bnei-Sakhnin.png" },
            { "name": "Maccabi Tel Aviv", "years": "2008–2011", "image": "images/Maccabi-Tel-Aviv2009-2012.png" },
            { "name": "Standard Liège", "years": "2011–2013", "image": "images/Standard-Liege.png" },
            { "name": "Hapoel Be'er Sheva", "years": "2013–2017", "image": "images/Hapoel-Beer-Sheva.png" },
            { "name": "Maccabi Haifa", "years": "2017–2018", "image": "images/Maccabi-Haifa2006-2020.png" },
            { "name": "Beitar Jerusalem", "years": "2018–2019", "image": "images/Beitar-Jerusalem2018-2020.png" },
            { "name": "Hapoel Tel Aviv", "years": "2019–2020", "image": "images/Hapoel-Tel-Aviv.png" }
        ]
    },

    {
        number: 4,
        answer: "Neta Lavi",
        clubs: [
            { name: "Maccabi Haifa", years: "2015–2023", image: "images/Maccabi-Haifa.png" },
            { name: "Gamba Osaka", years: "2023–2025", image: "images/Gamba-Osaka.png" },
            { name: "Machida Zelvia", years: "2025–", image: "images/Machida-Zelvia.png" }
        ]
    },

    {
        number: 5,
        answer: "Giovanni Rosso",
        clubs: [
            { name: "Zadar", years: "1992–1993", image: "images/NK-Zadar.png" },
            { name: "NK Zagreb", years: "1993–1996", image: "images/NK-Zagreb.png" },
            { name: "Hapoel Be'er Sheva", years: "1996–1997", image: "images/Hapoel-Beer-Sheva.png" },
            { name: "Hapoel Haifa", years: "1997–2000", image: "images/Hapoel-Haifa.png" },
            { name: "Beitar Jerusalem", years: "2000–2001", image: "images/Beitar-Jerusalem1993-2006.png" },
            { name: "Maccabi Haifa", years: "2001–2005", image: "images/Maccabi-Haifa1993-2004.png" },
            { name: "Maccabi Tel Aviv", years: "2005–2007", image: "images/Maccabi-Tel-Aviv1994-2009.png" },
            { name: "Maccabi Haifa", years: "2007–2008", image: "images/Maccabi-Haifa2006-2020.png" },
            { name: "Hajduk Split", years: "2008–2009", image: "images/Hajduk-Split.png" }
        ]
    },

    {
        number: 6,
        answer: "Yakubu Aiyegbeni",
        clubs: [
            { name: "Julius Berger", years: "1998–1999", image: "images/Julius-Berger.png" },
            { name: "Maccabi Haifa", years: "1999–2003", image: "images/Maccabi-Haifa1993-2004.png" },
            { name: "Hapoel Kfar Saba", years: "(loan) 1999–2000", image: "images/Hapoel-Kfar-Saba1995-2014.png" },
            { name: "Portsmouth", years: "(loan) 2003", image: "images/Portsmouth1998-2014.png" },
            { name: "Portsmouth", years: "2003–2005", image: "images/Portsmouth1998-2014.png" },
            { name: "Middlesbrough", years: "2005–2007", image: "images/Middlesbrough.png" },
            { name: "Everton", years: "2007–2011", image: "images/Everton2000-2013.png" },
            { name: "Leicester City", years: "(loan) 2011", image: "images/Leicester-City.png" },
            { name: "Blackburn Rovers", years: "2011–2012", image: "images/Blackburn-Rovers.png" },
            { name: "Guangzhou R&F", years: "2012–2014", image: "images/Guangzhou-R&F.png" },
            { name: "Al-Rayyan", years: "2014", image: "images/Al-Rayyan.png" },
            { name: "Reading", years: "2015", image: "images/Reading.png" },
            { name: "Kayserispor", years: "2015–2016", image: "images/Kayserispor.png" },
            { name: "Coventry City", years: "2017", image: "images/Coventry-City.png" }
        ]
    },

    {
        number: 7,
        answer: "Didier Drogba",
        clubs: [
            { name: "Le Mans", years: "1998–2002", image: "images/Le-Mans1995-2007.png" },
            { name: "Guingamp", years: "2002–2003", image: "images/Guingamp2000-2016.png" },
            { name: "Marseille", years: "2003–2004", image: "images/Marseille1993-2004.png" },
            { name: "Chelsea", years: "2004–2012", image: "images/Chelsea.png" },
            { name: "Shanghai Shenhua", years: "2012–2013", image: "images/Shanghai-Shenhua.png" },
            { name: "Galatasaray", years: "2013–2014", image: "images/Galatasaray.png" },
            { name: "Chelsea", years: "2014–2015", image: "images/Chelsea.png" },
            { name: "CF Montréal", years: "2015–2016", image: "images/CF-Montreal.png" },
            { name: "Phoenix Rising", years: "2017–2018", image: "images/Phoenix-Rising.png" }
        ]
    },

    {
        number: 8,
        answer: "luka modric",
        clubs: [
            { name: "dinamo zagreb", years: "2003–2008", image: "images/dinamo-zagreb.png" },
            { name: "zrinjski mostar", years: "(loan) 2003–2004", image: "images/zrinjski-mostar.png" },
            { name: "inter zapresic", years: "(loan) 2004–2005", image: "images/inter-zapresic.png" },
            { name: "tottenham hotspur", years: "2008–2012", image: "images/tottenham-hotspur.png" },
            { name: "real madrid", years: "2012–2025", image: "images/Real-Madrid.png" },
            { name: "ac milan", years: "2025–", image: "images/AC-Milan.png" }
        ]
    },

    {
        number: 9,
        answer: "Angel di Maria",
        clubs: [
            { name: "rosario central", years: "2005–2007", image: "images/rosario-central.png" },
            { name: "benfica", years: "2007–2010", image: "images/benfica.png" },
            { name: "real madrid", years: "2010–2014", image: "images/Real-Madrid.png" },
            { name: "manchester united", years: "2014–2015", image: "images/Manchester-United.png" },
            { name: "paris saint-germain", years: "2015–2022", image: "images/PSG.png" },
            { name: "juventus", years: "2022–2023", image: "images/juventus.png" },
            { name: "benfica", years: "2023–2025", image: "images/benfica.png" },
            { name: "rosario central", years: "2025–", image: "images/rosario-central.png" }
        ]
    },

    {
        number: 10,
        answer: "Anthony Nwakaeme",
        clubs: [
            { name: "universitatea cluj", years: "2010–2012", image: "images/universitatea-cluj.png" },
            { name: "ariesul turda", years: "(loan) 2010–2011", image: "images/ariesul-turda.png" },
            { name: "petrolul ploiesti", years: "2012–2013", image: "images/petrolul-ploiesti.png" },
            { name: "hapoel raanana", years: "2013–2015", image: "images/hapoel-raanana.png" },
            { name: "hapoel beer sheva", years: "2015–2018", image: "images/Hapoel-Beer-Sheva.png" },
            { name: "trabzonspor", years: "2018–2022", image: "images/trabzonspor.png" },
            { name: "al-fayha", years: "2022–2024", image: "images/al-fayha.png" },
            { name: "trabzonspor", years: "2024–2026", image: "images/trabzonspor.png" }
        ]
    },

    {
        number: 11,
        answer: "Yossi Benayoun",
        clubs: [
            { name: "hapoel beer sheva", years: "1997–1998", image: "images/Hapoel-Beer-Sheva.png" },
            { name: "maccabi haifa", years: "1998–2002", image: "images/Maccabi-Haifa1993-2004.png" },
            { name: "racing santander", years: "2002–2005", image: "images/racing-santander.png" },
            { name: "west ham united", years: "2005–2007", image: "images/west-ham-united.png" },
            { name: "liverpool", years: "2007–2010", image: "images/liverpool.png" },
            { name: "chelsea", years: "2010–2014", image: "images/Chelsea.png" },
            { name: "arsenal", years: "(loan) 2011–2012", image: "images/arsenal.png" },
            { name: "west ham united", years: "(loan) 2012", image: "images/west-ham-united.png" },
            { name: "queens park rangers", years: "2013–2014", image: "images/queens-park-rangers.png" },
            { name: "maccabi haifa", years: "2014–2016", image: "images/Maccabi-Haifa2006-2020.png" },
            { name: "maccabi tel aviv", years: "2016–2017", image: "images/maccabi-tel-aviv2013-2021.png" },
            { name: "beitar jerusalem", years: "2017–2018", image: "images/Beitar-Jerusalem2018-2020.png" },
            { name: "maccabi petah tikva", years: "2018–2019", image: "images/maccabi-petah-tikva2024.png" },
            { name: "beitar jerusalem", years: "2019", image: "images/Beitar-Jerusalem2018-2020.png" }
        ]
    },

    {
        number: 12,
        answer: "Dudu Aouate",
        clubs: [
            { name: "maccabi haifa", years: "1995–1997", image: "images/Maccabi-Haifa1993-2004.png" },
            { name: "hapoel nazareth illit", years: "(loan) 1995-1996", image: "images/hapoel-nazareth-illit.png" },
            { name: "maccabi tel aviv", years: "1997–1998", image: "images/Maccabi-Tel-Aviv1994-2009.png" },
            { name: "hapoel haifa", years: "1998–2001", image: "images/Hapoel-Haifa.png" },
            { name: "maccabi haifa", years: "2001–2003", image: "images/Maccabi-Haifa1993-2004.png" },
            { name: "racing santander", years: "2003–2006", image: "images/racing-santander.png" },
            { name: "deportivo la coruna", years: "2006–2008", image: "images/deportivo-la-coruna.png" },
            { name: "rcd mallorca", years: "2009–2014", image: "images/rcd-mallorca.png" }
        ]
    },

    {
        number: 13,
        answer: "Jesse Lingard",
        clubs: [
            { name: "Manchester United", years: "2011–2022", image: "images/Manchester-United.png" },
            { name: "Leicester City", years: "(loan) 2012-2013", image: "images/Leicester-City.png" },
            { name: "Birmingham", years: "(loan) 2013-2014", image: "images/Birmingham-City.png"},
            { name: "Brighton", years: "(loan) 2014", image: "images/Brighton.png"},
            { name: "Derby County", years: "(loan) 2015", image: "images/Derby.png"},
            { name: "west ham united", years: "(loan) 2021", image: "images/west-ham-united.png"},
            { name: "Nottingham Forest", years: "2022-2023", image: "images/Nottingham-Forest.png"},
            { name: "Seoul", years: "2024-2025", image: "images/Seoul.png"},
            { name: "Corinthians", years: "2026-", image: "images/Corinthians.png"}
        ]
    },

    {
        number: 14,
        answer: "Paolo Maldini",
        clubs: [
            { name: "AC Milan", years: "1984–2009", image: "images/AC-Milan.png" },
        ]
    },

    {
        number: 15,
        answer: "Francesco Totti",
        clubs: [
            { name: "roma", years: "1992-2017", image: "images/roma.png" },
        ]
    },

    {
        number: 16,
        answer: "Yaniv Katan",
        clubs: [
            { name: "maccabi haifa", years: "1998-2006", image: "images/Maccabi-Haifa.png" },
            { name: "west ham united", years: "2006", image: "images/west-ham-united.png" },
            { name: "maccabi haifa", years: "2006-2014", image: "images/Maccabi-Haifa.png" }
        ]
    },

    {
        number: 17,
        answer: "Elyaniv Barda",
        clubs: [
            { name: "Hapoel Be'er Sheva", years: "1998–2003", image: "images/Hapoel-Beer-Sheva.png" },
            { name: "maccabi haifa", years: "2003-2005", image: "images/Maccabi-Haifa.png" },
            { name: "Hapoel Tel Aviv", years: "2005-2007", image: "images/Hapoel-Tel-Aviv.png" },
            { name: "Genk", years: "2007-2013", image: "images/Genk.png" },
            { name: "Hapoel Be'er Sheva", years: "2013–2018", image: "images/Hapoel-Beer-Sheva.png" },
        ]
    },

    {
        number: 18,
        answer: "Mesut Ozil",
        clubs: [
            { name: "Schalke 04", years: "2006–2008", image: "images/Schalke.png" },
            { name: "Werder Bremen", years: "2008–2010", image: "images/Werder-Bremen.png" },
            { name: "real madrid", years: "2010–2013", image: "images/Real-Madrid.png" },
            { name: "arsenal", years: "2013–2021", image: "images/arsenal.png" },
            { name: "Fenerbahce", years: "2022-2021", image: "images/Fenerbahce.png" },
            { name: "İstanbul Başakşehir", years: "2023-2022", image: "images/İstanbul.png" }
        ]
    }
];

// HTML elements
const answerInput = document.getElementById("player-answer");
const submitButton = document.getElementById("submit-answer");
const feedback = document.getElementById("feedback");
const scoreDisplay = document.getElementById("score");
const suggestions = document.getElementById("suggestions");
const roundSelector = document.getElementById("round-selector");
const careerPath = document.getElementById("career-path");

let selectedIndex = -1;

// Create round selector options
function createRoundOptions() {
    roundSelector.innerHTML = "";

    rounds.forEach((round, index) => {
        const option = document.createElement("option");

        option.value = index;
        option.textContent = `Round ${round.number}`;

        roundSelector.appendChild(option);
    });
}

// Display the selected round's career path
function displayRound() {
    const round = rounds[currentRoundIndex];

    careerPath.innerHTML = "";

    round.clubs.forEach(club => {
        const clubElement = document.createElement("div");

        const clubName = document.createElement("h4");
        clubName.textContent = club.name;

        const clubImage = document.createElement("img");
        clubImage.src = club.image;
        clubImage.alt = club.name + " Logo";

        const clubYears = document.createElement("p");
        clubYears.textContent = club.years;

        clubElement.appendChild(clubName);
        clubElement.appendChild(clubImage);
        clubElement.appendChild(clubYears);

        careerPath.appendChild(clubElement);
    });

    document.querySelector("header p").textContent =
        `Round ${round.number}`;
}

// Switch between rounds
function changeRound() {
    currentRoundIndex = Number(roundSelector.value);

    displayRound();

    answerInput.value = "";
    answerInput.disabled = false;

    submitButton.disabled = false;

    suggestions.classList.remove("show");
    selectedIndex = -1;

    if (completedRounds.includes(currentRoundIndex)) {
        feedback.textContent = "You already completed this round!";
        answerInput.disabled = true;
        submitButton.disabled = true;
    } else {
        feedback.textContent = "";
        answerInput.focus();
    }
}

// Display autocomplete suggestions
function showSuggestions() {
    const query = answerInput.value.trim().toLowerCase();

    suggestions.innerHTML = "";
    selectedIndex = -1;

    if (query === "") {
        suggestions.classList.remove("show");
        return;
    }

    const matches = players.filter(player =>
        player.toLowerCase().includes(query)
    );

    if (matches.length === 0) {
        const message = document.createElement("div");

        message.className = "no-results";
        message.textContent = "No players found";

        suggestions.appendChild(message);
    } else {
        matches.slice(0, 8).forEach(player => {
            const option = document.createElement("button");

            option.type = "button";
            option.className = "suggestion-option";
            option.textContent = player;

            option.addEventListener("click", function() {
                answerInput.value = player;
                suggestions.classList.remove("show");
                answerInput.focus();
            });

            suggestions.appendChild(option);
        });
    }

    suggestions.classList.add("show");
}

// Update keyboard selection
function updateSelection(options) {
    options.forEach((option, index) => {
        option.classList.toggle(
            "active",
            index === selectedIndex
        );
    });
}

// Check the player's answer
function checkAnswer() {
    const userAnswer = answerInput.value.trim().toLowerCase();

    const correctAnswer =
        rounds[currentRoundIndex].answer.toLowerCase();

    if (completedRounds.includes(currentRoundIndex)) {
        feedback.textContent = "You already completed this round!";
        return;
    }

    if (userAnswer === "") {
        feedback.textContent = "Please enter a player name!";
        return;
    }

    if (userAnswer === correctAnswer) {
        completedRounds.push(currentRoundIndex);

        score++;
        scoreDisplay.textContent = score;

        feedback.textContent = "Correct! Well done!";

        submitButton.disabled = true;
        answerInput.disabled = true;

        suggestions.classList.remove("show");

        // Move to the next round after 1 second
        setTimeout(function() {
            if (currentRoundIndex < rounds.length - 1) {
                roundSelector.value = currentRoundIndex + 1;
                changeRound();
            } else {
                feedback.textContent =
                    "Congratulations! You completed all rounds!";
            }
        }, 1000);

    } else {
        feedback.textContent = "Wrong answer! Try again.";
    }
}

// Event listeners
answerInput.addEventListener("input", showSuggestions);

answerInput.addEventListener("keydown", function(event) {
    const options = suggestions.querySelectorAll(
        ".suggestion-option"
    );

    if (event.key === "ArrowDown" && options.length > 0) {
        event.preventDefault();

        selectedIndex = Math.min(
            selectedIndex + 1,
            options.length - 1
        );

        updateSelection(options);
    }

    if (event.key === "ArrowUp" && options.length > 0) {
        event.preventDefault();

        selectedIndex = Math.max(
            selectedIndex - 1,
            0
        );

        updateSelection(options);
    }

    if (event.key === "Enter") {
        event.preventDefault();

        if (selectedIndex >= 0 && options[selectedIndex]) {
            options[selectedIndex].click();
        } else {
            checkAnswer();
        }
    }

    if (event.key === "Escape") {
        suggestions.classList.remove("show");
    }
});

document.addEventListener("click", function(event) {
    if (!event.target.closest(".autocomplete")) {
        suggestions.classList.remove("show");
    }
});

submitButton.addEventListener("click", checkAnswer);

roundSelector.addEventListener("change", changeRound);

// Start the game
createRoundOptions();
displayRound();

scoreDisplay.textContent = score;

requestAnimationFrame(() => {
    if (!answerInput.disabled) {
        answerInput.focus();
    }
});
