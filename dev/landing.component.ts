import {Component, View} from 'angular2/core';
import {NavigationService} from '../services/navigation.service';

@Component({
    selector: 'landing-section'
})

@View({
    templateUrl: '/templates/landing_section.html',
    directives: [AppComponent, LandingComponent]
    providers: [NavigationService]
})

export class LandingComponent {
}