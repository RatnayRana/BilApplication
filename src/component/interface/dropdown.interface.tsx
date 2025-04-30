interface DropdownItem {
    label: string;
    value: string;
  }

  // Define props for our component
export default interface CustomDropdownProps {
    data: DropdownItem[];
    placeholder?: string;
    labelField?: string;
    valueField?: string;
    onChange: (item: DropdownItem) => void;
    style?: object;
    containerStyle?: object;
  };
