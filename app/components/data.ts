import { generateRandomId } from "@/utils/utils";
import WindowIcon from "@/components/icons/WindowIcon";
import ShoppingCartIcon from "@/components/icons/ShoppingCart";
import SpoonIcon from "@/components/icons/SpoonIcon";
import LayoutIcon from "@/components/icons/LayoutIcon";
import PeopleIcon from "@/components/icons/PeopleIcon";
import PeopleGroupIcon from "@/components/icons/PeopleGroupIcon";
import AnalyticsIcon from "@/components/icons/AnalyticsIcon";
import SettingIcon from "@/components/icons/SettingIcon";

export const ownerSeiderBarData = [
  {
    id: generateRandomId(),
    label: "Dashboard",
    icon: WindowIcon,
    url: "/dashboard",
  },
  {
    id: generateRandomId(),
    label: "Order",
    icon: ShoppingCartIcon,
    url: "/order",
  },
  {
    id: generateRandomId(),
    label: "Menu Management",
    icon: SpoonIcon,
    url: "/menu",
  },
  {
    id: generateRandomId(),
    label: "Restaurant layout",
    icon: LayoutIcon,
    url: "/layout",
  },
  {
    id: generateRandomId(),
    label: "User Management",
    icon: PeopleIcon,
    url: "/user",
  },
  {
    id: generateRandomId(),
    label: "Staff Management",
    icon: PeopleGroupIcon,
    url: "/staff",
  },
  {
    id: generateRandomId(),
    label: "Analytics & Reports",
    icon: AnalyticsIcon,
    url: "/analytics",
  },
  {
    id: generateRandomId(),
    label: "Settings",
    icon: SettingIcon,
    url: "/settings",
  },
];
