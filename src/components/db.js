export const db = [
  {
    id: 1,
    title: "General",
    icon: "bi-gear-fill",
    isOpen: 1,
    childrens: [
      {
        id: 2,
        title: "Home",
        path: "/",
      },
      {
        id: 3,
        title: "About",
        path: "/about",
      },
      {
        id: 4,
        title: "Contact",
        isOpen: 1,
        childrens: [
          {
            id: 5,
            title: "Facebook",
            path: "/facebook",
          },
          {
            id: 6,
            title: "Twitter",
            path: "/twitter",
          },
          {
            id: 7,
            title: "Instagram",
            path: "/instagram",
          },
        ],
      },
      {
        id: 8,
        title: "FAQ",
        path: "/faqs",
      },
    ],
  },
  {
    id: 9,
    title: "Account",
    icon: "bi-info-circle-fill",
    childrens: [
      {
        id: 10,
        title: "Login",
        path: "/login",
      },
      {
        id: 11,
        title: "Register",
        path: "/register",
      },
      {
        id: 12,
        title: "Forgot Password",
        path: "/forgot-password",
      },
      {
        id: 13,
        title: "Reset Password",
        path: "/reset-password",
      },
    ],
  },
  {
    id: 14,
    title: "Profile",
    icon: "bi-person-fill",
    childrens: [
      {
        id: 15,
        title: "Profile",
        path: "/profile",
      },
      {
        id: 16,
        title: "Settings",
        childrens: [
          {
            id: 17,
            title: "Account",
            path: "/settings/account",
          },
          {
            id: 18,
            title: "Billing",
            childrens: [
              {
                id: 19,
                title: "Payment",
                path: "/settings/billing/payment",
              },
              {
                id: 20,
                title: "Subscription",
                path: "/settings/billing/subscription",
              },
            ],
          },
          {
            id: 21,
            title: "Notifications",
            path: "/settings/notifications",
          },
        ],
      },
      {
        id: 22,
        title: "Logout",
        path: "/logout",
      },
    ],
  },
  {
    id: 23,
    title: "Advance",
    icon: "bi-view-list",
    childrens: [
      {
        id: 24,
        title: "Search",
        path: "/search",
      },
      {
        id: 25,
        title: "History",
        path: "/history",
      },
    ],
  },
  {
    id: 26,
    title: "Support",
    icon: "bi-question-circle-fill",
    path: "/support",
  },
  {
    id: 27,
    title: "Report Bug",
    icon: "bi-bug",
    path: "/report-bug",
  },
];
