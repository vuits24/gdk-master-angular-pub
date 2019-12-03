import {GdkNavigation} from "gdk-ang-lib";


export const navigation: GdkNavigation[] = [
  {
    id: 'applications',
    title: 'Applications',
    type: 'group',
    children: [
      {
        id: 'sample',
        title: 'Trang chủ',
        type: 'item',
        icon: 'beenhere',
        url: '/home'
      },
      {
        id: 'san_pham',
        title: 'Hàng hóa',
        type: 'item',
        icon: 'beenhere',
        url: '/danh-muc-san-pham'

      }
    ]
  }
];
