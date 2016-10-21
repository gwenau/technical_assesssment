import {Component, View} from 'angular2/core';
import {ClientListComponent} from './clients.component';

@Component({
    selector: 'my-app'
})

@View({
    templateUrl: '/templates/landing_page.html',
    directives: [ClientListComponent]
})

export class AppComponent {

  public page = ["home", "clients", "client_create", "client_edit"]
  public current_page = "home"

}