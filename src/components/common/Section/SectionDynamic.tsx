import { Box, css, SystemProps } from '@storyofams/react-ui';
import SbEditable from 'storyblok-react';

import { ContentImage } from '~components';

import {
  List,
  ContentButton,
  Pricing,
  Title,
  Video,
  RichText,
} from '../Blocks';
import { Divider } from '../Divider';
import { Container } from './Container';

type SectionDynamicProps = {
  first?: boolean;
  content: {
    content?: any;
    title?: any;
    description?: any;
    background?: 'none' | 'color' | 'gradient';
    remove_padding?: 'disabled' | 'top' | 'bottom';
    remove_rounded_border?: 'disabled' | 'top' | 'bottom';
    text_align?: 'center' | 'left';
  };
} & SystemProps;

export interface SectionProps {
  content: any;
  first?: boolean;
  sectionType: string;
  background?: 'none' | 'color' | 'gradient';
}

const Item = ({ content, sectionType, background }: SectionProps) => {
  let item = null;

  switch (sectionType) {
    case 'image':
      item = <ContentImage height={[200, 430]} content={content?.image} />;
      break;
    case 'video':
      item = <Video src={content?.url} />;
      break;
    case 'price_selector':
      item = <Pricing content={content?.price} />;
      break;
    case 'divider':
      item = <Divider />;
      break;
    case 'button':
      item = (
        <ContentButton background={background} content={content?.button} />
      );
      break;
    case 'list':
      item = <List content={content?.list} />;
      break;
    case 'text':
      item = <RichText text={content?.text} />;
  }

  return item;
};

export const SectionDynamic = ({
  content,
  first,
  ...props
}: SectionDynamicProps) => {
  return (
    <Container
      background={content?.background}
      textAlign={content?.text_align || 'center'}
      pt={content?.remove_padding === 'top' || first ? 0 : [4, 10]}
      pb={content?.remove_padding === 'bottom' ? 0 : [4, 10]}
      childProps={{
        alignItems: content?.text_align === 'center' ? 'center' : 'flex-start',
        pt:
          content?.remove_padding === 'top' || content?.background !== 'color'
            ? 0
            : [4, 10],
        pb:
          content?.remove_padding === 'bottom' ||
          content?.background !== 'color'
            ? 0
            : [4, 10],
      }}
      css={css({
        '.background': {
          top: content?.remove_rounded_border === 'top' ? 0 : [4, 10],
          bottom: content?.remove_rounded_border === 'bottom' ? 0 : [4, 10],
          borderTopLeftRadius:
            content?.remove_rounded_border === 'top' ? 0 : [0, 'lg'],
          borderTopRightRadius:
            content?.remove_rounded_border === 'top' ? 0 : [0, 'lg'],
          borderBottomLeftRadius:
            content?.remove_rounded_border === 'bottom' ? 0 : [0, 'lg'],
          borderBottomRightRadius:
            content?.remove_rounded_border === 'bottom' ? 0 : [0, 'lg'],
        },
      })}
      {...props}
    >
      {!!content?.title && <Title text={content?.title} h1={first} />}
      {!!content?.description?.content?.[0].content ? (
        <RichText text={content?.description} />
      ) : (
        <Box />
      )}
      {content?.content?.map((section, i) => (
        <SbEditable content={section} key={`section-${i}`}>
          <>
            <Item
              sectionType={section.component}
              content={section}
              first={i === 0}
              background={content?.background}
            />
          </>
        </SbEditable>
      ))}
    </Container>
  );
};
