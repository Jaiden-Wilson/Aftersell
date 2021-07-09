import { useState } from 'react';
import { css, Box, Flex, Icon, Text } from '@storyofams/react-ui';
import '@reach/menu-button/styles.css';
import withLoadingProps from 'next-dynamic-loading-props';
import dynamic from 'next/dynamic';
import { useWindowSize } from 'react-use';
import styled from 'styled-components';
import { getLinkProps } from '~lib';
import { ChevronDown } from '~components/common/Icon/library';

import { NavLink } from '../NavLink';
import type { DesktopDropdown as DesktopDropdownType } from './DesktopDropdown';

const DesktopDropdown = withLoadingProps((useLoadingProps) =>
  dynamic(
    () => import('./DesktopDropdown').then((mod) => mod.DesktopDropdown),
    {
      ssr: false,
      loading: () => {
        // eslint-disable-next-line
        const { buttonContent } = useLoadingProps();
        return <StyledMenuButton>{buttonContent}</StyledMenuButton>;
      },
    },
  ),
) as typeof DesktopDropdownType;

const StyledMenuButton = styled.button`
  && {
    appearance: none;
    border: none;
    background-color: transparent;
    color: ${(p) => p.theme.colors.grey500};
    font-size: 9px;
    line-height: 25px;
    user-select: none;
    cursor: pointer;
    transition: color 0.18s ease-out;

    &[aria-expanded='true'] {
      color: ${(p) => p.theme.colors.primary500};
    }

    &:hover,
    &:focus {
      color: ${(p) => p.theme.colors.black};
    }
  }
`;

interface NavDropdownProps {
  content?: any;
  colorChange?: boolean;
}

export const NavDropdown = ({
  content,
  colorChange,
  ...props
}: NavDropdownProps) => {
  const { width } = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);

  const buttonContent = (
    <Flex
      color={colorChange ? 'white' : 'grey500'}
      alignItems="center"
      css={css({
        position: 'relative',

        '&::before': {
          content: "''",
          position: 'absolute',
          left: '50%',
          bottom: '-4px',
          height: '2px',
          width: '0',
          borderRadius: '1px',
          transition:
            'width 0.18s ease-in-out, background-color 0.18s ease-in-out',
          bg: [colorChange ? 'white' : 'primary500'],
          transform: 'translateX(-50%)',
        },

        '&:hover': {
          color: colorChange ? 'white' : 'black',

          '&::before': {
            width: '100%',
            bg: [colorChange ? 'white' : 'primary500'],
          },
        },
      })}
    >
      <Text
        mr={1}
        fontSize={[2.25, 2.25, 2]}
        lineHeight="150%"
        letterSpacing="-0.04em"
      >
        {content?.title}
      </Text>

      <Icon
        mb="-2px"
        icon={ChevronDown}
        fontSize={1.5}
        className="chevron-down"
        transition="transform 0.18s ease-out"
      />
    </Flex>
  );

  return (
    <>
      <Box display={['none', 'none', 'block']}>
        {width >= 992 && (
          <DesktopDropdown
            buttonContent={buttonContent}
            content={content}
            colorChange={colorChange}
            {...props}
          />
        )}
      </Box>

      <Box as={'ul'} display={['block', 'block', 'none']} width="100%">
        <Flex
          as="button"
          justifyContent="space-between"
          alignItems="center"
          onClick={() => setIsOpen(!isOpen)}
          color="black"
        >
          <Text fontSize={[2.25, 2.25, 2]}>{content?.title}</Text>
          <Icon
            mb="-2px"
            icon={ChevronDown}
            fontSize={1.5}
            className="chevron-down"
            ml={1}
            transform={isOpen ? 'rotate(-180deg)' : 'none'}
            transition="transform 0.18s ease-out"
          />
        </Flex>
        <Box display={isOpen ? 'block' : 'none'}>
          {content?.list.map(({ link_url, link_label, _uid }, i) => (
            <Box mt={2} ml={2} key={_uid}>
              <NavLink href={getLinkProps(link_url)} text={link_label} />
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};
