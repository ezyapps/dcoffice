import { INavData } from '@coreui/angular';
export const civilSuiteNavItems: INavData[] = [
  {
    title: true,
    name: 'দেওয়ানী মামলা'
  },
  {
    name: 'নতুন মামলা',
    url: '/civil-suite/new-case',
    icon: 'icon-speech'
  },
  {
    name: 'মামলার তালিকা',
    url: '/civil-suite/caselist',
    icon: 'icon-list'
  },
  {
    name: 'পরাজিত মামলার তালিকা',
    url: '/civil-suite/lostcases',
    icon: 'icon-list'
  },
  {
    name: 'মামলা বিস্তারিত',
    url: '/civil-suite/casedetails',
    icon: 'icon-list'
  }
];

