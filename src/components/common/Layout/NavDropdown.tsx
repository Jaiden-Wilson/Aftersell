import React, { useState } from 'react';
import { Menu, MenuList, MenuButton, MenuItem } from '@reach/menu-button';
import { css, Box, Flex, Icon, Text } from '@storyofams/react-ui';
import '@reach/menu-button/styles.css';
import styled from 'styled-components';

import { getLinkProps } from '~lib';
import { ChevronDown } from '~components/common/Icon/library';

import { Link } from '../Link';
import { NavLink } from './NavLink';

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

const StyledMenuList = styled.div`
  && {
    margin-top: 12px;
    padding: 0;
    background: ${(p) => p.theme.colors.primary100};
    border: none;
    box-sizing: border-box;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04),
      0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04);
    border-radius: 8px;
    overflow: hidden;

    div {
      width: 100%;
    }

    a {
      width: 100%;
      padding: 8px 16px;
      font-size: 16px;
      line-height: 130%;
      color: ${(p) => p.theme.colors.grey500};
      text-decoration: none;
      transition: background-color 0.18s ease-in-out;

      &[data-selected],
      &:hover,
      &:focus {
        background-color: ${(p) => p.theme.colors.grey100};
        color: ${(p) => p.theme.colors.black};
      }
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
      <Box
        display={['none', 'none', 'block']}
        css={css({
          "button[aria-expanded='true'] > div": {
            color: colorChange ? 'white' : 'black',

            '&::before': {
              width: '100%',
              bg: [colorChange ? 'white' : 'primary500'],
            },

            '.chevron-down': {
              transform: 'rotate(-180deg)',
            },
          },
        })}
      >
        <Menu {...props}>
          <MenuButton as={StyledMenuButton}>{buttonContent}</MenuButton>
          <MenuList as={StyledMenuList}>
            {content?.list.map(({ link_url, link_label, _uid }) => (
              <Link key={_uid} href={getLinkProps(link_url)}>
                <MenuItem as="a" onSelect={() => {}}>
                  {link_label}
                </MenuItem>
              </Link>
            ))}
          </MenuList>
        </Menu>
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
            <Box mt={2} ml={2}>
              <NavLink
                key={_uid}
                href={getLinkProps(link_url)}
                text={link_label}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};
