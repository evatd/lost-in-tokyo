/* we add custom order like we do for Lost in Tokyo
even though this is the first item, it will come 3rd on lage screens, 
and first one small screens - as this is a small screen*/
const menu = [
  {
    children: 'Lost in Tokyo',
    logo: true,
    className: 'order-3-ns w-100 w-30-ns mb3 mb0-ns',
    href: 'index.html'
  },
  {
    children: 'About',
    className: 'order-1-ns w-20',
    href: 'about.html'
  },
  {
    children: 'Tickets',
    className: 'order-2-ns w-20',
    href: 'tickets.html'
  },
  {
    children: 'Journal',
    className: 'order-4-ns w-20',
    href: 'journal.html'
  },
  {
    children: 'Contact',
    className: 'order-5-ns w-20',
    href: 'contact.html'
  }
];
