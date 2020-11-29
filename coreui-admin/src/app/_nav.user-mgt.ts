import { INavData } from '@coreui/angular';
export const userMgtNavItems: INavData[] = [
  {
    title: true,
    name: 'কর্মকর্তা ব্যবস্থাপনা'
  },
  {
    name: 'কর্মকর্তা তালিকা',
    url: '/users/employee-list',
    icon: 'icon-speech'
  },
  {
    name: 'কর্মকর্তা ব্যবস্থাপনা',
    url: '/civil-suite/caselist',
    icon: 'icon-list'
  }
];

