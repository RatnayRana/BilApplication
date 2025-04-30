import CustomDialog from '../DialogBox/dialogbox';

interface successDialog {
  isSuccess: boolean;
  message?: string;
  color?: string;
  imageSource?: any;
  visible?: boolean;
  onClose: () => void;
}

const SuccessDialog = ({
  isSuccess,
  onClose,
  visible,
  message,
  color = '#0AA06E',
}: successDialog) => {
  if (!isSuccess) return null;

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <CustomDialog
      message={message}
      color={color}
      iconColor="#D32F2F"
      iconName="sticker-check-outline"
      visible={visible}
      onClose={onClose}
    />
  );
};
export default SuccessDialog;
