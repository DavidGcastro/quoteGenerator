// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var quotes = [
  {
    quote: "This is Quote number 1. Quote number 1 is here",
    source: "David Castro",
    citation: "Book number 1",
    year: 2017
  },
  {
    quote: "I am quote 2, look at me",
    source: "George",
    citation: "George's life",
    year: 1980
  },
  {
    quote: "Life is Good 3",
    source: "Sally",
    year: 1976
  },
  {
    quote: "Life is like a box of chocolates",
    source: "Forest Gump's mom",
    citation: "Forest Gump",
    year: 1984
  },
  {
    quote: "Last Quote, This is the last quote.",
    source: "Unknown",
    citation: "Unknown Citation"
  }
];

var random;
var message = "";
var randomColor;


document.getElementById("loadQuote").addEventListener("click", printQuote, false);
document.getElementById("loadQuote").addEventListener("click", changeColor, false);

function getRandomQuote() {
  random = Math.floor(Math.random() * quotes.length);
  return quotes[random];
}


function printQuote() {
  var printMe = getRandomQuote();
  message = "<p class = 'quote'" + ">" + printMe.quote + "</p>";
  message += "<p class = 'source'" + ">" + printMe.source;
  if (printMe.citation !== undefined) {
    message += "<span class = 'citation'" + ">" + printMe.citation + "</span>";
  }
  if (printMe.year !== undefined) {
    message += "<span class = 'year'" + ">" + printMe.year + "</span>";
  }
  message += "</p>";
  document.getElementById("quote-box").innerHTML = message;
}

setInterval(printQuote, 5000);

function changeColor() {
  var backGround =
    "rgb(" +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    ")";
  console.log(backGround);
  document.body.style.background = backGround;
}
