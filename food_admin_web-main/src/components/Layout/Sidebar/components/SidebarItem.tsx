import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import classNames from "classnames";

import { SidebarItemChildProps, SidebarItemProps } from "types/Sidebar";
import { Button } from "components";
import { useToggle } from "hooks";

const SidebarItem = (props: SidebarItemProps) => {
  const { isActiveSidebar, heading, children, href, start_icon, title, end_icon } = props;

  const { on, toggle } = useToggle();

  const { pathname } = useLocation();
  const stylesBasedOnSidebarState = !isActiveSidebar && "opacity-0";
  const styledBorder = "border-r-4 border-neutral text-neutral";

  return (
    <Fragment>
      {heading && (
        <h5
          className={`px-5 mt-8 mb-3 text-xs opacity-60 whitespace-nowrap text-white border-b-2 border-b-[#464649] leading-[0.1em] ${
            !isActiveSidebar && "hidden"
          }`}
        >
          <span className="bg-primary px-[10px]">{heading}</span>
        </h5>
      )}

      {children.length > 0 ? (
        <details className="pt-4 pl-5 cursor-pointer collapse">
          <summary>
            <Button
              onClick={toggle}
              StartIcon={start_icon}
              EndIcon={end_icon}
              containerClassName="mb-4 text-text_color hover:text-neutral"
              contentClassName={stylesBasedOnSidebarState as string}
              endIconClassName={`right-5 ${stylesBasedOnSidebarState} ${
                on && "rotate-90"
              }`}
            >
              {title}
            </Button>
          </summary>

          {children.map((child: SidebarItemChildProps, idx: number) => (
            <Button
              key={idx}
              href={child.href}
              component="a"
              StartIcon={child.start_icon}
              contentClassName={`${stylesBasedOnSidebarState}`}
              containerClassName={classNames("text-text_color py-4 hover:text-neutral", {
                "pl-8": isActiveSidebar,
                [styledBorder]: pathname === child.href,
              })}
            >
              {child.title}
            </Button>
          ))}
        </details>
      ) : (
        <Button
          href={href}
          component="a"
          StartIcon={start_icon}
          contentClassName={stylesBasedOnSidebarState as string}
          containerClassName={`py-4 px-5 cursor-pointer rounded-none hover:text-neutral text-text_color ${
            pathname === href && styledBorder
          }`}
        >
          {title}
        </Button>
      )}
    </Fragment>
  );
};

export default SidebarItem;
