
import { SIDEBARMENU } from "../constants/AppConstants";
import routeName from "../constants/routeConstants";
import {
  AdminPanelSettings,
  Feedback,
  FoodBank,
  Home,
} from "@mui/icons-material";

const roles = localStorage.getItem("roles");
export const getMenuAccordingToRole = (role) => {
  return [
    {
    //   images: <DashboardSvg />,
      title: `${SIDEBARMENU.DASBOARD}`,
      to: routeName.DASHBOARD,
    },
    {
    //   images: <CategorySvg />,
      title: `${SIDEBARMENU.MYMENUS}`,
      to: routeName.MYMENUS,
    },
    {
    //   images: <TouristSvg />,
      title: `${SIDEBARMENU.MYORDERS}`,
      to: routeName.MYORDERS,
    },
    {
    //   images: <EventSvg />,
      title: `${SIDEBARMENU.MYSUBSCRIPTION}`,
      to: routeName.MYSUBSCRIPTION,
    },
    {
    //   images: <MangeUserSvg />,
      title: `${SIDEBARMENU.NOTIFICATION}`,
      to: routeName.NOTIFICATION,
    }
  ];
};

export const menu = getMenuAccordingToRole(roles);
