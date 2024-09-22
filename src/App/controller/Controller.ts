import { Display } from '../view/Display/Display';
import { Keyboard } from '../view/Keyboard/Keyboard';
import { BUTTONS_PARAMS } from '../view/Keyboard/keyboard.constants';
import { makeOperation } from './controller.helpers';
import {
  NumberOperationType,
  OperatorOperationType,
  SymbolType,
} from './controller.types';

export class Controller {
  private display: Display;
  private keyboard: Keyboard;
  private prev: string;
  private current: string;
  private operation: SymbolType | null;

  constructor(display: Display, keyboard: Keyboard) {
    this.display = display;
    this.keyboard = keyboard;
    this.prev = '';
    this.current = '0';
    this.operation = null;
    this.showOnDisplay();

    this.keyboard.buttons.forEach((button, index) => {
      const buttonParam = BUTTONS_PARAMS[index];
      switch (buttonParam.type) {
        case 'number':
          button.setOnclick(this.numberHandler(buttonParam));
          break;
        case 'operator':
          button.setOnclick(this.operationHandler(buttonParam));
          break;
        case 'comma':
          button.setOnclick(this.commaHandler);
          break;
        case 'equal':
          button.setOnclick(this.equalHandler);
          break;
        case 'clear':
          button.setOnclick(this.clearHandler);
          break;
        case 'sign':
          button.setOnclick(this.changeSignHandler);
          break;
        case 'percent':
          button.setOnclick(this.percentHandler);
          break;
      }
    });
  }

  showOnDisplay = (value?: string | number) =>
    this.display.set(value ?? this.current);

  numberHandler =
    ({ title }: NumberOperationType) =>
    () => {
      if (!this.operation || this.prev) {
        this.current = this.current === '0' ? title : this.current + title;
      } else {
        this.prev = this.current;
        this.current = title;
      }
      this.showOnDisplay();
    };

  operationHandler =
    ({ title }: OperatorOperationType) =>
    () => {
      if (this.prev && this.current) {
        this.current = makeOperation(
          this.operation || title,
          this.prev,
          this.current,
        );
        this.prev = '';
        this.showOnDisplay();
      }
      this.operation = title;
    };

  commaHandler = () => {
    if (this.current.includes('.')) return;
    this.current += '.';
    this.showOnDisplay();
  };

  equalHandler = () => {
    if (this.prev && this.current) {
      this.current = makeOperation(this.operation, this.prev, this.current);
      this.prev = '';
      this.operation = null;
      this.showOnDisplay();
    }
  };

  clearHandler = () => {
    this.prev = '';
    this.current = '0';
    this.operation = null;
    this.showOnDisplay();
  };
  changeSignHandler = () => {
    this.current = (+this.current * -1).toString();
    this.showOnDisplay();
  };

  percentHandler = () => {
    if (!this.prev) {
      this.current = (+this.current / 100).toString();
    } else {
      this.current = ((+this.prev / 100) * +this.current).toString();
    }
    this.showOnDisplay();
  };
}
