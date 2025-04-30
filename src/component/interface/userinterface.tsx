export interface userInterface {
  label : string;
  value : string;
  placeholder : string;
  type : string;
  isPassword: boolean
  onChangeText : (text: string) => void; // 'onChangeText' is a function that takes a string and does something with it
  // style: React.CSSProperties; // 'style' is optional, and it could be some CSS properties
  // [key: string]: ;
}
