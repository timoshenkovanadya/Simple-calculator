import {
  BaseComponent,
  BaseComponentProps,
} from '../BaseComponent/BaseComponent';
import './Calculator.css';

const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const operators = ['+', '-', 'x', '/', '%', '+/-'];

const buttonsArr = [
  { title: 'AC', className: 'dark' },
  { title: '+/-', className: 'dark' },
  { title: '%', className: 'dark' },
  { title: '/', className: 'orange' },
  { title: '7', className: 'light' },
  { title: '8', className: 'light' },
  { title: '9', className: 'light' },
  { title: 'X', className: 'orange' },
  { title: '4', className: 'light' },
  { title: '5', className: 'light' },
  { title: '6', className: 'light' },
  { title: '-', className: 'orange' },
  { title: '1', className: 'light' },
  { title: '2', className: 'light' },
  { title: '3', className: 'light' },
  { title: '+', className: 'orange' },
  { title: '0', className: 'btn-zero' },
  { title: ',', className: 'light' },
  { title: '=', className: 'orange' },
];
export class Calculator extends BaseComponent {
  private display: BaseComponent;
  private buttonsContainer: BaseComponent;
  private buttons: BaseComponent[];
  private firstNum: string | number;
  private secondNum: string | number;
  private operator: string;
  private finish: boolean;
  private button: BaseComponent;
  constructor(props: BaseComponentProps) {
    super(props);
    this.firstNum = '';
    this.secondNum = '';
    this.operator = '';
    this.finish = false;
    this.element.className = 'calculator-container';
    this.display = new BaseComponent({
      tagName: 'div',
      classNames: 'display',
      parentNode: this.element,
    });
    this.buttonsContainer = new BaseComponent({
      tagName: 'div',
      classNames: 'buttons-container',
      parentNode: this.element,
    });
    this.buttons = buttonsArr.map(
      (button) =>
        this.button = new BaseComponent({
          tagName: 'button',
          classNames: ['button', button.className],
          textContent: button.title,
          parentNode: this.buttonsContainer.getElement(),
        }),
    );

    this.button.getElement().addEventListener('click', (event: MouseEvent)=> {console.log(event)})
    
  }

  handleAC = () => {
    this.firstNum = '';
    this.secondNum = '';
    this.operator = '';
    this.finish = false;
    this.display.setTextContent('0');
  };
  handleSum = () => {
    this.firstNum = +this.firstNum + +this.secondNum;
  };
  handleSubtraction = () => {
    this.firstNum = +this.firstNum - +this.secondNum;
  };
  handleMult = () => {
    this.firstNum = +this.firstNum * +this.secondNum;
  };
  handleDivision = () => {
    this.firstNum = +this.firstNum / +this.secondNum;
  };
  handleChangeSign = () => {
    this.firstNum = +this.firstNum * -1;
  };

//   handleButtonsClick = (e: Event) => {
//     if (!e.target.)
//   }
}
