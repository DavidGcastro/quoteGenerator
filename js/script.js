// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


//my object of arrays, includes objects without a year, and citation
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

//executes printQuote
document.getElementById("loadQuote").addEventListener("click", printQuote, false);
//executes changeColor
document.getElementById("loadQuote").addEventListener("click", changeColor, false);


function getRandomQuote() {
  // get a random number, the length of the array being the max
  random = Math.floor(Math.random() * quotes.length);
  // returns the random object at that index
  return quotes[random];
}


function printQuote() {
  //assigned the return value to a variable
  var printMe = getRandomQuote();
  
  // since the quote property is Always present, make it the inital value of message
  message = "<p class = 'quote'" + ">" + printMe.quote + "</p>";
  // adds another property that is always present, source, notice that there is no closing </p> tag
  message += "<p class = 'source'" + ">" + printMe.source;
    //check if ther3 is a citation, if there is run this:
  if (printMe.citation !== undefined) {
    //adds a span class that is nested in side the paragraph
    message += "<span class = 'citation'" + ">" + printMe.citation + "</span>";
  }
  if (printMe.year !== undefined) {
    // if there is a year property do this
    message += "<span class = 'year'" + ">" + printMe.year + "</span>";
  }
  // after all these checks are done, finally add the closing p tag
  message += "</p>";
  //print message to screen
  document.getElementById("quote-box").innerHTML = message;
}
// run printQuote every 5 seconds
setInterval(printQuote, 5000);

function changeColor() {
    
  var backGround =
    // gets 3 randoms numbers 1-255, concats them to make a rgb value
    "rgb(" +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    ")";
  // changes the background to the new value
  document.body.style.background = backGround;
}
