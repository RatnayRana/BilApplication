export const ERPHomeData = [
  {
    item_id: 1,
    item_name: 'Leave Application',
    iconName: 'briefcase-outline',
    screen: 'LeaveApplication',
    icon: 'chevron-forward',
    skipPermissionCheck: true,

    iconLib: 'MaterialCommunityIcons'
  },
  {
    item_id: 2,
    item_name: 'Approved Application',
    iconName: 'checkbox-marked-outline',
    skipPermissionCheck: false,
    screen: 'CardNavigation',
    icon: 'chevron-forward',
    iconLib: 'MaterialCommunityIcons'

  },
  {
    item_id: 3,
    item_name: 'Search Application',
    iconName: 'database-search-outline',
    skipPermissionCheck: true,

    screen: 'SearchApplication',
    icon: 'chevron-forward',
    iconLib: 'MaterialCommunityIcons'

  },

];
