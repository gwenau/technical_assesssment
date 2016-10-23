import {Component, View, Inject} from "angular2/core";

import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: "client-list"
})

@View({
  templateUrl: 'app/clients.html',
  directives: []
})

export class ClientListComponent {

  constructor(@Inject('rootVar') rootVar:string) {  }

  public clientListItems = rootClients

  public selectedItem = {busines_name: ""};

  onItemClicked(clientListItem){
    this.selectedItem = clientListItem;
  }

  onAddItem(newItem){
    this.clientListItems.push({busines_name: newItem.value})
    rootClients = clientListItems;
  }

  onDeleteItem(){
    this.clientListItems.splice(this.clientListItems.indexOf(this.selectedItem), 1);
  }

}