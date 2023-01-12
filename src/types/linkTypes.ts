import React from "react";

export type Link = {
  title: string;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  path: string;
};
