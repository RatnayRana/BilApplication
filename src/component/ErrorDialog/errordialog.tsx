import CustomDialog from "../DialogBox/dialogbox";

interface errorDialog {
  error : any;
  errormessage?: string;
  color?: string;
  imageSource?: any;
  visible?: boolean;
  onClose: () => void;
}

const ErrorDialog = ({
    error,
    onClose,
    visible,
    errormessage,
    color='#D32F2F',
}:errorDialog) =>{
    if(!error) return null
    return(
        <CustomDialog
        message={errormessage}
        color={color}
        iconColor="#D32F2F"
        iconName="sticker-remove-outline"
        visible={visible}
        onClose={onClose}
      />
    )
};
export default ErrorDialog;