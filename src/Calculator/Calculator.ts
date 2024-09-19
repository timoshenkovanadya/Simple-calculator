import { BaseComponent, BaseComponentProps } from "../BaseComponent/BaseComponent";
import "./Calculator.css"

const buttonsArr = [{title: "AC", className: "dark"}, {title: "+/-", className: "dark"}, {title: "%", className: "dark"}, {title: "/", className: "orange"}, {title: "7", className: "light"}, {title: "8", className: "light"}, {title: "9", className: "light"}, {title: "X", className: "orange"}, {title: "4", className: "light"}, {title: "5", className: "light"}, {title: "6", className: "light"}, {title: "-", className: "orange"}, {title: "1", className: "light"}, {title: "2", className: "light"}, {title: "3", className: "light"}, {title: "+", className: "orange"}, {title: "0", className: "light"}, {title: ",", className: "light"}, {title: "=", className: "light"}];
export class Calculator extends BaseComponent{
    private display: BaseComponent;
    private buttonsContainer: BaseComponent;
    private buttons: BaseComponent[];
    constructor(props: BaseComponentProps){
        super(props);
        this.element.className="calculator-container";
        this.display = new BaseComponent({tagName: "div", classNames: "display", parentNode: this.element})
        this.buttonsContainer = new BaseComponent({tagName: "div", classNames: "buttons-container", parentNode: this.element})
        this.buttons = buttonsArr.map(button => new BaseComponent({tagName: "button", classNames: ["button", button.className], textContent: button.title, parentNode: this.buttonsContainer.getElement()}))
        
        
    }
}