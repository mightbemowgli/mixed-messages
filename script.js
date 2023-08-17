//write function to get a number between 0 - Num
const getRandomNumber = num => {
    return Math.floor(Math.random() * num);
}
//object with class, alignment, race
const characterCombo = {
    axis: ['Lawful', 'Neutral', 'Chaotic'],
    alignment: ['Good', 'Neutral', 'Evil'],
    race: ['Dragonborn', 'Dwarf', 'Elf', 'Gnome', 'Half-elf', 'Halfling',
           'Half-orc', 'Human', 'Tiefling'],
    class: ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk',
            'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard']
}

//store character info in an array
let newCharacter = [];

//iterate over the object

//user object properties to customize message in the array
//'You should roll a ${alignment} ${race} ${class}'