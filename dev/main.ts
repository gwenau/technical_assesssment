///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {AppComponent} from "./app.component";

export function main(rootVar) {
  bootstrap(AppComponent, [
    provide('rootVar', { useValue: rootVar })
  ]);
}