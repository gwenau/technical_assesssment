import {Component, View} from "angular2/core";
import {NavigationService} from '../services/navigation.service';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: "client-list"
})

@View({
  templateUrl: '/templates/clients.html',
  directives: [NavigationService]
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