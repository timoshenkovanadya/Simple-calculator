export class App {
  public appContainer: HTMLElement;

  public parent: HTMLElement;

  constructor(parent: HTMLElement) {
    this.appContainer = document.createElement('div');
    this.appContainer.className = 'app-container';
    this.parent = parent;
  }

  start = () => {
    this.parent.append(this.appContainer);
  };
}
