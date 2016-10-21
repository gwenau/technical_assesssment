import {Component} from 'angular2/core';
import {ClientListComponent} from './clients.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>Work Ninja</h1>
        <client-list></client-list>
    `,
    directives: [ClientListComponent]
})
export class AppComponent {

}