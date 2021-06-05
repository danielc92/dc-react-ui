// Generated with util/create-component.js
import React from "react";
import "components/Link/Link.scss";
import getClassNames from "utils/getClassNames";
import { LinkProps } from "./Link.types";

const Link = ({
  href,
  children,
  size,
  display,
  ariaDescribedBy,
  ariaLabel,
}: LinkProps) => {
  return (
    <a
      href={href}
      aria-label={ariaLabel || null}
      aria-describedby={ariaDescribedBy || null}
      data-testid="Link"
      className={getClassNames({
        "dcui-link": true,
        "dcui-link--small": size === "small",
        "dcui-link--medium": size === "medium" || !size,
        "dcui-link--large": size === "large",
        "dcui-link--block": display === "block",
      })}
    >
      {children}
    </a>
  );
};

export default Link;
