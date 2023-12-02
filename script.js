
/*const message = document.querySelector('#searchTxt');
message.addEventListener('input', function () {
  randomNumber1 = document.getElementById("custom1").value;
  randomNumber2 = document.getElementById("custom2").value;
  randomNumber4= document.getElementById("custom3").value;
}
}*/
var foodArray = [
  'pizza', 'a burger', 'a pasta', 'spaghetti', 'a sandwich', 'a candy', 'a cake', 'rice'
];
var gameArray = [
  'OldGuns', 'SMO 2', 'Half Life 3', 'ligma', 'Burger Skyscraper', 'Sonic Frontiers 2', 'Among Us 2'
]
var randomNumberFood = Math.floor(Math.random() * foodArray.length);
var randomNumberGame = Math.floor(Math.random() * gameArray.length);
var ingredientArray = [
  'ketchup', 'milk', 'cheese', 'tile cutter battipav basic 2060 6', 'a candy', 'mayo', 'salt', 'pepper', 'a fish', 'air', 'poop', 'electricity', 'a tomato', 'a cucumber', 'a knife', 'meat', 'spaghetti', 'memes', 'dark energy'
];
var randomNumberIngredient = Math.floor(Math.random() * ingredientArray.length);
var randomNumberIngredient2 = Math.floor(Math.random() * ingredientArray.length);
var randomNumberIngredient3 = Math.floor(Math.random() * ingredientArray.length);
var randomNumberIngredient4 = Math.floor(Math.random() * ingredientArray.length);

var textArray1 = [
  'You',
  'JFK',
  'Yo Mama',
  'A discord mod',
  'Newton',
  'Einstein',
  'A duck',
  'Kanye West',
  'Maxwell',
  'Gaben',
  'Rick Astley',
  'Fish',
  'goofy ahh man',
  'School teacher',
  'Trollface',
  'Karen',
  'Kyle',
  'Microsoft',
  'Spongebob',
  'Попытерка',
  'Mojang',
  'A headcrab',
  'Floppa',
  'A virgin(not oil)',
  'Ohioman',
  'GLaDOS',
  'Doomguy',
  'Yo dad',
  'Chef',
  'An alien',
  'A bro',
  'QuantumV3',
  'A scientist',
  'Cave Johnson',
  'Harry Potter',
  'Yo classmate',
  'PE teacher',
  'Gigachad',
  'Chad',
  'A clown',
  'Guy',
  'Girl',
  'unknown',
  'Your cat',
  'Xxx_ALEXPRO228COOL_xxX',
  'Me',
  'Mr. Beast!!!',
  'Peppino',
  'Bebrick',
  'Gordon Freeman',
  'An italian',
  'anonymous73852',
  'idfsjfgihjgdfgj',
  'hi',
  'Fake Peppino',
  'Gustavo',
  'Pizzahead',
  'Enderdragon',
  'The Noise'
];
var randomNumber1 = Math.floor(Math.random() * textArray1.length);
if (randomNumber1 == 49 || randomNumber1 == 22 || randomNumber1 == 12 || randomNumber1 == 3) {
  var pronoun = "her"
}
else {
  pronoun = "his"
}
var randomNumber1_1 = Math.floor(Math.random() * textArray1.length);
var textArray2 = [
  'cooked ' + foodArray[randomNumberFood] + " out of " + " " + ingredientArray[randomNumberIngredient] + ", " + ingredientArray[randomNumberIngredient2] + ", " + ingredientArray[randomNumberIngredient3] + ", and " + ingredientArray[randomNumberIngredient4],
  'played Among Us',
  'created the first Windows PC',
  'asked who Joe is',
  'became a discord mod',
  'did a crime using a sponge',
  'created the first Ikea',
  'hired this man to work on ' + gameArray[randomNumberGame],
  'was not an impostor',
  'was an impostor',
  'just pooped',
  'flied using the wooden plate',
  'bought a burger',
  'bought a new game on steam',
  'called the emergency meeting',
  'meowed',
  'said uwu',
  'played ' + gameArray[randomNumberGame],
  'launched an orbital station',
  'created a clan',
  'started a new livestream',
  'uploaded a new video',
  'unlocked a new achievment',
  'exploded an explosive bomb named explosive bomb named explosive',
  'got rickrolled',
  'searched dqw4w and pressed feeling lucky',
  'got stickbugged',
  'found a bug',
  'downloaded a virus',
  'did something',
  'example text',
  'breathed',
  'got scammed',
  'lost a game',
  'won a game',
  'won a lottery',
  'waited for half-life 3',
  'is sus',
  'forgor ' + pronoun + ' charger',
  'was born',
  'shared his opinion on the internet',
  'coded a game',
  'remixed a song',
  'is sleeping',
  'il a mangé une baguette et est devenu français',
  'thought school was easy',
  'got an A+',
  'became succesful business man',
  'scammed someone',
  'turned temperature up',
  'donated 1000$ to charity',
  'got an F-',
  'drank tea',
  'died',
  'asked chat gpt what the hell is wrong with these phrases',
  'was ejected',
  'created a new ai',
  'built a city',
  'got blocked by an adblocker',
  'yelled so loud that the glass broke',
  'said bruh',
  'started a war',
  'created a new month',
  'learned a new dance',
  'fired ' + pronoun + ' boss',
  'committed war crimes',
  'bought 2$ on the price of 1$',
  'bought 1$ on the price of 2$',
  'fed ' + pronoun + ' cat',
  'got blocked on twitter',
  'turned into a furry',
  'was arrested',
  'yelled at ' + textArray1[randomNumber1_1],
  'declared ' + pronoun + ' love to ' + textArray1[randomNumber1_1],
  'just called ' + textArray1[randomNumber1_1],
  'created a new account',
  'traveled to xen',
  'committed cascade resonance',
  'found a jojo reference',
  'googled the scientific name of the pig and died',
  "created the first Atomic Bomb",
  'mixed cola and mentos',
  'has flown a plane',
  'said Kenny doesn`t add to combo',
  'decided to absolutely hit the griddy then die',
  'p ranked gnome forest',
'got a life',
'touched some grass',
'ate a spicy burrito',
  'landed from the huge ass punch caused by john and fucking exploded',
  'dropped a nuclear bomb on pizza tower',
'watched the paint dry',
'bought a kitten',
'played beer pong',
'ate a pineapple pizza',
'went to mcdonalds',
  'broke one of the 10 commandments',
'played scoutdigo',
'exploded due to eating too much whoppers',
'jumped up high into the air',
  'parried the ranchers bullet 10 times',
  'solved 8 - 16',
'studied quantum mechanics',
'almost beated farewell',
'lost his P-rank due to Forknight',
'died before beating the Enderdragon',
'Cranked 90s',
  'saw a cool bird',
  'XBOX LIVE'
];
var randomNumber2 = Math.floor(Math.random() * textArray2.length);

/*var textArray3 = [
    '0001',
    '1969',
    '2420',
    '1842',
    '1392',
    '1952',
  '2020',
'2077',
'the year 1000',
'the year 2000',
'the year 69',
'1420',
'9999',
'3493',
'7304',
'2007',
'2012',
'the far future'
];*/
/*var randomNumber3 = Math.floor(Math.random()*textArray3.length);*/
var randomNumber3 = (Math.random() * (2050 - 0001 + 1)) << 0

var textArray4 = [
  'on the first of april',
  'on new year',
  'on halloween',
  'on monday',
  'on tuesday',
  'on wednesday(REFERENCE??????????)',
  'on thursday',
  'on friday',
  'on saturday',
  'on sunday',
  'today',
  'yesterday',
  '29th of february',
  'every day',
  'last week',
  'on the 1st of hgfhdughdfiughdfigdfary',
  'in october',
  'in november',
  'in december',
  'in august',
  'in april',
  'in march',
  'in september',
  'in may',
  'on the 7th of july',
  'in june',
  'in january',
  'in february',
  ''
];
var randomNumber4 = Math.floor(Math.random() * textArray4.length);

document.getElementById("date").innerHTML = textArray4[randomNumber4];
document.getElementById("action").innerHTML = textArray2[randomNumber2];
document.getElementById("name").innerHTML = textArray1[randomNumber1];
document.getElementById("seed").innerHTML = randomNumber1 + "-" + randomNumber2 + "-" + randomNumber4;
document.getElementById("year").innerHTML = "" + randomNumber3;



var slider = document.getElementById("custom1");
var slider1 = document.getElementById("custom2");
var slider2 = document.getElementById("custom3");
var slider3 = document.getElementById("custom4");

slider.max = textArray1.length - 1
slider1.max = textArray2.length - 1
slider2.max = textArray4.length - 1
slider.value = randomNumber1;
slider1.value = randomNumber2;
slider2.value = randomNumber4;
slider3.value = randomNumber3;
// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  randomNumber1 = this.value; // Display the default slider value document.getElementById("name").innerHTML = textArray1[randomNumber1];
  document.getElementById("name").innerHTML = textArray1[randomNumber1];
  document.getElementById("seed").innerHTML = randomNumber1 + "-" + randomNumber2 + "-" + randomNumber4;
  if (document.getElementById("seed").textContent.includes("6-66-6") || document.getElementById("seed").textContent.includes("6-6-6")) {
    document.location.href = "https://misinformation-generator.quantumv.repl.co/666/";
  }
}
slider1.oninput = function() {
  randomNumber2 = this.value; // Display the default slider value
  document.getElementById("action").innerHTML = textArray2[randomNumber2];
  document.getElementById("seed").innerHTML = randomNumber1 + "-" + randomNumber2 + "-" + randomNumber4;
  if (document.getElementById("seed").textContent.includes("6-66-6") || document.getElementById("seed").textContent == "6-6-6") {
    document.location.href = "https://misinformation-generator.quantumv.repl.co/666/";
  }
}
slider2.oninput = function() {
  randomNumber4 = this.value; // Display the default slider value
  document.getElementById("date").innerHTML = textArray4[randomNumber4];
  document.getElementById("seed").innerHTML = randomNumber1 + "-" + randomNumber2 + "-" + randomNumber4;
  if (document.getElementById("seed").textContent.includes("6-66-6") || document.getElementById("seed").textContent == "6-6-6") {
    document.location.href = "https://misinformation-generator.quantumv.repl.co/666/";
  }
}
slider3.oninput = function() {
  randomNumber3 = this.value; // Display the default slider value
  document.getElementById("year").innerHTML = "" + randomNumber3;
  if (!slider3.value.includes("-") || document.getElementById("year").innerHTML == "") {
    randomNumber3 = 0;
  }
  if (document.getElementById("seed").textContent.includes("6-66-6") || document.getElementById("seed").textContent == "6-6-6") {
    document.location.href = "https://misinformation-generator.quantumv.repl.co/666/";
  }
}

document.getElementById("tweet").href = "https://twitter.com/intent/tweet?text=" + document.getElementById("seed").textContent + " is the funny seed." + " It literally says " + document.getElementById("text").textContent.replace(/\s+/g, ' ').trim() + " Try it on https://misinformation-generator.quantumv.repl.co/";

