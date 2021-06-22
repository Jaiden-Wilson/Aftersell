import { Stack, SystemProps } from '@storyofams/react-ui';
import { ContentImage } from '~components';

import { Title, Paragraph } from '../Blocks';
import { Button } from '../Button';
import { Container } from '../Container';
import { Video } from '../Video';

type FeaturedAssetProps = {
  first?: boolean;
  content: {
    text: any;
    title?: any;
    button_label?: string;
    button_link?: {
      cached_url?: string;
      fieldtype?: string;
      id?: string;
      linktype?: string;
      url?: string;
      email?: string;
    };
    youtube_url?: string;
    preview_video?: any;
    image?: any;
    asset_position?: 'top' | 'left' | 'right';
  };
} & SystemProps;

export const FeaturedAsset = ({
  content,
  first,
  ...props
}: FeaturedAssetProps) => {
  return (
    <Container
      childProps={{
        pt:
          (first &&
            !(
              !!content?.preview_video?.filename || !!content?.image?.filename
            )) ||
          (first && content?.asset_position !== 'top')
            ? [148, 280]
            : [10, 20],
        flexDirection:
          content?.asset_position === 'top'
            ? 'column'
            : [
                'column',
                content?.asset_position === 'left' ? 'row' : 'row-reverse',
              ],
      }}
      {...props}
    >
      {content?.youtube_url &&
        (content?.preview_video?.filename || content?.image?.filename) && (
          <Video
            maxWidth={
              content?.asset_position === 'top' ? 'none' : ['none', '480px']
            }
            src={content?.youtube_url}
            previewVideo={content?.preview_video}
            previewImage={content?.image}
          />
        )}
      {content?.image?.filename &&
        !(content?.preview_video?.filename || content?.youtube_url) && (
          <ContentImage
            height={[200, 430]}
            maxWidth={
              content?.asset_position === 'left' ||
              content?.asset_position === 'right'
                ? 440
                : 'none'
            }
            content={content?.image}
          />
        )}
      <Stack
        flexDirection="column"
        space={[3, 5]}
        alignItems={[
          'center',
          content?.asset_position === 'top' ? 'center' : 'flex-start',
        ]}
        textAlign={[
          'center',
          content?.asset_position === 'top' ? 'center' : 'left',
        ]}
      >
        {!!content?.title?.content?.[0].content && (
          <Title
            text={content?.title}
            h1={first}
            fontSize={content?.asset_position === 'top' ? [5, 7] : [4, 6]}
          />
        )}
        {!!content?.text?.content?.[0].content && (
          <Paragraph
            text={content?.text}
            fontSize={content?.asset_position === 'top' ? [2, 2.5] : [2, 2.25]}
          />
        )}
        {content?.button_label && content?.button_link && (
          <Button
            variant="primary"
            to={
              content?.button_link?.linktype === 'story'
                ? `/${content?.button_link?.cached_url}`
                : content?.button_link?.url
            }
          >
            {content?.button_label}
          </Button>
        )}
      </Stack>
    </Container>
  );
};
