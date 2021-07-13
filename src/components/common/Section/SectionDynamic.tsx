import { Box, Stack, css, SystemProps } from '@storyofams/react-ui';
import dynamic from 'next/dynamic';
import { Fade } from 'react-awesome-reveal';
import SbEditable from 'storyblok-react';

import {
  List,
  ContentButton,
  Pricing,
  Title,
  Video,
  RichText,
  ContentImageDual,
  QuestionList,
  ContactForm,
  ContentImage,
} from '../Blocks';
import type { Slider as SliderType } from '../Blocks/Slider';
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
  blogPost?: boolean;
  noBgAnimation?: boolean;
} & SystemProps;

export interface SectionProps {
  content: any;
  first?: boolean;
  sectionType: string;
  background?: 'none' | 'color' | 'gradient';
  text_align?: 'center' | 'left';
}

const Slider = dynamic(() =>
  import('../Blocks/Slider').then((mod) => mod.Slider),
) as typeof SliderType;

const Item = ({
  content,
  sectionType,
  background,
  text_align,
}: SectionProps) => {
  let item = null;

  switch (sectionType) {
    case 'image':
      item = <ContentImage content={content?.image} />;
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
    case 'question_list':
      item = <QuestionList content={content?.list} />;
      break;
    case 'image_slider':
      item = <Slider content={content?.images} />;
      break;
    case 'image_dual':
      item = <ContentImageDual content={content} />;
      break;
    case 'button':
      item = (
        <ContentButton background={background} content={content?.button} />
      );
      break;
    case 'list':
      item = <List content={content?.list} />;
      break;
    case 'contact_form':
      item = <ContactForm />;
      break;
    case 'text':
      item = (
        <RichText
          alignItems={text_align === 'left' ? 'flex-start' : 'center'}
          text={content?.text}
        />
      );
  }

  return item;
};

export const SectionDynamic = ({
  content,
  first,
  noBgAnimation,
  blogPost,
  ...props
}: SectionDynamicProps) => {
  return (
    <Container
      background={content?.background}
      textAlign={content?.text_align || 'center'}
      pt={content?.remove_padding === 'top' ? 0 : first ? [10, 20] : [4, 10]}
      pb={content?.remove_padding === 'bottom' ? 0 : [4, 10]}
      childProps={{
        alignItems:
          content?.text_align === 'left' && !blogPost ? 'flex-start' : 'center',
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
      noBgAnimation={noBgAnimation}
      {...props}
    >
      {(!!content?.title || !!content?.description?.content?.[0].content) && (
        <Stack
          flexDirection={
            content?.text_align === 'left' ? ['column', 'row'] : 'column'
          }
          alignItems={
            content?.text_align === 'left' ? 'space-between' : 'center'
          }
          space={[3, 5]}
          width="100%"
        >
          {!!content?.title && (
            <Box
              width={
                content?.text_align === 'left' &&
                !!content?.description?.content?.[0].content
                  ? ['100%', '40%']
                  : 'auto'
              }
            >
              <Fade
                delay={content?.background === 'color' ? 480 : 0}
                duration={640}
                fraction={0.3}
                direction="up"
                triggerOnce
                style={{ width: '100%' }}
              >
                <Title text={content?.title} h1={first} />
              </Fade>
            </Box>
          )}
          {!!content?.description?.content?.[0].content && (
            <Box
              width={
                content?.text_align === 'left' &&
                !!content?.description?.content?.[0].content
                  ? ['100%', '60%']
                  : 'auto'
              }
            >
              <Fade
                delay={content?.background === 'color' ? 480 : 0}
                duration={640}
                fraction={0.3}
                direction="up"
                triggerOnce
                style={{ width: '100%' }}
              >
                <RichText text={content?.description} />
              </Fade>
            </Box>
          )}
        </Stack>
      )}
      {content?.content?.map((section, i) => (
        <SbEditable content={section} key={`section-${i}`}>
          <>
            <Item
              sectionType={section.component}
              content={section}
              first={i === 0}
              background={content?.background}
              text_align={content?.text_align}
            />
          </>
        </SbEditable>
      ))}
    </Container>
  );
};
