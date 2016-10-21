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

  public client = {name: "", email: "", password: ""}

}