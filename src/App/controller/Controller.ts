import { Display } from '../view/Display/Display';
import { Keyboard } from '../view/Keyboard/Keyboard';
import { BUTTONS_PARAMS } from '../view/Keyboard/keyboard.constants';
import {
  ClearOperationType,
  CommaOperationType,
  EqualOperationType,
  NumberOperationType,
  OperationType,
  OperatorOperationType,
} from './controller.types';

export class Controller {
  private display: Display;
  private keyboard: Keyboard;
  private prev: string;
  private current: string;
  private operation: OperationType | null;

  constructor(display: Display, keyboard: Keyboard) {
    this.display = display;
    this.keyboard = keyboard;
    this.prev = '';
    this.current = '';
    this.operation = null;

    this.keyboard.buttons.forEach((button, index) => {
      const buttonParam = BUTTONS_PARAMS[index];
      if (buttonParam.type === 'number') {
        button.setOnclick(this.numberHandler(buttonParam));
      }
      if (buttonParam.type === 'operator') {
        button.setOnclick(() => {
          this.operationHandler(buttonParam);
        });
      }
      if (buttonParam.type === 'comma') {
        button.setOnclick(() => {
          this.commaHandler();
        });
      }
      if (buttonParam.type === 'equal') {
        button.setOnclick(() => {
          this.equalHandler();
        });
      }
      if (buttonParam.type === 'clear') {
        button.setOnclick(() => {
          this.clearHandler();
        });
      }

    });
  }

  numberHandler = (buttonParam: NumberOperationType) => () => {
    this.current += buttonParam.title;
    this.display.set(this.current)
  };
  operationHandler = (buttonParam: OperatorOperationType) => {

  };
  commaHandler = () => {
    this.keyboard.getButton(",")?.setAttribute({name: "disabled", value: "true"})
    this.current += ","
    this.display.set(this.current)
  };
  equalHandler = () => {
    this.display.set(this.current)
  };
  clearHandler = () => {
    this.prev = '';
    this.current = '';
    this.operation = null;
    this.display.set('0');
    this.keyboard.getButton(",")?.removeAttribute({name: "disabled"})
  };
}
