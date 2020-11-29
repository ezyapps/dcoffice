import { INavData } from '@coreui/angular';
export const civilSuiteNavItems: INavData[] = [
  {
    title: true,
    name: 'দেওয়ানী মামলা'
  },
  {
    name: 'মামলা দায়ের',
    url: '/civil-suite/new-case',
    icon: 'icon-speech'
  },
  {
    name: 'মামলা তালিকা',
    url: '/civil-suite/caselist',
    icon: 'icon-list'
  }
];

