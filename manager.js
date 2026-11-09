
let score = 0;
let currentRoundIndex = 0;
let completedRounds = [];

// Managers database
const managers = window.managers || [];

// All manager rounds
const rounds = [
    {
        number: 1,
        answer: "jose mourinho",
        clubs: [
            { name: "benfica", years: "2000", image: "images/benfica.png" },
            { name: "uniao de leiria", years: "2001–2002", image: "images/uniao-de-leiria.png" },
            { name: "porto", years: "2002–2004", image: "images/porto.png" },
            { name: "chelsea", years: "2004–2007", image: "images/Chelsea.png" },
            { name: "inter milan", years: "2008–2010", image: "images/Inter-Milan2007-2014.png" },
            { name: "real madrid", years: "2010–2013", image: "images/Real-Madrid.png" },
            { name: "chelsea", years: "2013–2015", image: "images/Chelsea.png" },
            { name: "manchester united", years: "2016–2018", image: "images/Manchester-United.png" },
            { name: "tottenham hotspur", years: "2019–2021", image: "images/tottenham-hotspur.png" },
            { name: "roma", years: "2021–2024", image: "images/roma.png" },
            { name: "fenerbahce", years: "2024–2025", image: "images/fenerbahce.png" },
            { name: "benfica", years: "2025–2026", image: "images/benfica.png" },
            { name: "real madrid", years: "2026–", image: "images/Real-Madrid.png" }
        ]
    },

    {
        number: 2,
        answer: "elyaniv barda",
        clubs: [
            { name: "Hapoel Be'er Sheva", years: "2022–2024", image: "images/Hapoel-Beer-Sheva.png" },
            { name: "Hapoel Tel Aviv", years: "2024–", image: "images/Hapoel-Tel-Aviv.png" }
        ]
    },

    {
        number: 3,
        answer: "ran ben shimon",
        clubs: [
            { name: "Maccabi Tel Aviv U19", years: "2003–2005", image: "images/Maccabi-Tel-Aviv1994-2009.png" },
            { name: "Hapoel Haifa", years: "2005–2006", image: "images/Hapoel-Haifa.png" },
            { name: "Ironi Kiryat Shmona", years: "2006–2008", image: "images/Ironi-Kiryat-Shmona2000-2012.png" },
            { name: "Maccabi Tel Aviv", years: "2008", image: "images/Maccabi-Tel-Aviv1994-2009.png" },
            { name: "Ironi Kiryat Shmona", years: "2009–2012", image: "images/Ironi-Kiryat-Shmona2000-2012.png" },
            { name: "AEK Larnaca", years: "2012–2013", image: "images/AEK-Larnaca.png" },
            { name: "Hapoel Tel Aviv", years: "2013–2014", image: "images/Hapoel-Tel-Aviv.png" },
            { name: "Maccabi Petah Tikva", years: "2014–2016", image: "images/maccabi-petah-tikva2024.png" },
            { name: "Beitar Jerusalem", years: "2016–2017", image: "images/Beitar-Jerusalem2018-2020.png" },
            { name: "M.S. Ashdod", years: "2017", image: "images/MS-Ashdod.png" },
            { name: "Cyprus National Team", years: "2017–2020", image: "images/Cyprus.png" },
            { name: "M.S. Ashdod", years: "2020–2023", image: "images/MS-Ashdod.png" },
            { name: "AEK Larnaca", years: "2023–2024", image: "images/AEK-Larnaca.png" },
            { name: "Israel National Team", years: "2024–", image: "images/Israel.png" }
        ]
    },

    {
        number: 4,
        answer: "didier deschamps",
        clubs: [
            { name: "Monaco", years: "2001–2005", image: "images/Monaco2002-2013.png" },
            { name: "Juventus", years: "2006–2007", image: "images/Juventus2004-2017.png" },
            { name: "Olympique Marseille", years: "2009–2012", image: "images/Olympique-Marseille2004-2026.png" },
            { name: "France National Team", years: "2012–2026", image: "images/France.png" }
        ]
    },

    {
        number: 5,
        answer: "roberto mancini",
        clubs: [
            { name: "Fiorentina", years: "2001–2002", image: "images/Fiorentina.png" },
            { name: "Lazio", years: "2002–2004", image: "images/Lazio.png" },
            { name: "Inter Milan", years: "2004–2008", image: "images/Inter-Milan2007-2014.png" },
            { name: "Manchester City", years: "2009–2013", image: "images/Manchester-City1997-2016.png" },
            { name: "Galatasaray", years: "2013–2014", image: "images/Galatasaray.png" },
            { name: "Inter Milan", years: "2014–2016", image: "images/Inter-Milan2007-2014.png" },
            { name: "Zenit Saint Petersburg", years: "2017–2018", image: "images/Zenit.png" },
            { name: "Italy National Team", years: "2018–2023", image: "images/Italy.png" },
            { name: "Saudi Arabia National Team", years: "2023–2024", image: "images/Saudi-Arabia.png" },
            { name: "Italy National Team", years: "2026–", image: "images/Italy.png" }
        ]
    },

    {
        number: 6,
        answer: "zinedine zidane",
        clubs: [
            { name: "Real Madrid Castilla", years: "2014–2016", image: "images/Real-Madrid.png" },
            { name: "Real Madrid", years: "2016–2018", image: "images/Real-Madrid.png" },
            { name: "Real Madrid", years: "2019–2021", image: "images/Real-Madrid.png" },
            { name: "France National Team", years: "2026–", image: "images/France.png" }
        ]
    },

    {
        number: 7,
        answer: "pep guardiola",
        clubs: [
            { name: "Barcelona B", years: "2007–2008", image: "images/Barcelona.png" },
            { name: "Barcelona", years: "2008–2012", image: "images/Barcelona.png" },
            { name: "Bayern Munich", years: "2013–2016", image: "images/bayern-munich.png" },
            { name: "Manchester City", years: "2016–2026", image: "images/Manchester-City1997-2016.png" }
        ]
    },

    {
        number: 8,
        answer: "jurgen klopp",
        clubs: [
            { name: "Mainz 05", years: "2001–2008", image: "images/mainz-05.png" },
            { name: "Borussia Dortmund", years: "2008–2015", image: "images/borussia-dortmund.png" },
            { name: "Liverpool", years: "2015–2024", image: "images/liverpool.png" },
            { name: "Germany National Team", years: "2026–", image: "images/Germany.png" }
        ]
    },

    {
        number: 9,
        answer: "arsene wenger",
        clubs: [
            { name: "Nancy", years: "1984–1987", image: "images/nancy.png" },
            { name: "Monaco", years: "1987–1994", image: "images/Monaco1962-2002.png" },
            { name: "Nagoya Grampus", years: "1995–1996", image: "images/nagoya-grampus.png" },
            { name: "Arsenal", years: "1996–2018", image: "images/arsenal.png" }
        ]
    },

    {
        number: 10,
        answer: "cesc fabregas",
        clubs: [
            { name: "Como", years: "2024–", image: "images/como.png" }
        ]
    },

    {
        number: 11,
        answer: "frank rijkaard",
        clubs: [
            { name: "Netherlands National Team", years: "1998–2000", image: "images/Netherlands.png" },
            { name: "Sparta Rotterdam", years: "2001–2002", image: "images/Sparta-Rotterdam.png" },
            { name: "Barcelona", years: "2003–2008", image: "images/Barcelona.png" },
            { name: "Galatasaray", years: "2009–2010", image: "images/Galatasaray.png" },
            { name: "Saudi Arabia National Team", years: "2011–2013", image: "images/Saudi-Arabia.png" }
        ]
    },

    {
        number: 12,
        answer: "johan cruyff",
        clubs: [
            { name: "Ajax", years: "1986–1988", image: "images/Ajax1991-2025.png" },
            { name: "Barcelona", years: "1988–1996", image: "images/Barcelona.png" },
            { name: "Catalonia National Team", years: "2009–2013", image: "images/catalonia.png" }
        ]
    }
];

// HTML elements
const answerInput = document.getElementById("manager-answer");
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

    const matches = managers.filter(manager =>
        manager.toLowerCase().includes(query)
    );

    if (matches.length === 0) {
        const message = document.createElement("div");

        message.className = "no-results";
        message.textContent = "No managers found";

        suggestions.appendChild(message);
    } else {
        matches.slice(0, 8).forEach(manager => {
            const option = document.createElement("button");

            option.type = "button";
            option.className = "suggestion-option";
            option.textContent = manager;

            option.addEventListener("click", function() {
                answerInput.value = manager;
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

// Check the manager's answer
function checkAnswer() {
    const userAnswer = answerInput.value.trim().toLowerCase();

    const correctAnswer =
        rounds[currentRoundIndex].answer.toLowerCase();

    if (completedRounds.includes(currentRoundIndex)) {
        feedback.textContent = "You already completed this round!";
        return;
    }

    if (userAnswer === "") {
        feedback.textContent = "Please enter a manager name!";
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

if (!answerInput.disabled) {
    answerInput.focus();
}
