import { SVGIconBaseprops } from "assets/icons/SVGIconBase";

interface SidebarProps {
  handleToggleSidebar: () => void;
  isActiveSidebar: boolean;
}

interface SidebarItemProps {
  start_icon: (props: SVGIconBaseprops) => JSX.Element;
  end_icon: ((props: SVGIconBaseprops) => JSX.Element) | undefined;
  title: string;
  isActiveSidebar: boolean;
  href: string | undefined;
  heading: string | undefined;
  children: Array<SidebarItemChildProps>;
}

type SidebarItemChildProps = Pick<SidebarItemProps, "start_icon" | "title" | "href">;

export type { SidebarProps, SidebarItemProps, SidebarItemChildProps };
