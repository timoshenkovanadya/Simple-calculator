import { Keyboard } from "./view/Keyboard/Keyboard"
export class App {
  private appContainer: HTMLElement;

  private parent: HTMLElement;

  private keyboard: Keyboard;



  constructor(parent: HTMLElement) {
    this.appContainer = document.createElement('div');
    this.appContainer.className = 'app-container';
    this.parent = parent;
    this.keyboard = new Keyboard({ parentNode: this.appContainer })
  }

  start = () => {
    this.parent.append(this.appContainer);
  };
}
