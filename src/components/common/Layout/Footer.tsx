import { FC } from 'react';
import { Box, Text, Stack, Flex, css } from '@storyofams/react-ui';

import { getLinkProps } from '~lib';
import { Logo, Shopify, StoryOfAms } from '~components/common/Icon/library';

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

              <div className="hidden">Perfect Product Finder</div>
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
              <Link href="https://apps.shopify.com/perfect-product-finder">
                <Shape
                  as="a"
                  mt={[2, 4]}
                  color="grey500"
                  width={'200px'}
                  height={'59px'}
                  icon={<Shopify />}
                />
              </Link>
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
                <Links content={list} key={list._uid} />
              ))}
          </Flex>
        </Flex>
        <Divider mt={[0, 4]} mb={4} />
        <Flex
          flexDirection="column"
          width="100%"
          alignItems="center"
          justifyContent="center"
        ></Flex>
      </Box>
    </Box>
  );
};
