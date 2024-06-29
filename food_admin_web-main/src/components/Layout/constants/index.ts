import { ArrowRightIcon, HomeIcon, PersonIcon } from "assets/icons";
import CartIcon from "assets/icons/CartIcon";
import FoodIcon from "assets/icons/FoodIcon";
import RestaurantIcon from "assets/icons/RestaurantIcon";
import { routes } from "configs";

export const SIDEBAR_ITEMS = [
  {
    heading: "",
    start_icon: HomeIcon,
    end_icon: undefined,
    title: "Dashboard",
    href: routes.dashBoard,
    children: [],
  },

  {
    heading: "BÁN HÀNG",
    start_icon: FoodIcon,
    end_icon: undefined,
    title: "Sản phẩm",
    href: routes.product,
    children: [],
  },


  {
    heading: "",
    start_icon: CartIcon,
    end_icon: undefined,
    title: "Đơn hàng",
    href: routes.orderManagement,
    children: [],
  },

  {
    heading: "NGƯỜI DÙNG",
    start_icon: PersonIcon,
    end_icon: undefined,
    title: "Quản lí người dùng",
    href: routes.userManagement,
    children: [],
  },
];
