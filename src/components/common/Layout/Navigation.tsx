import { useState, useEffect } from 'react';
import { Flex, Box, Stack } from '@storyofams/react-ui';

import { getLinkProps } from '~lib';
import { Logo } from '~components/common/Icon/library';
import { Button } from '../Button';
import { Link } from '../Link';
import { Shape } from '../Shape';
import { NavDropdown } from './NavDropdown';
import { NavLink } from './NavLink';

interface NavigationProps {
  content: any;
}

export const Navigation = ({ content }: NavigationProps) => {
  const [isScrolled, setScrolled] = useState(false);

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
    <Box
      position="sticky"
      zIndex="sticky"
      top="0"
      left="0"
      right="0"
      bg="grey100"
      boxShadow={isScrolled && 'xs'}
      transition="box-shadow 0.18s ease-in-out"
    >
      <Flex py={[1.5, 3]} px={[2, 12]}>
        <Link href="/" stylingProps={{ mr: [0, '76px'], cursor: 'pointer' }}>
          <a>
            <Shape
              width={['86px', '172px']}
              height={['24px', '48px']}
              icon={<Logo />}
              color="primary500"
            />
          </a>
        </Link>
        <Stack
          alignItems="center"
          justifyContent="center"
          flex="1"
          flexDirection={['column', 'row']}
          space={[2, 6]}
        >
          {content?.links?.map((item) => {
            if (item?.component === 'link_list') {
              return <NavDropdown key={item?._uid} content={item} />;
            }

            return (
              <NavLink
                key={item?._uid}
                href={getLinkProps(item.link_url)}
                text={item?.link_label}
              />
            );
          })}
        </Stack>
        {(content?.button_1_label || content?.button_2_label) && (
          <Stack alignItems="center" space={2}>
            <Button variant="outline" to={getLinkProps(content?.button_1_url)}>
              {content?.button_1_label}
            </Button>
            <Button to={getLinkProps(content?.button_2_url)}>
              {content?.button_2_label}
            </Button>
          </Stack>
        )}
      </Flex>
    </Box>
  );
};
