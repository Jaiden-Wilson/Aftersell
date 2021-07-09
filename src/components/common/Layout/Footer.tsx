import { FC } from 'react';
import { Box, Text, Stack, Flex, css } from '@storyofams/react-ui';

import { getLinkProps } from '~lib';
import {
  Logo,
  Shopify,
  ShopifyPlus,
  StoryOfAms,
} from '~components/common/Icon/library';

import { Button } from '../Button';
import { Divider } from '../Divider';
import { Heading } from '../Heading';
import { Link } from '../Link';
import { Shape } from '../Shape';

interface FooterProps {
  content: any;
}

export const Links = ({ content }) => {
  const linkStyles = css({
    fontSize: 2,
    transition: '0.18s color ease-in-out',
    color: 'grey500',
    '&:hover': {
      color: 'black',
    },
  });

  return (
    <Stack flexDirection="column" space={3} maxWidth="176px" pl={[0, 4]} pb={4}>
      <Heading variant="h6" as="h6" fontSize={2}>
        {content?.title}
      </Heading>
      {content?.list?.map(({ link_url, link_label }, i) => (
        <Link href={getLinkProps(link_url)} key={`link-${i}`}>
          <Text as={'a' as any} css={linkStyles}>
            {link_label}
          </Text>
        </Link>
      ))}
    </Stack>
  );
};

export const Footer: FC<FooterProps> = ({ content }) => {
  return (
    <Box
      zIndex="docked"
      bg="white"
      boxShadow="0px 0px 100px rgba(0, 0, 0, 0.15)"
    >
      <Box
        width="100%"
        maxWidth="maxWidth"
        margin="0 auto"
        pt={[5, 8]}
        pb={[4, 5]}
        px={[2, 6]}
      >
        <Flex
          flexDirection={'row'}
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          <Link href="/" stylingProps={{ color: 'grey600', display: 'flex' }}>
            <a>
              <Shape
                width={['86px', '172px']}
                height={['24px', '48px']}
                icon={<Logo />}
              />
            </a>
          </Link>
          {(content?.button_1_label || content?.button_2_label) && (
            <Stack alignItems="center" space={2}>
              {content?.button_1_label && (
                <Button
                  variant="outline"
                  to={getLinkProps(content?.button_1_url)}
                  px={[2, 2, 4]}
                  py={[1, 1, 1.5]}
                >
                  {content?.button_1_label}
                </Button>
              )}
              {content?.button_2_label && (
                <Button
                  variant="primary"
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
        <Divider mt={[2, 4]} mb={[2, 8]} />
        <Flex flexDirection={['column', 'row']}>
          <Box width={['100%', '40%']}>
            <Text fontWeight="thin" color="grey500">
              {content?.description}
            </Text>
            {content?.shopify_plus_logo && (
              <>
                <Shape
                  mt={[2, 4]}
                  color="grey500"
                  width={'110px'}
                  height={'31px'}
                  icon={<Shopify />}
                />
                <Shape
                  mt={[2, 2]}
                  color="grey500"
                  width={'150px'}
                  height={'31px'}
                  icon={<ShopifyPlus />}
                />
              </>
            )}
          </Box>
          <Flex
            flexDirection={['column', 'row']}
            flexWrap="wrap"
            py={[4, 0]}
            width={['100%', '60%']}
            justifyContent="space-between"
          >
            {content?.links &&
              content?.links?.map((list) => (
                <Links key={list?._uid} content={list} />
              ))}
          </Flex>
        </Flex>
        <Divider mt={[0, 4]} mb={4} />
        <Flex
          flexDirection="column"
          width="100%"
          alignItems="center"
          justifyContent="center"
        >
          <Link href="https://storyofams.com/">
            <Shape as="a" width="76px" height="48px" icon={<StoryOfAms />} />
          </Link>
          <Text lineHeight="1.2" mt={1.5} color="grey500" fontSize={1.5}>
            Copyright © {new Date().getFullYear()} Story of AMS
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};
