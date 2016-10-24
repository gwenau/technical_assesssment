import {Component, Inject} from 'angular2/core';
import {ClientListComponent} from './clients.component';
import {AddClientComponent} from './client_add.component';

@Component({
    selector: 'my-app'
    templateUrl: 'app/landing_page.html',
    directives: [AppComponent, ClientListComponent, AddClientComponent]
})

export class AppComponent {

  constructor(@Inject('rootVar') rootVar:string ) {  }

  public rootVar = 'home'

  showSection(section){
    this.rootVar = section
  }

}
