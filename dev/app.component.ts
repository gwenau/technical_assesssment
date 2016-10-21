import {Component} from 'angular2/core';
import {ClientListComponent} from './clients.component';

// import ng2-bootstrap alerts module
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

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