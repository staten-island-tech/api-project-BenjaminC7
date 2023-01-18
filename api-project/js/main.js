import "../styles/style.css";
import { DOM } from "./dom";
function changeQuote() {
  const URL = "https://swapi.dev/api/people/1/";
  async function getData(URL) {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      DOM.quote.textContent = data.homeworld;
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
