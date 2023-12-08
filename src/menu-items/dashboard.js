// assets
import { IconDashboard, IconNews, IconUserExclamation } from '@tabler/icons';

// constant
const icons = { IconDashboard, IconNews, IconUserExclamation };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: 'dashboard',
  title: 'Dashboard',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.IconDashboard,
      breadcrumbs: false
    },
    {
      id: 'default',
      title: 'Suspects',
      type: 'item',
      url: '/dashboard/suspects',
      icon: icons.IconUserExclamation,
      breadcrumbs: false
    },
    {
      id: 'default',
      title: 'News',
      type: 'item',
      url: '/dashboard/news',
      icon: icons.IconNews,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
