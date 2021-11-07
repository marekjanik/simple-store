import { uuid } from '../utils';

export type MenuItem = {
 title: string;
 url: string;
 id: string;
};

export const menu_data: MenuItem[] = [
 { title: 'Collection', url: '/', id: uuid() },
 { title: 'Delivery', url: '/', id: uuid() },
 { title: 'About Us', url: '/', id: uuid() }
];
