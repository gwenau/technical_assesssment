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

  constructor(@Inject('rootVar') rootVar:string) { 
   }

  new_client_added = true

  onAddClient(newClient){
    rootClients.push(newClient)
    newClient = {}
    this.new_client_added = false
  }
}