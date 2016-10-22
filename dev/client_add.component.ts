import {Component, View, Inject} from "angular2/core";

import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: "add-client"
})

@View({
  templateUrl: 'app/client_add.html',
  directives: []
})

export class AddClientComponent {

  constructor(@Inject('rootVar') rootVar:string) {  }

  onAddItem(newItem){
    this.clientListItems.push({name: newItem.value})
    rootClients = clientListItems;
  }

}