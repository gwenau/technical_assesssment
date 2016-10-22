import {Component, View} from 'angular2/core';
import {NavigationService} from '../services/navigation.service';
import {ClientListComponent} from './clients.component';

@Component({
    selector: 'my-app'
})

@View({
    templateUrl: '/templates/landing_page.html',
    directives: [AppComponent, ClientListComponent]
    providers: [NavigationService]
})

export class AppComponent {

  // constructor(public navigationService:NavigationService) {
  // }

  // openPage(page){
  //   debugger
  //   return this.navigationService.goToPage(page);
  // }
}
