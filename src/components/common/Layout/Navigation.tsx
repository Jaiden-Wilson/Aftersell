import { useState, useEffect } from 'react';
import { css, Flex, Box, Stack } from '@storyofams/react-ui';

import { getLinkProps } from '~lib';
import { Logo } from '~components/common/Icon/library';
import { Button } from '../Button';
import { Link } from '../Link';
import { Shape } from '../Shape';
import { Hamburger } from './Hamburger';
import { NavDropdown } from './NavDropdown';
import { NavLink } from './NavLink';

interface NavigationProps {
  content: any;
  navBackground?: boolean;
}

export const Navigation = ({ content, navBackground }: NavigationProps) => {
  const [isScrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const onScroll = () => {
    if (window.scrollY > 0) {
      if (!isScrolled) {
        setScrolled(true);
      }
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <>
      <Box
        position={['fixed', 'fixed', 'static']}
        display={['flex !important', 'flex !important', 'none !important']}
        top={[0, 0, 'unset']}
        left={[
          mobileMenuOpen ? 0 : '-100%',
          mobileMenuOpen ? 0 : '-100%',
          'unset',
        ]}
        bottom={[0, 0, 'unset']}
        width="100%"
        backgroundColor="rgba(45,45,45,.65)"
        zIndex="sticky"
        transition="opacity .24s ease-out"
        opacity={[mobileMenuOpen ? 1 : 0, mobileMenuOpen ? 1 : 0, 0]}
        onClick={() => setMobileMenuOpen(false)}
      />
      <Box
        position="fixed"
        zIndex="sticky"
        top="0"
        left="0"
        right="0"
        bg={
          isScrolled
            ? 'grey100'
            : mobileMenuOpen
            ? ['grey100', 'grey100', 'transparent']
            : 'transparent'
        }
        boxShadow={
          isScrolled ? 'xs' : mobileMenuOpen ? ['xs', 'xs', 'none'] : 'none'
        }
        transition="box-shadow 0.18s ease-in-out, background-color 0.18s ease-in-out"
      >
        <Flex
          py={[1.5, 1.5, !isScrolled ? 3 : 1.5]}
          px={[2, 2, 12]}
          transition="padding-top 0.18s ease-in-out, padding-top 0.18s"
          alignItems="center"
        >
          <Hamburger
            isOpen={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            bg={navBackground && !isScrolled ? 'white' : 'black'}
          />
          <Link href="/">
            <a>
              <Shape
                width={['86px', '86px', '172px']}
                height={['24px', '24px', '48px']}
                icon={<Logo />}
                color={
                  navBackground && !isScrolled
                    ? mobileMenuOpen
                      ? ['primary500', 'primary500', 'white']
                      : 'white'
                    : 'primary500'
                }
                css={css({
                  '.svg-text': {
                    fill:
                      navBackground && !isScrolled
                        ? mobileMenuOpen
                          ? ['grey500', 'grey500', 'white']
                          : 'white'
                        : 'grey500',
                  },
                  '.svg-line': {
                    stroke:
                      navBackground && !isScrolled
                        ? mobileMenuOpen
                          ? ['grey500', 'grey500', 'white']
                          : 'white'
                        : 'grey500',
                  },
                })}
              />
              <div className="hidden">Perfect Product Finder</div>
            </a>
          </Link>
          <Stack
            alignItems={['flex-start', 'flex-start', 'center']}
            justifyContent={['flex-start', 'flex-start', 'center']}
            flex="1"
            flexDirection={['column', 'column', 'row']}
            space={[4, 6]}
            bg={['white', 'white', 'transparent']}
            transform={[
              mobileMenuOpen ? 'translateX(0)' : 'translateX(-100%)',
              mobileMenuOpen ? 'translateX(0)' : 'translateX(-100%)',
              'translateX(0)',
            ]}
            position={['fixed', 'fixed', 'static']}
            top={['64px', '64px', 'unset']}
            left={[0, 0, 'unset']}
            maxWidth={['320px', '320px', 'none']}
            height="100%"
            width={['100%', '100%', 'auto']}
            px={[2, 2, 0]}
            pt={[4, 4, 0]}
            boxShadow={['xs', 'xs', 'none']}
            transition="transform 0.18s ease-in-out"
          >
            <NavLink
              href="/"
              text="Home"
              display={['block', 'block', 'none']}
              colorChange={navBackground && !isScrolled}
            />
            {content?.links?.map((item) => {
              if (item?.component === 'link_list') {
                return (
                  <NavDropdown
                    key={item?._uid}
                    content={item}
                    colorChange={navBackground && !isScrolled}
                  />
                );
              }

              return (
                <NavLink
                  key={item?._uid}
                  href={getLinkProps(item.link_url)}
                  text={item?.link_label}
                  colorChange={navBackground && !isScrolled}
                />
              );
            })}
          </Stack>
          {(content?.button_1_label || content?.button_2_label) && (
            <Stack alignItems="center" space={2} ml="auto">
              {content?.button_1_label && (
                <Button
                  variant={
                    navBackground && !isScrolled
                      ? mobileMenuOpen
                        ? ['outline', 'outline', 'secondary-outline']
                        : 'secondary-outline'
                      : 'outline'
                  }
                  to={getLinkProps(content?.button_1_url)}
                  px={[2, 2, 4]}
                  py={[1, 1, 1.5]}
                >
                  {content?.button_1_label}
                </Button>
              )}
              {content?.button_2_label && (
                <Button
                  variant={
                    navBackground && !isScrolled
                      ? mobileMenuOpen
                        ? ['primary', 'primary', 'secondary']
                        : 'secondary'
                      : 'primary'
                  }
                  to={getLinkProps(content?.button_2_url)}
                  px={[2, 2, 4]}
                  py={[1, 1, 1.5]}
                >
                  {content?.button_2_label}
                </Button>
              )}
            </Stack>
          )}
        </Flex>
      </Box>
    </>
  );
};
