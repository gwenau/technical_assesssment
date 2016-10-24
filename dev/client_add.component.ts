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

  public new_client = {"id": null, "business_name": null, "contact_email": null}
  public id = rootClients.length+1

  onAddClient(newClient){
    
    this.new_client["id"] = this.id
    this.new_client["business_name"] = newClient.name.value
    this.new_client["contact_email"] = newClient.email.value
    rootClients.push(this.new_client)
    this.new_client = {}
    this.new_client_added = false
  }
}