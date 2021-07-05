import { FC } from 'react';
import { css, Flex, SystemProps } from '@storyofams/react-ui';

interface HamburgerProps extends SystemProps {
  onClick?(boolean): void;
  isOpen?: boolean;
}

export const Hamburger: FC<HamburgerProps> = ({
  onClick,
  isOpen = false,
  bg,
  ...props
}) => {
  return (
    <Flex
      display={['flex !important', 'flex !important', 'none !important']}
      variant="center"
      py={1}
      pr={1}
      mr={1}
      height="40px"
      onClick={onClick}
      as="button"
      css={css({
        span: {
          position: 'relative',
          height: '2px',
          borderRadius: '1px',
          backgroundColor: isOpen ? 'transparent' : bg,
          width: '18px',
          '&::before, &::after': {
            content: "''",
            position: 'absolute',
            left: '0',
            top: '0',
            height: '2px',
            backgroundColor: isOpen ? 'black' : bg,
            width: '18px',
            transition: 'transform 0.18s ease-in-out',
            borderRadius: '1px',
          },
          '&::before': {
            transform: isOpen ? 'rotate(45deg)' : 'translateY(-5px)',
          },
          '&::after': {
            transform: isOpen ? ' rotate(-45deg)' : 'translateY(5px)',
          },
        },
      })}
      {...props}
    >
      <span />
    </Flex>
  );
};
