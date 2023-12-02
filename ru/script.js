var foodArray = [
  "пицца", "бургер", "паста", "спагетти", "сэндвич", "конфеты", "торт", "рис"
];
var randomNumberFood = Math.floor(Math.random()*foodArray.length);
var ingredientArray = [
  "кетчуп", "молоко", "сыр", "плиткорез battipav basic 2060 6", "конфета", "майонез", "соль", "перец", "рыба", "воздух", "шипучка", "электричество", "помидор", "огурец", "нож", "мясо", "спагетти", "мемы", "темная энергия"
];
var randomNumberIngredient = Math.floor(Math.random()*ingredientArray.length);
var randomNumberIngredient2 = Math.floor(Math.random()*ingredientArray.length);
var randomNumberIngredient3 = Math.floor(Math.random()*ingredientArray.length);
var randomNumberIngredient4 = Math.floor(Math.random()*ingredientArray.length);

var textArray1 = [
"Ты",
"Кеннеди",
"Джо, мама",
"Дискорд Модератор",
"Ньютон",
"Эйнштейн",
"Утка",
"среди нас",
"Канье Уэст",
"Максвелл",
"Габен",
"Сусси бака",
"Девушка в шляпе",
"Рик Эстли",
"Рыбка",
"Тупой парень",
"Школьный учитель",
"Троллфейс",
"Карен",
"Кайл",
"Microsoft",
"Губка Боб",
"Попытерка",
"Mojang",
"Хедкраб",
"Флоппа",
"Человек из Огайо",
"GLaDOS",
"Думгай",
"Yo dad",
"Шеф-повар",
"Инопланетянин",
"Самозванец",
"Член экипажа",
"Братан",
"Квант",
"Ученый",
"Кейв Джонсон",
"Гарри Поттер",
"Твой одноклассник",
"Учитель физкультуры", 
"Гигачад", 
"Чад",
"Клоун", 
'чвк редан',
'Парень',
"Девушка",
"неизвестный",
"девушка-геймер",
"Твоя кошка",
"Xxx_ALEXPRO228COOL_xxX",
"Я",
"Мистер зверь!!!",
"Пеппино",
"Бебрик",
"Гордон Фримен",
"Итальянец",
"аноним73852",
"idfsjfgihjgdfgj",
"привет"
];
var randomNumber1 = Math.floor(Math.random()*textArray1.length);
document.getElementById("name").innerHTML = textArray1[randomNumber1];

var textArray2 = [
    'cooked ' + foodArray[randomNumberFood] + " out of " + " " + ingredientArray[randomNumberIngredient] + ", " + ingredientArray[randomNumberIngredient2] + ", " + ingredientArray[randomNumberIngredient3] + ", and " + ingredientArray[randomNumberIngredient4],
"играл среди нас",
    "создал первый ПК с Windows",
    "спросил, кто такой Джо",
    "стал модником discord",
    "совершил преступление, используя губку",
    "создал первую Ikea",
"не был самозванцем",
"был самозванцем",
"просто покакал",
"летал на деревянной тарелке",
"купил бургер",
"купил новую игру в steam",
"созвал экстренное совещание",
"мяукнул",
"сказал uwu",
"играл в OldGuns",
"запустил орбитальную станцию",
"создал клан",
"запустил новую прямую трансляцию",
"загрузил новое видео",
"открыл новое достижение",
"взорвал взрывчатую бомбу по имени explosive бомба по имени explosive",
"получил rickrolled",
"искал dqw4w и нажал feeling lucky",
"получил stickbugged",
"нашел ошибку",
"скачал вирус",
"что-то сделал",
"пример текста",
"вздохнул",
"был обманут",
"проиграл игру",
"выиграл игру",
"выиграл в лотерею",
"дождался half-life 3",
"is sus",
"купил зарядное устройство",
"родился",
"поделился своим мнением в Интернете",
"закодировал игру",
"сделал ремикс на песню",
"спит",
"съел багет и стал французом",
"думал, в школе было легко",
"получил пятерку с плюсом",
"стал успешным бизнесменом",
"обманул кого-то",
"поднял температуру",
"пожертвовал 1000 долларов на благотворительность",
"получил двойку",
"пил чай",
"умер",
"спросил чат gpt, что, черт возьми, не так с этими фразами",
"был изгнан",
"создал новый искусственный интеллект",
"построил город",
"был заблокирован блокировщиком рекламы",
"кричал так громко, что разбилось стекло",
"сказал братан",
"начал войну",
"создал новый месяц",
"выучил новый танец",
"уволил своего босса",
"совершил военные преступления",
"купил 2 доллара по цене 1 доллара",
"купил 1 доллар по цене 2 долларов",
"покормил свою кошку",
"был заблокирован в твиттере",
"превратился в пушистика",
"был арестован",
"создал новую учетную запись",
"отправился в xen",
"совершил каскадный резонанс",
"нашел ссылку на jojo",
"погуглил научное название свиньи и умер",
"создал первую атомную бомбу",
"смешал колу и ментос"
];
var randomNumber2 = Math.floor(Math.random()*textArray2.length);
document.getElementById("action").innerHTML = textArray2[randomNumber2];

var randomNumber3 = (Math.random() * (2050 - 0001 + 1) ) << 0
document.getElementById("year").innerHTML = textArray3[randomNumber3];
var textArray4 = [
"первого апреля",
"на новый год",
"на Хэллоуин",
"в понедельник",
"во вторник",
"в среду (ССЫЛКА??????????)",
"в четверг",
"в пятницу",
"в субботу",
"в воскресенье",
'сегодня',
'вчера',
'29 февраля',
'каждый день',
'на прошлой неделе',
'1-го числа',
'в октябре',
'в ноябре',
'в декабре',
'в августе',
'в апреле',
"в марте",
"в сентябре",
"в мае",
"7 июля",
"в июне",
"в январе",
"в феврале"
];
var randomNumber4 = Math.floor(Math.random()*textArray4.length);
document.getElementById("date").innerHTML = textArray4[randomNumber3];

var slider = document.getElementById("custom1");
var slider1 = document.getElementById("custom2");
var slider2 = document.getElementById("custom3");
var slider3 = document.getElementById("custom4");

slider.max = textArray1.length-1
slider1.max = textArray2.length-1
slider2.max = textArray4.length-1
// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  randomNumber1 = this.value; // Display the default slider value document.getElementById("name").innerHTML = textArray1[randomNumber1];
document.getElementById("name").innerHTML = textArray1[randomNumber1];
document.getElementById("seed").innerHTML = randomNumber1 + "-" + randomNumber2 + "-" + randomNumber4;
}
slider1.oninput = function() {
randomNumber2 = this.value; // Display the default slider value
document.getElementById("action").innerHTML = textArray2[randomNumber2];
document.getElementById("seed").innerHTML = randomNumber1 + "-" + randomNumber2 + "-" + randomNumber4;
}
slider2.oninput = function() {
randomNumber4 = this.value; // Display the default slider value
document.getElementById("date").innerHTML = textArray4[randomNumber4];
document.getElementById("seed").innerHTML = randomNumber1 + "-" + randomNumber2 + "-" + randomNumber4;
}
slider3.oninput = function() {
randomNumber3 = this.value; // Display the default slider value
document.getElementById("year").innerHTML = "" + randomNumber3;
  if(!slider3.value.includes("-" || slider3.value === undefined){
randomNumber3 = 0;
  }
}

document.getElementById("date").innerHTML = textArray4[randomNumber4];
document.getElementById("action").innerHTML = textArray2[randomNumber2];
document.getElementById("name").innerHTML = textArray1[randomNumber1];
document.getElementById("seed").innerHTML = randomNumber1 + "-" + randomNumber2 + "-" + randomNumber4;
document.getElementById("year").innerHTML = "" + randomNumber3;




