// Ingredients and their descriptions
const ingredients = {
    "unicorn-tears": "🦄 Unicorn Tears: Adds a touch of magic and sparkle!",
    "chocolate-syrup": "🍫 Chocolate Syrup: Sweetens the potion with love!",
    "stardust": "✨ Stardust: Brings cosmic energy to your potion!",
    "moonlight-essence": "🌙 Moonlight Essence: Adds a dreamy glow!",
    "heart-sparkles": "💖 Heart Sparkles: Fills the potion with love!",
    "dragon-scale": "🐉 Dragon Scale: Adds a fiery passion to your potion!",
    "fairy-dust": "🧚 Fairy Dust: Brings a sprinkle of enchantment!",
    "phoenix-feather": "🔥 Phoenix Feather: Adds rebirth and renewal!",
    "golden-apple": "🍎 Golden Apple: Brings eternal youth and vitality!",
    "rainbow-drops": "🌈 Rainbow Drops: Adds a burst of colorful joy!",
    "enchanted-rose": "🌹 Enchanted Rose: Adds timeless beauty and romance!",
    "crystal-shard": "🔮 Crystal Shard: Adds clarity and focus to your potion!"
};

// Track selected ingredients
const selectedIngredients = [];

// Add event listeners to ingredients
document.querySelectorAll(".ingredient").forEach(ingredient => {
    ingredient.addEventListener("click", () => {
        const ingredientId = ingredient.getAttribute("data-ingredient");
        if (!selectedIngredients.includes(ingredientId)) {
            selectedIngredients.push(ingredientId);
            const ingredientDiv = document.createElement("div");
            ingredientDiv.textContent = ingredients[ingredientId];
            document.getElementById("cauldron-content").appendChild(ingredientDiv);
        }
    });
});

// Mix the potion
document.getElementById("mix-button").addEventListener("click", () => {
    if (selectedIngredients.length === 0) {
        alert("Add some ingredients first!");
        return;
    }

    // Add bubbling animation
    const cauldron = document.getElementById("cauldron-content");
    cauldron.classList.add("bubbling");

     // Show result after a short delay
    setTimeout(() => {
        cauldron.classList.remove("bubbling");
        const result = generatePotionDescription(selectedIngredients);
        document.getElementById("potion-description").textContent = result;
        document.getElementById("result").classList.remove("hidden");

        // Display potion emoji
        document.getElementById("potion-emoji").style.display = "block";
    }, 2000);
});

// Reset the potion mixer
document.getElementById("reset-button").addEventListener("click", () => {
    selectedIngredients.length = 0;
    document.getElementById("cauldron-content").innerHTML = "";
    document.getElementById("result").classList.add("hidden");
});

// Generate a fun potion description
function generatePotionDescription(ingredients) {
    const descriptions = [
        "A potion so magical, it could make Cupid jealous!",
        "This potion is sweeter than a box of chocolates!",
        "Brewed with love and a dash of stardust!",
        "The perfect potion for a romantic evening!",
        "This potion will make hearts flutter everywhere!",
        "A potion so powerful, it could rekindle ancient flames!",
        "This potion is infused with the essence of eternal love!",
        "A magical blend that will make you feel like you're floating on clouds!",
        "This potion is so enchanting, even fairies would be impressed!",
        "A potion that sparkles with the colors of the rainbow!",
        "This potion is so dreamy, it could make the stars dance!",
        "A potion so radiant, it could light up the darkest night!",
        "This potion is so sweet, it could melt even the coldest heart!",
        "A potion so mystical, it could unlock the secrets of the universe!",
        "This potion is so vibrant, it could bring life to a barren land!",
        "A potion so mesmerizing, it could stop time itself!",
        "This potion is so pure, it could cleanse the soul!",
        "A potion so fiery, it could ignite a thousand passions!",
        "This potion is so serene, it could calm the stormiest seas!",
        "A potion so dazzling, it could outshine the sun!"
    ];

    const randomDescription = descriptions[Math.floor(Math.random() * descriptions.length)];
    return `Your love potion contains:\n${ingredients.map(id => ingredients[id]).join("\n")}\n\n${randomDescription}`;
}