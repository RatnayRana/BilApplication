import { ParamListBase } from '@react-navigation/native';
import { LeaveApprovalData } from '../../screen/Approval/ERP/LeaveApproval/leave.approval';
import { TravelApprovalData } from '../../interface/ERP/travelApproval';
import { CreateTrainingAttributes } from '../../interface/ERP/tainingTypes';
// import {LeavedApprovedAttributes} from '../../interface/ERP/leavetypes';
// Define your param list, ensuring it extends ParamListBase
export interface RootStackNavigatorParamsList extends ParamListBase {
  SignIn: undefined;
  Home: undefined;
  LeaveApplicationScreen: undefined;
  TravelApplicationScreen: Array<TravelApprovalData>;
  
  TravelApproval: undefined
  NestedViewApplication: undefined
  ViewPersonalScreen: undefined
  // ApprovedScreen: LeavedApprovedAttributes;
  CardNavigation: {
    itemId: number;
    itemName: string;
    username: string;
    leave_emp_code: number;
  };
  ApprovalNavigator: { screen: 'LeaveApproval' } | { screen: 'TravelApproval' } | undefined; //
  NestedNavigatorName: undefined;


  ApplicationNavigator: undefined;
  HomeNavigator: {
    screen?: string
  };
  SearchApplication: undefined
  ApprovedScreen: {
    approvedData: Array<LeaveApprovalData>

  }
  TravelApprovedScreen: {
    approvedData: Array<TravelApprovalData>

  }
  TrainingApprovedScreen: {
    approvedData: Array<CreateTrainingAttributes>

  }
}
