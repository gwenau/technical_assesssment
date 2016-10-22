import {Component, View, Inject} from "angular2/core";

import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: "client-list"
})

@View({
  templateUrl: '/templates/clients.html',
  directives: []
})

export class ClientListComponent {

  constructor(@Inject('rootVar') rootVar:string ) {  }

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