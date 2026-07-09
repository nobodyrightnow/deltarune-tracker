// show/hide bonus stuff
const showBonus = document.getElementById("show-bonus");
const hideBonus = document.getElementById("don't-show-bonus");

const bonusItems = document.querySelectorAll(".bonus");

function bonusVisibility() {
    if (showBonus.checked) {
        bonusItems.forEach(item => {
            item.classList.remove("hidden");
        });
    }
    else {
        bonusItems.forEach(item => {
            item.classList.add("hidden");
        });
    }
}

showBonus.addEventListener("change", bonusVisibility);
hideBonus.addEventListener("change", bonusVisibility);

// show/hide mercy route exclusives
const mercyRoute = document.getElementById("show-mercy");
const noMercyRoute = document.getElementById("don't-show-mercy");

const mercyItems = document.querySelectorAll(".mercy");
const noMercyItems = document.querySelectorAll(".no-mercy");

function changeRoute() {
    if (mercyRoute.checked) {
        mercyItems.forEach(item => {
            item.classList.remove("hidden");
        });
        noMercyItems.forEach(item => {
            item.classList.add("hidden");
        });
    }
    else {
        noMercyItems.forEach(item => {
            item.classList.remove("hidden");
        });
        mercyItems.forEach(item => {
            item.classList.add("hidden");
        });
    }
}

mercyRoute.addEventListener("change", changeRoute);
noMercyRoute.addEventListener("change", changeRoute);


// show/hide weird route/normal route items
const proceed = document.getElementById("weird-route");
const doNotProceed = document.getElementById("normal-route");

const weirdItems = document.querySelectorAll(".weird");
const notWeirdItems = document.querySelectorAll(".not-weird");

function getWeird() {
    if (proceed.checked) {
        weirdItems.forEach(item => {
            item.classList.remove("hidden");
        });
        notWeirdItems.forEach(item => {
            item.classList.add("hidden");
        });
    }
    else {
        notWeirdItems.forEach(item => {
            item.classList.remove("hidden");
        });
        weirdItems.forEach(item => {
            item.classList.add("hidden");
        });
    }
}

proceed.addEventListener("change", getWeird);
doNotProceed.addEventListener("change", getWeird);

// play select sound for all selections
const selectSound = new Audio("res/snd_select.wav");

document.querySelectorAll('input').forEach(inp => {
    inp.addEventListener("change", () => {
        selectSound.currentTime = 0;
        selectSound.play();
    });
});

document.querySelectorAll('a').forEach(anc => {
    anc.addEventListener("click", () => {
        selectSound.currentTime = 0;
        selectSound.play();
    });
});

// reset page when reset is clicked
const hurtSound = new Audio("res/snd_hurt1.wav");
const reset = document.getElementById("reset-button");

function resetInputs() {
    hurtSound.currentTime = 0;
    hurtSound.play();
    document.querySelectorAll('input').forEach(inp => {
        if (inp.checked) {
            inp.checked = false;
        }
    });
    // CLEAR LOCAL STORAGE or else it will load the old values
    localStorage.clear();
}
reset.addEventListener("click", resetInputs);

// SAVE TO LOCAL STORAGE

// checkboxes
document.querySelectorAll('input[type="checkbox"]').forEach(inp => {
    inp.addEventListener("change", () => {
        localStorage.setItem(inp.id, inp.checked);
    });
});
// radios
document.querySelectorAll('input[type="radio"]').forEach(inp => {
    inp.addEventListener("change", () => {
        if (inp.checked) {
            localStorage.setItem(inp.name, inp.value);
        }
    });
});

// LOAD FROM LOCAL STORAGE
window.addEventListener('DOMContentLoaded', () => {
    // checkboxes
    document.querySelectorAll('input[type="checkbox"]').forEach(inp => {
        const saved = localStorage.getItem(inp.id);
        // check to see if there are any saved items
        if (saved !== null) {
            inp.checked = (saved === 'true');
        }
    });
    // radios
    document.querySelectorAll('input[type="radio"]').forEach(inp => {
        const saved = localStorage.getItem(inp.name);
        // console.log(inp.name, inp.value, saved);
        if (inp.value === saved) {
            inp.checked = true;
        }
    })
});
