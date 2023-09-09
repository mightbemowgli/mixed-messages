const mainContainer = document.getElementById('main-container');
const textContainer = document.getElementById('text-container');
const rollBtn = document.getElementById('roll-btn');

//write function to get a number between 0 - Num
const getRandomNumber = num => {
    return Math.floor(Math.random() * num);
}

//object with class, alignment, race
const characterCombo = {
    alignment: ['Lawful Good', 'Neutral Good', 'Chaotic Good',
                'Lawful Neutral', 'True Neutral', 'Chaotic Neutral',
                'Lawful Evil', 'Neutral Evil', 'Chaotic Evil'],
    race: ['Dragonborn', 'Dwarf', 'Elf', 
           'Gnome', 'Half-elf', 'Halfling',
           'Half-orc', 'Human', 'Tiefling'],
    class: ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Artificer',
            'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard']
}

//store character info in an array
let newCharacter = [];

const rollCharacter = () => {
    for (const prop in characterCombo) {
        let propIndex = getRandomNumber(characterCombo[prop].length);
        switch(prop) {
            case 'alignment': 
                newCharacter.push(`${characterCombo[prop][propIndex]}`)
                break;
            case 'race':
                newCharacter.push(`${characterCombo[prop][propIndex]}`)
                break;
            case 'class':
                newCharacter.push(`${characterCombo[prop][propIndex]}`)
                break;
        }
    }
}

const formatArray = () => {
    rollCharacter();
    const formatted = newCharacter.join(' ');
    textContainer.textContent = `You should play as a ${formatted}!`;
}

rollBtn.onclick = function() {
    formatArray(newCharacter);
    newCharacter = [];
}

