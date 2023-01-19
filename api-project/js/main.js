import "../styles/style.css";
import { DOM } from "./dom";
function changeQuote(url) {
  const URL = url;
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
DOM.quoteBtn.addEventListener("click", function () {
  changeQuote();
});
getData(URL);
