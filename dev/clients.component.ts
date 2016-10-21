import {Component} from "angular2/core";

import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: "client-list",
  template: `
    <ul>
      <li *ngFor="#clientListItem of clientListItems"
      (click)="onItemClicked(clientListItem)">
      {{clientListItem.name}}</li>
    </ul>
    <input type="text" [(ngModel)]="selectedItem.name"/>
    <button (click)="onDeleteItem()">Delete item</button>
    <br />
    <input type="text" #newItem/>
    <button (click)="onAddItem(newItem)">Add item</button>
    <br/>
    <alert type="success" class="alert alert-success" role="alert">Hello world</alert>
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

  onDeleteItem(){
    this.clientListItems.splice(this.clientListItems.indexOf(this.selectedItem), 1);
  }

}