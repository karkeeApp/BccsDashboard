import {
  // HomeOutlined,
  FlagOutlined,
  PayCircleOutlined,
  UsergroupAddOutlined,
  SketchOutlined,
  UnorderedListOutlined,
  PicLeftOutlined,
  StarOutlined,
} from '@ant-design/icons';

// Configs
import { APP_PREFIX_PATH } from '@/configs/app';

// Types
import { NavMenu } from '@/types/nav';

const navigationConfig: NavMenu[] = [
  {
    key: 'app',
    path: APP_PREFIX_PATH,
    name: 'Dashboard',
    title: 'Dashboard',
    breadcrumb: false,
    submenu: [
      {
        key: 'ads',
        path: `${APP_PREFIX_PATH}/ads`,
        name: 'Ads',
        title: 'Ads',
        icon: FlagOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'ads-list',
            path: `${APP_PREFIX_PATH}/ads/list`,
            name: 'List',
            title: 'Ads List',
            breadcrumb: true,
            submenu: [],
          },
          {
            key: 'ads-add',
            path: `${APP_PREFIX_PATH}/ads/add`,
            name: 'Add',
            title: 'Add Ads',
            breadcrumb: false,
            submenu: [],
          },
        ],
      },
      {
        key: 'payments',
        path: `${APP_PREFIX_PATH}/payments`,
        name: 'Payment',
        title: 'Payment',
        icon: PayCircleOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'payments-list',
            path: `${APP_PREFIX_PATH}/payments/list`,
            name: 'List',
            title: 'Payment List',
            breadcrumb: true,
            submenu: [],
          },
          {
            key: 'payments-add',
            path: `${APP_PREFIX_PATH}/payments/add`,
            name: 'Add',
            title: 'Add Payment',
            breadcrumb: false,
            submenu: [],
          },
        ],
      },
      // {
      //   key: 'clubs',
      //   path: `${APP_PREFIX_PATH}/clubs`,
      //   name: 'Clubs',
      //   title: 'Clubs',
      //   icon: UsergroupAddOutlined,
      //   breadcrumb: true,
      //   submenu: [
      //     {
      //       key: 'clubs-list',
      //       path: `${APP_PREFIX_PATH}/clubs/list`,
      //       name: 'List',
      //       title: 'Club List',
      //       breadcrumb: true,
      //       submenu: [],
      //     },
      //     {
      //       key: 'clubs-add',
      //       path: `${APP_PREFIX_PATH}/clubs/add`,
      //       name: 'Add',
      //       title: 'Add Club',
      //       breadcrumb: false,
      //       submenu: [],
      //     },
      //   ],
      // },
      {
        key: 'admins',
        path: `${APP_PREFIX_PATH}/admins`,
        name: 'Admins',
        title: 'Admins',
        icon: UsergroupAddOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'admins-list',
            path: `${APP_PREFIX_PATH}/admins/list`,
            name: 'List',
            title: 'Admin List',
            breadcrumb: true,
            submenu: [],
          },
          {
            key: 'admins-add',
            path: `${APP_PREFIX_PATH}/admins/add`,
            name: 'Add',
            title: 'Add Admin',
            breadcrumb: false,
            submenu: [],
          },
        ],
      },
      {
        key: 'members',
        path: `${APP_PREFIX_PATH}/members`,
        name: 'Members',
        title: 'Members',
        icon: UsergroupAddOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'members-list',
            path: `${APP_PREFIX_PATH}/members/list`,
            name: 'List',
            title: 'Member List',
            breadcrumb: true,
            submenu: [],
          },
          {
            key: 'members-add',
            path: `${APP_PREFIX_PATH}/members/add`,
            name: 'Add',
            title: 'Add Member',
            breadcrumb: false,
            submenu: [],
          },
        ],
      },
      // {
      //   key: 'vendors',
      //   path: `${APP_PREFIX_PATH}/vendors`,
      //   name: 'Vendors',
      //   title: 'Vendors',
      //   icon: UsergroupAddOutlined,
      //   breadcrumb: true,
      //   submenu: [
      //     {
      //       key: 'vendors-list',
      //       path: `${APP_PREFIX_PATH}/vendors/list`,
      //       name: 'List',
      //       title: 'Vendor List',
      //       breadcrumb: true,
      //       submenu: [],
      //     },
      //     {
      //       key: 'vendors-add',
      //       path: `${APP_PREFIX_PATH}/vendors/add`,
      //       name: 'Add',
      //       title: 'Add Vendor',
      //       breadcrumb: false,
      //       submenu: [],
      //     },
      //   ],
      // },
      {
        key: 'sponsors',
        path: `${APP_PREFIX_PATH}/sponsors`,
        name: 'Sponsors',
        title: 'Sponsors',
        icon: SketchOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'sponsors-list',
            path: `${APP_PREFIX_PATH}/sponsors/list`,
            name: 'List',
            title: 'Sponsor List',
            breadcrumb: true,
            submenu: [],
          },
        ],
      },
      // {
      //   key: 'listings',
      //   path: `${APP_PREFIX_PATH}/listings`,
      //   name: 'Listings',
      //   title: 'Listings',
      //   icon: UnorderedListOutlined,
      //   breadcrumb: true,
      //   submenu: [
      //     {
      //       key: 'listings-list',
      //       path: `${APP_PREFIX_PATH}/listings/list`,
      //       name: 'List',
      //       title: 'Listing List',
      //       breadcrumb: true,
      //       submenu: [],
      //     },
      //     {
      //       key: 'listings-add',
      //       path: `${APP_PREFIX_PATH}/listings/add`,
      //       name: 'Add',
      //       title: 'Add Listing',
      //       breadcrumb: false,
      //       submenu: [],
      //     },
      //   ],
      // },
      {
        key: 'news',
        path: `${APP_PREFIX_PATH}/news`,
        name: 'News',
        title: 'News',
        icon: PicLeftOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'news-list',
            path: `${APP_PREFIX_PATH}/news/list`,
            name: 'List',
            title: 'News List',
            breadcrumb: true,
            submenu: [],
          },
          {
            key: 'news-add',
            path: `${APP_PREFIX_PATH}/news/add`,
            name: 'Add',
            title: 'Add News',
            breadcrumb: false,
            submenu: [],
          },
        ],
      },
      {
        key: 'events',
        path: `${APP_PREFIX_PATH}/events`,
        name: 'Events',
        title: 'Events',
        icon: PicLeftOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'events-list',
            path: `${APP_PREFIX_PATH}/events/list`,
            name: 'List',
            title: 'Event List',
            breadcrumb: true,
            submenu: [],
          },
          {
            key: 'events-add',
            path: `${APP_PREFIX_PATH}/events/add`,
            name: 'Add',
            title: 'Add Event',
            breadcrumb: false,
            submenu: [],
          },
        ],
      },
      {
        key: 'banners',
        path: `${APP_PREFIX_PATH}/banners`,
        name: 'Banners',
        title: 'Banners',
        icon: StarOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'banners-list',
            path: `${APP_PREFIX_PATH}/banners/list`,
            name: 'List',
            title: 'Banner List',
            breadcrumb: true,
            submenu: [],
          },
          {
            key: 'banners-add',
            path: `${APP_PREFIX_PATH}/banners/add`,
            name: 'Add',
            title: 'Add Banner',
            breadcrumb: false,
            submenu: [],
          },
        ],
      },
    ],
  },
];

export default navigationConfig;
