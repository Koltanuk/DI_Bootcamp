export interface IListItem {
    id: string;
    item: string;
    checked: boolean;
  }
  
export class ListItem implements IListItem {
    constructor(
      public id: string,
      public item: string,
      public checked: boolean = false
    ) {}
  
    toggleChecked(): void {
      this.checked = !this.checked;
    }
}
  