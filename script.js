const maleHumanNames = ["Akibrus", "Angun", "Balrus", "Bulruk", "Caldor", "Dagen", "Darvyn", "Delvin", "Dracyian", "Dray", "Eldar", "Engar", "Fabien", "Farkas", "Galdor", "Igor", "Jai-Blynn", "Klayden", "Laimus", "Malfas", "Norok", "Orion", "Pindious", "Quintus", "Rammir", "Remus", "Rorik", "Sabir", "Séverin", "Sirius", "Soril", "Sulfu", "Syfas", "Viktas", "Vyn", "Wilkass", "Yagul", "Zakkas", "Zarek", "Zorion"]
const femaleHumanNames = ["Aleera", "Alva", "Amara", "Anya", "Asralyn", "Azura", "Breya", "Brina", "Caelia", "Ciscra", "Dezaral", "Dorath", "Drusila", "Elda", "Esmeralla", "Freya", "Gelda", "Hadena", "Kyla", "Kyra", "Lavinia", "Lunarex", "Lyra", "Mireille", "Nyssa", "Olwyn", "Ophelia", "Peregrine", "Reyda", "Sarielle", "Shikta", "Sybella", "Syfyn", "Thalia", "Turilla", "Vasha", "Vixen", "Yvanna", "Zaria", "Zeniya"]

const maleDwarfNames = ["Angor", "Austi", "Bragi", "Braka", "Brobek", "Brulin", "Coalak", "Dagurt", "Digroi", "Eiki", "Eilivur", "Floki", "Frostar", "Fundar", "Gogu", "Gremin", "Gusak", "Heptin", "Horar", "Hungus", "Ingivald", "Jodis", "Killin", "Lipith", "Lofar", "Malok", "Noi", "Oddfinnur", "Prodos", "Ragriel", "Randil", "Rotnam", "Salvor", "Slyvek", "Throar", "Toki", "Virfi", "Voggur", "Withil", "Zazfa"]
const femaleDwarfNames = ["Amerstal", "Aqrilla", "Bellesta", "Bonnwynn", "Brilbelle", "Chalia", "Daernip", "Devella", "Dimlinn", "Edmyla", "Erthel", "Fada", "Gembelle", "Ithi", "Jaderyn", "Jinvia", "Kezda", "Kystal", "Lija", "Minelle", "Misi", "Misma", "Mistmael", "Mysris", "Nalra", "Narvari", "Pondral", "Ragna", "Saphil", "Sola", "Soldelle", "Tazlen", "Tisnip", "Tisthel", "Tiznys", "Vinelle", "Wiska", "Wispmaral", "Yrsa", "Zika"]

const maleElfNames = ["Ailmar", "Akkar", "Axil", "Belstram", "Cluym", "Corym", "Daemeon", "Darcassan", "Darfin", "Eldar", "Elwin", "Eroan", "Faelar", "Finrod", "Gaemon", "Haemir", "Hastos", "Ismzal", "Jassin", "Jhaan", "Kuskyn", "Kymil", "Lago", "Morthil", "Myrinn", "Neldor", "Nesterin", "Nindr", "Onas", "Orym", "Pharom", "Pyrder", "Rijjat", "Silvyr", "Sudryl", "Thingol", "Turgon", "Usunaar", "Vaegon", "Zabbas"]
const femaleElfNames = ["Alea", "Azariah", "Bellas", "Bonna", "Chandrelle", "Ciradyl", "Daealla", "Doreah", "Elora", "Estelar", "Faelyn", "Foxfire", "Gaylia", "Gylledha", "Haela", "Ilbryn", "Ilyrana", "Josidiah", "Keara", "Lymseia", "Merlara", "Narbeth", "Nym", "Oribel", "Phyrra", "Quamara", "Rennyn", "Rhenalyrr", "Saeya", "Sheedra", "Taena", "Talila", "Tanulia", "Uldreiyn", "Vaella", "Vesryn", "Wistari", "Ylyndar", "Yrlissa", "Zhuirentel"]

const orcNames = ["Azuk", "Bashag", "Brag", "Bugdul", "Dalthu", "Duma", "Ergoth", "Garekk", "Ghorlorz", "Gnabadug", "Gruul", "Gularzob", "Ikgnath", "Karrhig", "Khadba", "Kukgilug", "Lorbumol", "Mash", "Nofhug", "Nulgha", "Onubub", "Opilge", "Pughilug", "Rakgu", "Rebub", "Salthu", "Sugha", "Targigoth", "Urag", "Vagan", "Varbu", "Vegum", "Vetorkag", "Vitgut", "Wanug", "Wanug", "Yughragh", "Zurbag", "Zurgha", "Zurpigig"]

const pickRace = () => {
    const fantasyRaces = ["Human", "Dwarf",  "Elf", "Orc"]
    const raceNum = Math.floor(Math.random() * 4)
    const getRace = fantasyRaces[raceNum]
    return getRace
}

const pickGender = () => {
    const gender = ["male", "female"]
    const genderNum = Math.floor(Math.random() * 2)
    const getGender = gender[genderNum]
    return getGender
}

const pickClass = () => {
    const fantasyClasses = ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Wizard"]
    const classNum = Math.floor(Math.random() * 11)
    const getClass = fantasyClasses[classNum]
    return getClass
}

const pickName = (gender, race) => {
    switch 
}

const generateChar = () => {
    pickRace();
    pickGender();
    pickClass();
}