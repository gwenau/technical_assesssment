import {Component} from "angular2/core";

@Component({
  selector: "client-list",
  template: `
    <ul>
      <li *ngFor="#clientListItem of clientListItems"
      (click)="onItemClicked(clientListItem)">
      {{clientListItem.name}}</li>
    </ul>
    <input type="text" [(ngModel)]="selectedItem.name" #newItem>
    <button (click)="onAddItem(newItem)">Add item</button>
  `
})

export class ClientListComponent {
  public clientListItems = [
    {name: 'Matthew'}, 
    {name: 'Justin'}, 
    {name: 'Gramos'},
  ];
  public selectedItem = {name: ""};

  onItemClicked(clientListItem){
    this.selectedItem = clientListItem;
  }

  onAddItem(newItem){
    this.clientListItems.push({name: newItem.value})
  }

}