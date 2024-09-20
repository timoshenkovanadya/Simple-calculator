import { Keyboard } from './view/Keyboard/Keyboard';
import { Display } from './view/Display/Display';
import { Controller } from './controller/Controller';
import { BaseComponent } from '../shared/BaseComponent/BaseComponent';

export class App {
  private appContainer: HTMLElement;
  private parent: HTMLElement;
  private keyboard: Keyboard;
  private display: Display;
  private calculatorContainer: BaseComponent;
  private toggleButton: BaseComponent;

  constructor(parent: HTMLElement) {
    this.appContainer = document.createElement('div');
    this.appContainer.className = 'app-container-light';
    this.parent = parent;
    this.calculatorContainer = new BaseComponent({ classNames: "calculator-container", parentNode: this.appContainer})
    this.toggleButton = new BaseComponent({classNames: "toggle-button", tagName: "button", textContent: "theme toggle", parentNode: this.calculatorContainer.getElement()})
    this.toggleButton.setOnclick(this.themeToggle)
    this.display = new Display({ parentNode: this.calculatorContainer.getElement() });
    this.keyboard = new Keyboard({ parentNode: this.calculatorContainer.getElement() });
    new Controller(this.display, this.keyboard);
  }

  themeToggle = () => {
if(this.appContainer.className === 'app-container-light') {
  this.appContainer.classList.add("app-container-dark")
}
else {this.appContainer.classList.remove("app-container-dark")}
  }
  start = () => {
    this.parent.append(this.appContainer);
  };
}
