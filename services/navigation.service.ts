import { Injectable } from '@angular/core';

@Injectable()

export class NavigationService {

  constructor() {}

  public current_page = 'home';

  public goToPage(page){
    this.current_page = page
  }

}