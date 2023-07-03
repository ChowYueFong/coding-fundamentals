const quote = document.getElementById("quote");
const author = document.getElementById("author");
const button = document.getElementById("new-quote");
const ENDPOINT = "https://api.quotable.io/random";

async function getQuote() {
  const response = await fetch(ENDPOINT);
  const data = await response.json();

  return data;
}

async function displayQuote() {
  const data = await getQuote();
  console.log(data);
  quote.textContent = data.content;
  const authorName = data.author;
  author.textContent = `- ${authorName}`;
}

button.addEventListener("click", () => {
  displayQuote();
});

window.addEventListener("load", () => {
  displayQuote();
});
