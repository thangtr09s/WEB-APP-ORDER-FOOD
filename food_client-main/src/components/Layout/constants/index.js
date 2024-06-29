import ChevronBackIcon from "../../../assets/Icons/ChevronBackIcon";
import routes from "../../../configs/routes";

export const NAV_ITEM = [
  {
    title: "Thực phẩm ăn liền",
    href: routes.list_product.replace(':name', "thuc-pham-an-lien"),
    icon: ChevronBackIcon,
  },
  {
    title: "Đồ ăn vặt",
    href: routes.list_product.replace(':name', "do-an-vat"),
    icon: ChevronBackIcon,
  },
  {
    title: "Thực phẩm sức khỏe",
    href: routes.list_product.replace(':name', "thuc-pham-suc-khoe"),
    icon: ChevronBackIcon,
  },
  {
    title: "Đồ dung cần thiết",
    href: routes.list_product.replace(':name', "do-dung-can-thiet"),
    icon: ChevronBackIcon,
  },
  {
    title: "LIÊN HỆ",
    href: routes.contact,
  },
];
