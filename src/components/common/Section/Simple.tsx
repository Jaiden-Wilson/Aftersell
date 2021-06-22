import { css, Stack, Box, Grid, SystemProps } from '@storyofams/react-ui';
import SbEditable from 'storyblok-react';

import { ContentImage } from '~components';

import { Title } from '../Blocks';
import { Container } from '../Container';
import { RichText } from '../RichText';

type SimpleProps = {
  first?: boolean;
  content: {
    body?: any;
    title?: any;
  };
} & SystemProps;

export interface SectionProps {
  content: any;
  first?: boolean;
  sectionType: string;
}

const Item = ({ content, sectionType, first }: SectionProps) => {
  let item = null;

  switch (sectionType) {
    case 'image':
      item = <ContentImage height={[200, 430]} content={content?.image} />;
      break;
    case 'gallery':
      item = (
        <Grid
          width="100%"
          columnGap={[3, 5]}
          rowGap={[3, 5]}
          rowSize={2}
          mt={first && [-180, -375]}
        >
          <Box
            flex={[
              !(
                content?.images?.[1]?.image?.filename &&
                !content?.images?.[2]?.image?.filename &&
                !content?.images?.[3]?.image?.filename
              ) && '0 1 100% !important',
            ]}
          >
            <ContentImage
              height={[200, 430]}
              content={content?.images?.[0]?.image}
            />
          </Box>
          {content?.images?.[1]?.image?.filename && (
            <Stack flexDirection="column" space={[3, 5]}>
              <ContentImage
                height={
                  (content?.images?.[2]?.image?.filename &&
                    content?.images?.[3]?.image?.filename) ||
                  (content?.images?.[2]?.image?.filename &&
                    !content?.images?.[3]?.image?.filename)
                    ? [88, 195]
                    : [200, 430]
                }
                content={content?.images?.[1]?.image}
              />
              {content?.images?.[2]?.image?.filename &&
                content?.images?.[3]?.image?.filename && (
                  <ContentImage
                    height={[88, 195]}
                    content={content?.images?.[2]?.image}
                  />
                )}
            </Stack>
          )}
          {content?.images?.[2]?.image?.filename &&
            !content?.images?.[3]?.image?.filename && (
              <Box>
                <ContentImage
                  height={[88, 195]}
                  content={content?.images?.[2]?.image}
                />
              </Box>
            )}
          {content?.images?.[3]?.image?.filename && (
            <Box>
              <ContentImage
                height={[200, 430]}
                content={content?.images?.[3]?.image}
              />
            </Box>
          )}
        </Grid>
      );
      break;
    case 'rich paragraph':
      item = (
        <RichText
          css={css({
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          })}
          text={content?.text}
        />
      );
  }

  return item;
};

export const Simple = ({ content, first, ...props }: SimpleProps) => {
  return (
    <Container
      textAlign="center"
      childProps={{
        pt:
          (first && content?.body?.[0]?.component === 'rich paragraph') ||
          (first && content?.title?.content?.[0].content)
            ? [148, 280]
            : [10, 20],
      }}
      {...props}
    >
      {!!content?.title?.content?.[0].content && (
        <Title text={content?.title} fontSize={[5, 7]} h1={first} />
      )}
      {content?.body?.map((section, i) => (
        <SbEditable content={section} key={`section-${i}`}>
          <>
            <Item
              sectionType={section.component}
              content={section}
              first={i === 0}
            />
          </>
        </SbEditable>
      ))}
    </Container>
  );
};
