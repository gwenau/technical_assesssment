import {Component} from "angular2/core";

@Component({
  selector: "client-list",
  template: `
    <ul>
      <li *ngFor="#clientListItem of clientListItems">{{clientListItem}}</li>
    </ul>
  `
})

export class ClientListComponent {
  public clientListItems = ['Matthew', 'Justin', 'Gramos'];
}