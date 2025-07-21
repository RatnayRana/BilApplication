import { colors } from "../../../utils/color";

export const ERPHomeData = [
  {
    item_id: 1,
    item_name: 'Create Application',
    iconName: 'briefcase-outline',
    screen: 'LeaveApplication',
    icon: 'chevron-forward',
    skipPermissionCheck: true,
    backgroundColor: '#D6EAF8', // soft sky blue
    iconLib: 'MaterialCommunityIcons',
  },
  {
    item_id: 2,
    item_name: 'Approved Application',
    iconName: 'check-decagram',
    skipPermissionCheck: false,
    backgroundColor: '#D5F5E3', // mint green
    screen: 'CardNavigation',
    icon: 'chevron-forward',
    iconLib: 'MaterialCommunityIcons',
  },
  // {
  //   item_id: 3,
  //   item_name: 'Search Application',
  //   iconName: 'database-search',
  //   skipPermissionCheck: true,
  //   backgroundColor: '#FFEBCC', // warm peach
  //   screen: 'SearchApplication',
  //   icon: 'chevron-forward',
  //   iconLib: 'MaterialCommunityIcons',
  // },
  {
    item_id: 4,
    item_name: 'View Application',
    iconName: 'visibility',
    skipPermissionCheck: true,
    backgroundColor: '#EAD1F5', // lavender
    screen: 'ViewPersonalScreen',
    icon: 'chevron-forward',
    iconLib: 'MaterialIcons',
  },
  {
    item_id: 5,
    item_name: 'Employee Benefits',
    iconName: 'hand-holding-dollar',
    skipPermissionCheck: true,
    backgroundColor: '#D0F0F6', // light aqua
    screen: 'SalaryAdvance',
    icon: 'chevron-forward',
    iconLib: 'FontAwesome6',
  },
  // {
  //   item_id: 6,
  //   item_name: 'Claims',
  //   iconName: 'file-invoice-dollar',
  //   skipPermissionCheck: true,
  //   backgroundColor: '#FFF9C4', // soft lemon
  //   screen: 'ClaimsOverviewScreen',
  //   icon: 'chevron-forward',
  //   iconLib: 'FontAwesome6',
  // },
  // {
  //   item_id: 7,
  //   item_name: 'Notifications',
  //   iconName: 'notifications-outline',
  //   skipPermissionCheck: true,
  //   backgroundColor: '#F8BBD0', // light rose pink
  //   screen: 'NotificationScreen',
  //   icon: 'chevron-forward',
  //   iconLib: 'Ionicons',
  // },
  {
    item_id: 8,
    item_name: 'Leave Encashment',
    iconName: 'cash-outline',
    skipPermissionCheck: false,
    backgroundColor: '#FFF9C4', // soft gold
    screen: 'LeaveEncashmentCardScreen',
    icon: 'arrow-forward-circle-outline',
    iconLib: 'Ionicons',
  },
];
