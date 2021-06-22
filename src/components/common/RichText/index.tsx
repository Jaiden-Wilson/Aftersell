import { FC } from 'react';
import { Heading, Box, Text, SystemProps, css } from '@storyofams/react-ui';
import {
  render,
  MARK_BOLD,
  MARK_LINK,
  NODE_PARAGRAPH,
  NODE_HEADING,
  NODE_IMAGE,
} from 'storyblok-rich-text-react-renderer';
import { ContentImage } from '../Blocks';

interface RichTextProps extends SystemProps {
  text: any;
  markResolvers?: any;
  nodeResolvers?: any;
  titleColor?: string;
  paragraphColor?: string;
  boldColor?: string;
  linkColor?: string;
}

export const RichText: FC<RichTextProps> = ({
  paragraphColor = 'grey500',
  titleColor = 'black',
  boldColor = 'black',
  linkColor = 'primary500',
  markResolvers = {},
  nodeResolvers = {},
  text,
  ...props
}) => (
  <Box css={css({ '> div:last-child': { pb: 0 } })} {...props}>
    {render(text, {
      markResolvers: {
        [MARK_BOLD]: (children) => (
          <Text color={boldColor} fontWeight="bold" as="span">
            {children}
          </Text>
        ),
        [MARK_LINK]: (children, props) => {
          const { href } = props;
          return (
            <Text color={linkColor} textDecoration="underline" as="span">
              <a href={href} target="_blank" rel="noopener noreferrer">
                {children}
              </a>
            </Text>
          );
        },
        ...markResolvers,
      },
      nodeResolvers: {
        [NODE_HEADING]: (children, { level }) => (
          <Heading
            color={titleColor as any}
            fontSize={[5, 7]}
            lineHeight="heading"
            as={`h${level}` as any}
            pb={[3, 4]}
            maxWidth="800px"
          >
            {children}
          </Heading>
        ),
        [NODE_PARAGRAPH]: (children) => (
          <Text
            maxWidth="560px"
            color={paragraphColor}
            fontSize={[2, 2.5]}
            lineHeight="high"
            pb={2}
          >
            {children}
          </Text>
        ),
        [NODE_IMAGE]: (_, props) => (
          <ContentImage content={{ filename: props?.src, alt: props?.alt }} />
        ),
        ...nodeResolvers,
      },
    })}
  </Box>
);
