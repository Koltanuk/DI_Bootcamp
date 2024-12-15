import { FullList } from "../model/FullList";

export class ListTemplate {
  private ul: HTMLUListElement;

  constructor(ulId: string) {
    this.ul = document.getElementById(ulId) as HTMLUListElement;
  }

  renderList(fullList: FullList): void {
    this.ul.innerHTML = "";
    fullList.getItems().forEach(item => {
      const li = document.createElement("li");
      li.className = "list-item";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = item.checked;
      checkbox.addEventListener("change", () => {
        item.toggleChecked();
        fullList.saveToStorage();
      });

      const label = document.createElement("label");
      label.textContent = item.item;

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "X";
      deleteButton.addEventListener("click", () => {
        fullList.removeItem(item.id);
        this.renderList(fullList);
      });

      li.append(checkbox, label, deleteButton);
      this.ul.appendChild(li);
    });
  }
}
