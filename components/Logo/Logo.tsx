import React from 'react';

import { Image, ImageProps } from '@chakra-ui/react';

const Logo = (props: ImageProps) => <Image alt="Logo" {...props} />;

Logo.defaultProps = {
  src: '/unistack.png',
};

export default Logo;
