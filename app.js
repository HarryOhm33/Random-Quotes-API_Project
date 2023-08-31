let quoteUrl = "https://quote-garden.onrender.com/api/v3/quotes";

let btn = document.querySelector("#btn");
let qBox = document.querySelector("#q-box");
let pQuote = document.querySelector("#quote");
let pAuthor = document.querySelector("#author");

btn.addEventListener("mousedown", () => {
  btn.classList.add("btn-click");
});

btn.addEventListener("mouseup", () => {
  btn.classList.remove("btn-click");
});

btn.addEventListener("click", async () => {
  await getQuote();
  qBox.classList.remove("d-none");
  btn.classList.add("r-button");
  btn.innerText = "New Quote!";
});

async function getQuoteInfo() {
  let res = await axios.get(quoteUrl);
  let randNum = Math.floor(Math.random() * 10);
  let quoteInfo = res.data.data[randNum];
  return quoteInfo;
}

async function getQuote() {
  let res = await getQuoteInfo();
  let quote = res.quoteText;
  let author = res.quoteAuthor;
  console.log(quote);
  console.log(author);
  pQuote.innerText = quote;
  pAuthor.innerText = `-${author}`;
}
