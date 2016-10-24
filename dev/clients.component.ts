import {Component, View, Inject} from "angular2/core";

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

  public edit_client_updated = false

  onDeleteItem(){
    this.clientListItems.splice(this.clientListItems.indexOf(this.selectedItem), 1);
  }

  onEditItem(item){
    console.log(item)
    item["edit_mode"] = true
  }

  onSaveEditItem(item){
    item["edit_mode"] = false
  }

}