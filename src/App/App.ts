import { Keyboard } from './view/Keyboard/Keyboard';
import { Display } from './view/Display/Display';
import { Controller } from './controller/Controller';

export class App {
  private appContainer: HTMLElement;
  private parent: HTMLElement;
  private keyboard: Keyboard;
  private display: Display;

  constructor(parent: HTMLElement) {
    this.appContainer = document.createElement('div');
    this.appContainer.className = 'app-container';
    this.parent = parent;
    this.display = new Display({ parentNode: this.appContainer });
    this.keyboard = new Keyboard({ parentNode: this.appContainer });
    new Controller(this.display, this.keyboard);
  }

  start = () => {
    this.parent.append(this.appContainer);
  };
}
