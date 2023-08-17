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
    class: ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk',
            'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard']
}

//store character info in an array
let newCharacter = [];

//iterate over the object
for (const prop in characterCombo) {
    let propIndex = getRandomNumber(characterCombo[prop].length);

//use object properties to customize message in the array
//'You should roll a ${alignment} ${race} ${class}'
    switch(prop) {
        case 'alignment': 
            newCharacter.push(`Your character should have a ${characterCombo[prop][propIndex]} alignment.`)
            break;
        case 'race':
            newCharacter.push(`Your character should be a(n) ${characterCombo[prop][propIndex]}.`)
            break;
        case 'class':
            newCharacter.push(`You should play as a ${characterCombo[prop][propIndex]}`)
            break;
        default: 
            newCharacter.push('I don\'t know what you should play, you decide!')
    }
}

const formatArray = charInfo => {
    const formatted = newCharacter.join('\n');
    console.log(formatted);
}

formatArray(newCharacter);

