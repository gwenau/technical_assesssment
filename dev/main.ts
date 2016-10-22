///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
import {bootstrap} from 'angular2/platform/browser';
import {NavigationService} from '../services/navigation.service';
import {AppComponent} from "./app.component";

bootstrap(AppComponent, [NavigationService]);