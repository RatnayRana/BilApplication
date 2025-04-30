import { customErrorAttributes } from '../../../component/interface/Error/customErrorAttributes';

const customErrorHandler = ({message,stausCode,statusText}: customErrorAttributes) => {
    return {
        message,
        stausCode,
        statusText,
    };
};

export default customErrorHandler;
