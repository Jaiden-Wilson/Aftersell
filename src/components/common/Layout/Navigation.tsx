import { Box } from '@storyofams/react-ui';

import { Logo } from '~components/common/Icon/library';
import { Link } from '../Link';
import { Shape } from '../Shape';

interface NavigationProps {
  content: any;
}

export const Navigation = ({ content }: NavigationProps) => {
  return (
    <Box position="sticky" top="0" left="0" right="0" color="grey100">
      <Box maxWidth="maxWidth">
        <Link href="/" stylingProps={{ cursor: 'pointer' }}>
          <a>
            <Shape
              width={['37px', '74px']}
              height={['24px', '48px']}
              icon={<Logo />}
            />
          </a>
        </Link>
      </Box>
    </Box>
  );
};
