import React from "react";
import Image, { ImageProps } from "next/image";

export const Logo = (props: ImageProps) => <Image alt="Logo" {...props} />;

Logo.defaultProps = {
  src: "/unistack.png",
};
