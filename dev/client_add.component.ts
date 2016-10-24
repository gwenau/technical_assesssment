import {Component, Inject} from "angular2/core";

@Component({
  selector: "add-client",
  templateUrl: 'app/client_add.html',
  directives: []
})

export class AddClientComponent {

  constructor(@Inject('rootVar') rootVar:string) { 
   }

  new_client_added = true

  public new_client = {
            id: null, 
            business_name: null, 
            abn: null, 
            contact_email: null, 
            address: null, 
            suburb: null, 
            postcode: null, 
            country: null, 
            state: null, 
            picture: null
        }
        
  public id = null

  onAddClient(newClient){
    this.id = rootClients.length+1
    this.new_client["id"] = this.id
    this.new_client["business_name"] = newClient.business_name.value
    this.new_client["abn"] = newClient.abn.value
    this.new_client["contact_email"] = newClient.contact_email.value
    this.new_client["address"] = newClient.address.value
    this.new_client["suburb"] = newClient.suburb.value
    this.new_client["postcode"] = newClient.postcode.value
    this.new_client["country"] = newClient.country.value
    this.new_client["state"] = newClient.state.value
    this.new_client["picture"] = newClient.picture.value
    rootClients.push(this.new_client)
    this.new_client = {}
    this.new_client_added = false
  }
}