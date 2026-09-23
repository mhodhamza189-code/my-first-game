const pvpRadio = document.getElementById("mode-pvp");
const aiRadio = document.getElementById("mode-ai");
const difficultyGroup = document.getElementById("difficulty-group");
const difficultySelect = document.getElementById("ai-difficulty");
const musicToggle = document.getElementById("music-toggle");
const saveBtn = document.getElementById("save-settings");

function loadSettings() {
    const savedMode = localStorage.getItem("gameMode") || "pvp";
    const savedDifficulty = localStorage.getItem("aiDifficulty") || "medium";
    const savedMusic = localStorage.getItem("bgMusic") !== "false"; 

    if (savedMode === "ai") {
        aiRadio.checked = true;
        difficultyGroup.style.display = "block";
    } else {
        pvpRadio.checked = true;
        difficultyGroup.style.display = "none";
    }

    difficultySelect.value = savedDifficulty;
    musicToggle.checked = savedMusic;
}

pvpRadio.addEventListener("change", () => difficultyGroup.style.display = "none");
aiRadio.addEventListener("change", () => difficultyGroup.style.display = "block");

saveBtn.addEventListener("click", () => {
    const selectedMode = document.querySelector('input[name="game-mode"]:checked').value;
    const selectedDifficulty = difficultySelect.value;
    const musicOn = musicToggle.checked;

    localStorage.setItem("gameMode", selectedMode);
    localStorage.setItem("aiDifficulty", selectedDifficulty);
    localStorage.setItem("bgMusic", musicOn);

    alert("Settings Saved Successfully!");
    window.location.href = "first.html"; 
});

loadSettings();
