import {
  BaseComponent,
  BaseComponentProps,
} from '../../../shared/BaseComponent/BaseComponent';
import { BUTTONS_PARAMS } from './keyboard.constants';
import { ButtonTitle } from './keyboard.types';
import './keyboard.css';

// const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// const operators = ['+', '-', 'x', '/', '%', '+/-'];

export class Keyboard extends BaseComponent {
  public buttons: BaseComponent[];
  
  constructor(props: BaseComponentProps) {
    super({ ...props, classNames: 'buttons-container' });

    this.buttons = BUTTONS_PARAMS.map((button) => {
      const buttonElement = new BaseComponent({
        tagName: 'button',
        classNames: ['button', button.className],
        textContent: button.title,
        parentNode: this.getElement(),
      });
      return buttonElement;
    });
  }
  getButton = (title: ButtonTitle) =>
    this.buttons.find((el) => el.getTextContent() === title);
}
