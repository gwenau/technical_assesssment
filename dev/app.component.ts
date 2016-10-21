import {Component, View} from 'angular2/core';
import {ClientListComponent} from './clients.component';

@Component({
    selector: 'my-app'
})

@View({
    templateUrl: '/templates/landing_page.html',
    directives: [AppComponent, ClientListComponent]
})

export class AppComponent {
  public current_page = 'home'

  goToPage(page){
    this.current_page = page
    console.log(this.current_page)
  }
}
