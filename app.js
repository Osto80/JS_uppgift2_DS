/*
//Lek med shadow, med target class. Svårt iom att vi inte får peta på HTML...
let cardShadow = document.querySelectorAll('.card');
console.log(cardShadow[1]);

addEventListener('mouseover', function shadowDrop() {  
  for (let i = 0; i < cardShadow.length; i++){
    cardShadow[i].style.transitionDuration = "1500ms";
    cardShadow[i].style.boxShadow = "2px 2px 5px grey";
    this.setTimeout(function shadowTime() {      
      cardShadow[i].style.boxShadow = "none";
    }, 1500)
  }
})*/

//Kul, men brutal i antalet anrop, så den kan vi inte använda... får fila vidare på detta.
/*
addEventListener('mouseover', function targetCard(event) {  
  for (let i = 0; i < cardShadow.length; i++){    
    event.target.style.boxShadow = "2px 2px 5px grey";
    console.log('shadowtime');
    this.setTimeout(function shadowTime() {      
      event.target.style.boxShadow = "none";
    }, 1500)
  }
})

//cardShadow[1].style.boxShadow = "2px 2px 5px grey";
*/

/*
Uppgift 1: 
Använd variabeln blue för att "toggla" bakrgrundsfärgen mellan blå och vit
för diven med id answer-one när man klickar på knappen
*/
//DONE!
let blue = false;

function taskOne() {
  let element = document.getElementById('answer-one');  
  if (blue == false) {
    blue = true;
    element.style.backgroundColor = 'blue';
  } else {
    blue = false;
    element.style.backgroundColor = 'white';
  } 
}

/*
Uppgift 2: 
Varje gång man klickar på knappen ska ett nytt random-värde 
läggas till i numbers-arrayen, innan arrayen renderas ut i diven med id answer-two
*/
//DONE!
const numbers = [234, 986, 784];

function taskTwo() {  
  randomNumber = Math.floor(Math.random() * 1000);
  numbers.push(randomNumber);   
  document.getElementById('answer-two').innerHTML = numbers;
  document.getElementById('answer-two').style.fontFamily = "arial";
}

/*
Uppgift 3: 
Identifiera vilken dag i veckan det är, ifall det är helg (lördag eller söndag) 
ska du trigga en alert med meddelandet "Woohooo it's weekend" annars om det 
inte är helg ska du trigga en alert med meddelandet "FML"
*/
//DONE!
function taskThree() {
  let time = new Date();
  let whatDay = time.getDay();
  console.log(whatDay);

  if (whatDay == 0 || whatDay == 6) {
    alert("Woohooo it's weekend");
  } else {
    alert('FML');
  }
}
// Kanske kan skriva om med new date().getDay() jämförelse direkt. ska kolla detta.

/*
Uppgift 4: 
Anropa funktionen multiplier och förse den med två argument (värden), multiplier ska sedan 
undersöka om dessa värden är nummer, om så är fallet ska värdena multipliceras och resultatet 
ska sedan visas i en alert-box utefter följande: Produkten är: [RESULTATET], annars om ett av 
eller båda värdena inte är ett nummer ska en alertbox med meddelandet "Jag kan bara multiplicera numer" triggas
*/

const valueOne = "1.5";
const valueTwo = 3.5;

function multiplier(valueOne, valueTwo) {
  
  if (typeof valueOne == 'string' || typeof valueTwo == 'string') {    
    if (!Number.isNaN(valueOne) || !Number.isNaN(valueTwo)) {
      if (Number(valueOne) > 0 && Number(valueTwo) > 0 ) {
        const result = Number(valueOne) * Number(valueTwo);
          alert('Produkten är: ' + result);
        } else {
          alert('Jag kan bara multiplicera nummer (String)')
        };      
    } else {
        alert('Jag kan bara multiplicera nummer')
    }    
  } else {
    const result = Number(valueOne) * Number(valueTwo);
    alert('Produkten är: ' + result);
  };
}

function taskFour() {
  console.log(Number.isNaN(valueOne));
  multiplier(valueOne, valueTwo);
}

/*
Uppgift 5: 
Börja med att iterera över arrayen fruits, om värdet är "apelsin" eller "päron" 
ska du pusha värdet till trash-arrayen, annars ska du pusha värdet till eatable-arrayen, 
du ska sedan rendera ut båda arrayerna i diven "answer-five", där eatable arrayen ska 
prefixas av "Ätligt:" i bold och trash-arrayens värden ska prefixas av "Skräp:" i bold

Det kommer alltså att se ut såhär
Ätligt: banan, äpple, citron
Skräp: apelsin, päron
*/
//Done!
const fruits = ["banan", "äpple", "citron", "apelsin", "päron"];
const eatable = [];
const trash = [];

function taskFive() {

  //eatable.splice(0,eatable.length);
  //trash.splice(0,trash.length);

  for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] == "apelsin" || fruits[i] == "päron") {
      trash.push(fruits[i]);      
    } else {
      eatable.push(fruits[i]);
    }
  }
  
  //document.getElementById('answer-five').insertAdjacentHTML('beforeend', "<b>Ätligt: </b>" + eatable + "<b>Skräp: </b>" + trash);
  //Behåller knappen, men problemet är att den då fortsätter lägga till nya instancer av orden. Kanske kan bygga en guard mot det?
  document.getElementById('answer-five').innerHTML = "<b>Ätligt: </b>" + eatable + "<b>Skräp: </b>" + trash;
}

/*
Uppgift 6: 
Börja med att iterera över arrayen persons, om personens age-attribut är över eller lika med 30
ska du pusha personens namn till overThirty-arrayen, annars ska du pusha värdet till underThirty-arrayen,
du ska sedan kolla om personens married-attribut är true eller false, är det true ska du pusha personens 
namn till married-arrayen, annars ska du pusha personens namn till notMarried-arrayen.

Du ska sedan rendera ut alla arrayerna i diven "answer-six", där overThirty arrayens värden ska 
prefixas av "Över 30:" i bold, underThirty-arrayens värden ska prefixas av "Under 30:" i bold, 
married-arrayens värden ska prefixas av "Gift:" i bold och notMarried-arrayens värden ska prefixas av "Ogift:" i bold

Det kommer alltså att se ut såhär
Över 30: Christian
Under 30: Diana,Carl,Karin
Gift: Christian,Diana
Ogift: Carl,Karin
*/
//DONE!
const persons = [
  { name: "Christian", age: 31, married: true },
  { name: "Diana", age: 29, married: true },
  { name: "Carl", age: 28, married: false },
  { name: "Karin", age: 29, married: false },
];

const married = [];
const notMarried = [];
const overThirty = [];
const underThirty = [];

function taskSix() {
  for (let i = 0; i < persons.length; i++) {
    if (persons[i].age > 30) {
      overThirty.push(persons[i].name);
    } else {
      underThirty.push(persons[i].name);
    }
    if (persons[i].married == true) {
      married.push(persons[i].name)
    } else {
      notMarried.push(persons[i].name)
    } 
  };
  console.log(overThirty);
  console.log(underThirty);
  console.log(married);
  console.log(notMarried);
  //TODO: Sortering klar, ska fixa rendering på sida.
  document.getElementById('answer-six').innerHTML = "<b>Över 30: </b>" + overThirty + "<b>Under 30: </b>" + underThirty + "<b>Gift </b>" + married + "<b>Ogift: </b>" + notMarried;  
}

/*
Uppgift 7: 
Dela upp strängen addMeSomeLineBreaks vid varje komma och skriv 
ut texten på en ny rad i diven "answer-seven"
*/
//DONE!
const addMeSomeLineBreaks =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";

function taskSeven() {
  document.getElementById('answer-seven').innerHTML = '';
  const linesAdded = addMeSomeLineBreaks.split(",");
  console.log(linesAdded);
  for (let i = 0; i < linesAdded.length; i++) {
  //Printar ut det tydligt att de är splittade vid komma-tecknen.
  //document.getElementById('answer-seven').innerHTML = linesAdded; hade funkat för att printa ut den i diven.
  document.getElementById('answer-seven').insertAdjacentHTML('beforeend', linesAdded[i] + '<br><br>');
  document.getElementById('answer-seven').style.fontSize = "75%";
  
  }
  
}

/*
Uppgift 8: 
Dölj diven med id card-eight i 3 sekunder efter att du klickat på knappenn,
efter att tre sekunder har gått ska diven visas som vanligt igen
*/
//Done!
function taskEight() {
  document.getElementById('card-eight').style.display = 'none';
  setTimeout(function() { document.getElementById('card-eight').style.display = 'block'}, 3000);  
}

/*
Uppgift 9: 
Om klockan är över 17.00 ska bakgrundsfärgen ändras på alla divar med klassen 
answer-container till blå, annars ska den ändras till röd
*/

//DONE!
function taskNine() {
  let element = document.getElementsByClassName('answer-container');  

  let time = new Date();
  let hours = time.getHours();   
  
  if (hours <= 16) {        
    for (i = 0; i < element.length; i++) {
      element[i].style.backgroundColor = 'red';
    }
  } else {
    for (i = 0; i < element.length; i++) {
      element[i].style.backgroundColor = 'blue';
    }
  }  
}

/*
Uppgift 10: 
Sista uppgiften är att bygga en miniräknare genom att anropa och förse 
calculator-funktionen med tre argument (se taskTen-funktionen), 
i calculator-funktionen ska du sedan göra olika beräkningar (plus, minus, gånger, delat med) på de två 
första parametrarna beroende av vad den tredje parametern är satt till ("add", "subtract", "multiply", "divide"). 
När resultatet har beräknats ska detta visas i en alert-box. 

Ytterligare så ska du innan beräkningen görs kontrollera att argument 1 och 2 är satta till nummer 
och att argument nummer tre antingen är satt till "add", "subtract", "multiply" eller "divide", 
om någon av dessa conditions inte uppfylls ska du visa en alertbox med texten "Något är fel"
*/

function calculator(valueOne, valueTwo, operator) {
  alert("Replace this alert with a solution");
}

function taskTen() {
  //första och andra argumentet ska vara nummer, tredje argumentet ska
  //vara en sträng med något av värdena "add", "subtract", "multiply", "divide"
  calculator();
}
