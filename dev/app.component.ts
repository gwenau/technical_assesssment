import {Component, View, Inject} from 'angular2/core';
import {ClientListComponent} from './clients.component';

@Component({
    selector: 'my-app'
})

@View({
    templateUrl: 'app/landing_page.html',
    directives: [AppComponent, ClientListComponent]
})

export class AppComponent {

  constructor(@Inject('rootVar') rootVar:string ) {  }

  public rootVar = 'home'

  showSection(section){
    this.rootVar = section
  }

}
