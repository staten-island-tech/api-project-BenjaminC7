import "../styles/style.css";
import { DOM } from "./dom";

function createClassButtons() {
  const link = `https://www.dnd5eapi.co/api/classes`;
  async function getData(URL) {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
    getData(link);
    data.forEach((role) => {
      DOM.classBtns.insertAdjacentHTML(
        "afterbegin",
        `<button id=${role.name}Btn" class="btn">${role.name}</button>`
      );
    });
  }
}
createClassButtons();
function insertClassDescription(role) {
  const URL = `https://www.dnd5eapi.co/api/classes/${role}`;
  async function getData(URL) {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data.name);
    } catch (error) {
      console.log(error);
    }
  }
  getData(URL);
}
//DOM.barbarianBtn.addEventListener("click", function () {
//insertClassDescription("barbarian");
//});
