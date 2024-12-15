import { FullList } from "./model/FullList";
import { ListItem } from "./model/ListItem";
import { ListTemplate } from "./templates/ListTemplate";
import { v4 as uuidv4 } from "uuid";

const fullList = new FullList();
const listTemplate = new ListTemplate("listItems");


document.addEventListener("DOMContentLoaded", () => {
  fullList.loadFromStorage();
  listTemplate.renderList(fullList);

  const form = document.getElementById("itemEntryForm") as HTMLFormElement;
  const newItemInput = document.getElementById("newItem") as HTMLInputElement;

  form.addEventListener("submit", e => {
    e.preventDefault();
    const newItem = newItemInput.value.trim();
    if (newItem) {
      fullList.addItem(new ListItem(uuidv4(), newItem));
      listTemplate.renderList(fullList);
      newItemInput.value = "";
    }
  });

  const clearButton = document.getElementById("clearItemsButton") as HTMLButtonElement;
  clearButton.addEventListener("click", () => {
    fullList.clearAll();
    listTemplate.renderList(fullList);
  });
});
