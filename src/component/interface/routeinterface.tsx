import {ParamListBase} from '@react-navigation/native';
import {LeavedApprovedAttributes} from '../../interface/ERP/leavetypes';
// Define your param list, ensuring it extends ParamListBase
export interface RootStackNavigatorParamsList extends ParamListBase {
  SignIn: undefined;
  Home: undefined;
  LeaveApplicationScreen: undefined;
  TravelApplicationScreen: undefined;
  ApprovedScreen: LeavedApprovedAttributes;
  CardNavigation: {
    itemId: number;
    itemName: string;
    username: string;
    leave_emp_code: number;
  };
  ApprovalNavigator: {screen: 'LeaveApproval'} | undefined; //
  NestedNavigatorName:  undefined;

  ApplicationNavigator:undefined
}
