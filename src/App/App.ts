import { Calculator } from "../Calculator/Calculator"
export class App {
  private appContainer: HTMLElement;

  private parent: HTMLElement;

  private calculator: Calculator;



  constructor(parent: HTMLElement) {
    this.appContainer = document.createElement('div');
    this.appContainer.className = 'app-container';
    this.parent = parent;
    this.calculator = new Calculator({ tagName: "div", parentNode: this.appContainer })
  }

  start = () => {
    this.parent.append(this.appContainer);
  };
}
