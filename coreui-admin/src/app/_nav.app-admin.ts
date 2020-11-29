import { INavData } from '@coreui/angular';

export const appAdminNavItems: INavData[] = [
  {
    title: true,
    name: 'App Settings'
  },
  {
    name: 'GEO Location',
    url: '/GEOLocation',
    icon: 'icon-settings',
    children: [
      {
        name: 'Divisions',
        url: '/geo-loc/divisions',
        icon: 'icon-map'
      },
      {
        name: 'Districts',
        url: '/geo-loc/districts',
        icon: 'icon-map'
      },
      {
        name: 'Upazilas',
        url: '/geo-loc/upazilas',
        icon: 'icon-map'
      },
      {
        name: 'Unions',
        url: '/geo-loc/unions',
        icon: 'icon-map'
      },
      {
        name: 'Mouzas',
        url: '/geo-loc/mouzas',
        icon: 'icon-map'
      }
    ]
  },
  {
    name: 'Office Setup',
    url: '/OfficeSetup',
    icon: 'icon-settings',
    children: [
      {
        name: 'Ministry',
        url: '/app-admin/ministries',
        icon: 'icon-settings'
      },
      {
        name: 'Office Levels',
        url: '/app-admin/office-levels',
        icon: 'icon-settings'
      },
      {
        name: 'Offices',
        url: '/app-admin/offices',
        icon: 'icon-settings'
      },
      {
        name: 'Office Branches',
        url: '/app-admin/office-branches',
        icon: 'icon-settings'
      },
      {
        name: 'Office Structure',
        url: '/app-admin/office-structure',
        icon: 'icon-settings'
      }
    ]
  },
  {
    name: 'App Role-Rights',
    url: '/AppRoleRights',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Rights',
        url: '/app-admin/rights',
        icon: 'icon-settings'
      },
      {
        name: 'Right Groups',
        url: '/app-admin/right-groups',
        icon: 'icon-settings'
      },
      {
        name: 'Roles',
        url: '/app-admin/roles',
        icon: 'icon-settings'
      }
    ]
  }
];

