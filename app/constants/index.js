import {
  MdBorderAll,
  MdDashboard,
  MdHelp,
  MdPeople,
  MdReport,
  MdSettings,
  MdShoppingBag,
} from "react-icons/md";

export const NavbarLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Products",
    link: "/",
  },
  {
    name: "Shop",
    link: "/shop",
  },
  {
    name: "Cart",
    link: "/cart",
  },
];

// export const SidebarLinks = [
//   {
//     title: "Dashboard",
//     path: "/admin-dashboard",
//     icon: <MdDashboard />,
//   },
//   {
//     title: "Product",
//     path: "/admin-dashboard/product",
//     icon: <MdOutlineProductionQuantityLimits />,
//   },
//   {
//     title: "Orders",
//     path: "/admin-dashboard/orders",
//     icon: <FaBorderAll />,
//   },
//   {
//     title: "Sales",
//     path: "/admin-dashboard/sales",
//     icon: <FcSalesPerformance />,
//   },
// ];

// Footer Links
export const FooterLinks = [
  {
    name: "About Us",
    link: "/about-us",
  },
  {
    name: "Contact Us",
    link: "/contact-us",
  },
  {
    name: "FAQs",
    link: "/faq",
  },
  {
    name: "Privacy Policy",
    link: "/privacy-policy",
  },
  {
    name: "Terms/Conditions",
    link: "/terms-conditions",
  },
];

// SidebarLinks
export const SidebarLinks = [
  {
    title: "pages",

    list: [
      {
        title: "Dashboard",
        path: "/admin-dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Product",
        path: "/admin-dashboard/product",
        icon: <MdShoppingBag />,
      },
      {
        title: "Orders",
        path: "/admin-dashboard/orders",
        icon: <MdBorderAll />,
      },
      {
        title: "Reports",
        path: "/admin-dashboard/reports",
        icon: <MdReport />,
      },
      {
        title: "Teams",
        path: "/admin-dashboard/teams",
        icon: <MdPeople />,
      },
      {
        title: "Help",
        path: "/admin-dashboard/help",
        icon: <MdHelp />,
      },
      {
        title: "Settings",
        path: "/admin-dashboard/settings",
        icon: <MdSettings />,
      },
    ],
  },
];
