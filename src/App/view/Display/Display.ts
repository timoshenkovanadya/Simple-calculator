import {
  BaseComponent,
  BaseComponentProps,
} from '../../../shared/BaseComponent/BaseComponent';

export class Display extends BaseComponent {
  constructor(props: BaseComponentProps) {
    super({ ...props, classNames: 'display' });
  }

  clear = () => this.setTextContent('0');
  set = (string: string | number) => this.setTextContent(string.toString());
}
