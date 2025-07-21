import { ParamListBase } from '@react-navigation/native';
import { LeaveApprovalData } from '../../screen/Approval/ERP/LeaveApproval/leave.approval';
import { TravelApprovalData, TravelClaimAttributes } from '../../interface/ERP/travelApproval';
import { CreateTrainingAttributes } from '../../interface/ERP/tainingTypes';
import { SalaryAdvancelData } from '../../screen/Approval/ERP/SalaryAdvance/SalaryAdvanceApprovalScreen.';
import { LeaveCashmentData } from '../../interface/ERP/LeaveEncash/leaveEncashment';
import { LeaveEncashmentDataAttributes } from '../../screen/Approval/ERP/approval-leaveencashment/approved-leaveencash';
import { FetchClaimApprovalDataAttributes } from '../../interface/ERP/fetchclaimapprovaldata';
import { PolicyDetail } from '../../screen/ERP/Search/search';
import { settingItem } from '../../public/utility/data/setting';
interface Terms_and_ConditionAttributes{
  heading?:string
  subHeading?:string
  content?:string

}
export interface RootStackNavigatorParamsList extends ParamListBase {
  SignIn: undefined;
  Home: undefined;
  SplashScreen:undefined
  LeaveApplicationScreen: undefined;
  TravelApplicationScreen: Array<TravelApprovalData>;
  TravelApproval: undefined
  NestedViewApplication: undefined
  LeaveEncashmentApprovalScreen: undefined
  ClaimsNavigator: undefined
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
   ReviewTrainingApprovedScreen: {
    approvedData: Array<CreateTrainingAttributes>

  }
  SalaryAdvanceApprovedScreen: {
    approvedData: Array<SalaryAdvancelData>
  }
  LeaveEncashApprovedScreen: {
    approvedData: Array<LeaveEncashmentDataAttributes>

  }  
  TrainingClaimApprovedScreen:{
        approvedData: Array<FetchClaimApprovalDataAttributes>

  }
  SearchDetailedScreen:{
       approvedData: Array<PolicyDetail>
  }
  TravelClaimApprovedScreen:{
           approvedData: Array<TravelClaimAttributes>

  }
  SettingDisplayScreem:{
     
     screen:string,
     setting:Array<Terms_and_ConditionAttributes>
  
  }
  
  // NotificationScreen

  NotificationScreen: undefined
  LoanScreen: undefined
  InsuranceCalculatorScreen: undefined
  LeaveEncashmentScreen: { approvedData: Array<LeaveCashmentData> }


}
