import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }
  public loaderCounter = 0;
  get loaderState() {
    return this.loaderCounter !== 0;
  }

  public loader = {
    show: () => {
      this.loaderCounter++;
    },
    hide: () => {
      this.loaderCounter--;
    },
    reset: () => {
      setTimeout(() => { this.loaderCounter = 0; }, 0);
    }
  };

}