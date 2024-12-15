import { ListItem, IListItem } from "./ListItem";

export class FullList {
  private items: ListItem[] = [];

  constructor(private storageKey: string = "todoList") {}

  loadFromStorage(): void {
    const data = localStorage.getItem(this.storageKey);
    if (data) {
      this.items = JSON.parse(data).map(
        (item: IListItem) => new ListItem(item.id, item.item, item.checked)
      );
    }
  }

  saveToStorage(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.items));
  }

  addItem(item: ListItem): void {
    this.items.push(item);
    this.saveToStorage();
  }

  removeItem(id: string): void {
    this.items = this.items.filter(item => item.id !== id);
    this.saveToStorage();
  }

  clearAll(): void {
    this.items = [];
    this.saveToStorage();
  }

  getItems(): ListItem[] {
    return this.items;
  }
}
