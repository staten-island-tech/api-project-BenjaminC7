import "../styles/style.css";
import { DOM } from "./dom";

function insertClassDescription(role) {
  const URL = `https://www.dnd5eapi.co/api/classes/${role}`;
  async function getData(URL) {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      DOM.profHead.innerHTML = `${data.name} Proficiencies:`;
      DOM.equipHead.innerHTML = `${data.name} Starting Equipment:`;
      DOM.classProf.insertAdjacentHTML(
        "afterbegin",
        `<p>${data.proficiency_choices[0].desc}.</p>`
      );
      data.proficiencies.forEach((element) => {
        DOM.classProf.insertAdjacentHTML(
          "afterbegin",
          `<p>${element.name}</p>`
        );
      });
      data.starting_equipment_options.forEach((element) => {
        DOM.classEquip.insertAdjacentHTML(
          "afterbegin",
          `<p>${element.desc}</p>`
        );
      });
      data.starting_equipment.forEach((element) => {
        DOM.classEquip.insertAdjacentHTML(
          "afterbegin",
          `<p>${element.equipment.name}</p>`
        );
      });
    } catch (error) {
      console.log(error);
    }
  }
  getData(URL);
}
DOM.barbarianBtn.addEventListener("click", function () {
  DOM.classProf.innerHTML = "";
  DOM.classEquip.innerHTML = "";
  insertClassDescription("barbarian");
});
DOM.bardBtn.addEventListener("click", function () {
  DOM.classProf.innerHTML = "";
  DOM.classEquip.innerHTML = "";
  insertClassDescription("bard");
});
DOM.clericBtn.addEventListener("click", function () {
  DOM.classProf.innerHTML = "";
  DOM.classEquip.innerHTML = "";
  insertClassDescription("cleric");
});
DOM.druidBtn.addEventListener("click", function () {
  DOM.classProf.innerHTML = "";
  DOM.classEquip.innerHTML = "";
  insertClassDescription("druid");
});
DOM.fighterBtn.addEventListener("click", function () {
  DOM.classProf.innerHTML = "";
  DOM.classEquip.innerHTML = "";
  insertClassDescription("fighter");
});
DOM.monkBtn.addEventListener("click", function () {
  DOM.classProf.innerHTML = "";
  DOM.classEquip.innerHTML = "";
  insertClassDescription("monk");
});
DOM.paladinBtn.addEventListener("click", function () {
  DOM.classProf.innerHTML = "";
  DOM.classEquip.innerHTML = "";
  insertClassDescription("paladin");
});
DOM.rangerBtn.addEventListener("click", function () {
  DOM.classProf.innerHTML = "";
  DOM.classEquip.innerHTML = "";
  insertClassDescription("ranger");
});
DOM.rougeBtn.addEventListener("click", function () {
  DOM.classProf.innerHTML = "";
  DOM.classEquip.innerHTML = "";
  insertClassDescription("rouge");
});
DOM.sorcererBtn.addEventListener("click", function () {
  DOM.classProf.innerHTML = "";
  DOM.classEquip.innerHTML = "";
  insertClassDescription("sorcerer");
});
DOM.warlockBtn.addEventListener("click", function () {
  DOM.classProf.innerHTML = "";
  DOM.classEquip.innerHTML = "";
  insertClassDescription("warlock");
});
DOM.wizardBtn.addEventListener("click", function () {
  DOM.classProf.innerHTML = "";
  DOM.classEquip.innerHTML = "";
  insertClassDescription("wizard");
});
insertClassDescription("barbarian");
