import "../styles/style.css";
import { DOM } from "./dom";
function changeQuote() {
  const URL = "https://api.quotable.io/random";
  async function getData(URL) {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      DOM.quote.textContent = data.content;
    } catch (error) {
      console.log(error);
    }
  }
  getData(URL);
}
changeQuote();
DOM.quoteBtn.addEventListener("click", function () {
  changeQuote();
});
getData(URL);
