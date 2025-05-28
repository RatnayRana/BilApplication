export const ERPHomeData = [
  {
    item_id: 1,
    item_name: 'Create Application',
    iconName: 'briefcase-outline',
    screen: 'LeaveApplication',
    icon: 'chevron-forward',
    skipPermissionCheck: true,
    backgroundColor: '#EDF4FF', // soft blue
    iconLib: 'MaterialCommunityIcons'
  },
  {
    item_id: 2,
    item_name: 'Approved Application',
    iconName: 'checkbox-marked-outline',
    skipPermissionCheck: false,
    backgroundColor: '#E6F5EA', // mint green
    screen: 'CardNavigation',
    icon: 'chevron-forward',
    iconLib: 'MaterialCommunityIcons'
  },
  {
    item_id: 3,
    item_name: 'Search Application',
    iconName: 'database-search-outline',
    skipPermissionCheck: true,
    backgroundColor: '#FFF5E5', // soft peach
    screen: 'SearchApplication',
    icon: 'chevron-forward',
    iconLib: 'MaterialCommunityIcons'
  },
  {
    item_id: 4,
    item_name: 'View Application',
    iconName: 'local-see',
    skipPermissionCheck: true,
    backgroundColor: '#F9F1FF', // lavender
    screen: 'ViewPersonalScreen',
    icon: 'chevron-forward',
    iconLib: 'MaterialIcons'
  },
  {
    item_id: 5, // Fixed duplicate ID
    item_name: 'Employee Benefits',
    iconName: 'money-check',
    skipPermissionCheck: true,
    backgroundColor: '#F1FAFF', // light cyan
    screen: 'SalaryAdvance',
    icon: 'chevron-forward',
    iconLib: 'FontAwesome6'
  },
   {
    item_id: 6, // Fixed duplicate ID
    item_name: 'Claims',
    iconName: 'money-bills',
    skipPermissionCheck: true,
    backgroundColor: '#F1FAFF', // light cyan
    screen: 'ClaimsOverviewScreen',
    icon: 'chevron-forward',
    iconLib: 'FontAwesome6'
  },
  {
    item_id: 7, // Fixed duplicate ID
    item_name: 'Notification',
    iconName: 'notifications',
    skipPermissionCheck: true,
    backgroundColor: '#F1FAFF', // light cyan
    screen: 'NotificationScreen',
    icon: 'chevron-forward',
    iconLib: 'Ionicons'
  },
];
