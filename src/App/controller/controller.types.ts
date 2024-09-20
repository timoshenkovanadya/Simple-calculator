import { BUTTONS_PARAMS } from '../view/Keyboard/keyboard.constants';

type ButtonsParamsType = (typeof BUTTONS_PARAMS)[number];

export type ButtonTitle = ButtonsParamsType['title'];
export type OperationType = ButtonsParamsType['type'];
export type NumberOperationType = Extract<ButtonsParamsType, { type: 'number' }>;
export type OperatorOperationType = Extract<ButtonsParamsType, { type: 'operator' }>;
export type CommaOperationType = Extract<ButtonsParamsType, { type: 'comma' }>;
export type ClearOperationType = Extract<ButtonsParamsType, { type: 'clear' }>;
export type EqualOperationType = Extract<ButtonsParamsType, { type: 'equal' }>;
export type SymbolType = OperatorOperationType['title'];

