declare module 'react-native-creditcard' {

  export type FormStatus =
  'incomplete'
  | 'invalid'
  | 'valid'

  export type CardType =
    | null
    | 'visa'
    | 'master-card'
    | 'american-express'
    | 'diners-club'
    | 'discover'
    | 'jcb'
    | 'unionpay'
    | 'maestro'

  export interface ICardData {
    number: string
    expiry: string
    cvc?: string
    type: CardType
    name?: string
    postalCode?: string
  }

  export interface IFormDataStatus {
    number: FormStatus
    expiry: FormStatus
    cvc?: FormStatus
    name?: FormStatus
    postalCode?: FormStatus
  }

  export interface IFormData {
    valid: boolean
    values: ICardData
    status: IFormDataStatus
  }

  export interface IInputPlaceholders {
    name: string
    number: string
    expiry: string
    cvc: string
    postalCode: string
  }

  export interface ICreditCardInputs {
    autoFocus?: boolean
    onChange: (formData: IFormData) => void
    onFocus?: (name: string) => void
    labels?: IInputPlaceholders
    placeholders?: IInputPlaceholders
    labelStyle?: object
    inputStyle?: object
    inputContainerStyle?: object
    validColor?: string
    invalidColor?: string
    placeholderColor?: string
    requiresName?: boolean
    requiresCVC?: boolean
    requiresPostalCode?: boolean
    validatePostalCode?: () => boolean
    allowScroll?: boolean
    additionalInputsProps?: object
  }

  export class CreditCardInput extends React.Component<ICreditCardInputs> {}

}
