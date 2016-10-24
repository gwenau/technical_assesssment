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

  public newClient = 
        {   id: null, 
            business_name: "", 
            abn: null, 
            contact_email: "", 
            address: '', 
            suburb: '', 
            postcode: 2000, 
            country: '', 
            state: "", 
            picture: ""
        }

  constructor(@Inject('rootVar') rootVar:string) {  }

  onAddClient(){
    rootClients.push({business_name: this.newClient.business_name.value, contact_email: this.newClient.contact_email.value)
  }
}