import {Component, View} from 'angular2/core';
import {NavigationService} from '../services/navigation.service';
import {LandingComponent} from './landing.component';
import {ClientListComponent} from './clients.component';

@Component({
    selector: 'my-app'
})

@View({
    templateUrl: '/templates/overview.html',
    directives: [AppComponent, LandingComponent, ClientListComponent]
    providers: [NavigationService]
})

export class AppComponent {
}
