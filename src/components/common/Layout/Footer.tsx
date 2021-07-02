import { FC } from 'react';
import { Box, Text, Stack, Flex, css } from '@storyofams/react-ui';

import { Logo, StoryOfAms } from '~components/common/Icon/library';

import { Link } from '../Link';
import { Shape } from '../Shape';

interface FooterProps {
  content: any;
}

export const Links = ({ content }) => {
  // const router = useRouter();
  const linkStyles = css({
    fontSize: 2,
    textTransform: 'uppercase',
    transition: '0.18s color ease-in-out',
    color: 'grey500',
    '&:hover': {
      color: 'black',
    },
  });

  return (
    <>
      {content?.map(({ hyperlink, name }, i) => (
        <Link
          href={
            hyperlink?.url ||
            (hyperlink?.cached_url === 'home'
              ? '/'
              : `/${hyperlink?.cached_url}`)
          }
          stylingProps={{
            justifyContent: ['center', 'flex-start'],
            textAlign: ['center', 'left'],
          }}
          key={`link-${i}`}
        >
          <Text as={'a' as any} css={linkStyles}>
            {name}
          </Text>
        </Link>
      ))}
    </>
  );
};

export const Footer: FC<FooterProps> = ({ content }) => {
  return (
    <Box bg="white" boxShadow="0px 0px 100px rgba(0, 0, 0, 0.15)">
      <Box
        width="100%"
        maxWidth="maxWidth"
        margin="0 auto"
        py={[8, 20]}
        px={[2, 6]}
      >
        <Flex
          flexDirection={['column', 'row']}
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          <Link href="/" stylingProps={{ cursor: 'pointer' }}>
            <a>
              <Shape
                width={['37px', '74px']}
                height={['24px', '48px']}
                icon={<Logo />}
              />
            </a>
          </Link>
          <Stack space={2} flexDirection="column" px={[0, 2]} py={[4, 0]}>
            {content?.content?.links && (
              <Links content={content.content.links} />
            )}
          </Stack>
        </Flex>
        <Flex
          flexDirection={['column-reverse', 'row']}
          width="100%"
          alignItems={['center', 'flex-end']}
          justifyContent="space-between"
        >
          <Flex alignItems="flex-end" pt={4}>
            <Shape width="76px" height="48px" icon={<StoryOfAms />} />
            <Text
              lineHeight="1.2"
              fontWeight="medium"
              mb={-0.5}
              mr={1}
              color="grey500"
              fontSize={2.25}
            >
              Copyright © 2021 Story of AMS
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};
