import { FC } from 'react';
import { Flex, Text, SystemProps, css } from '@storyofams/react-ui';
import {
  render,
  MARK_BOLD,
  MARK_LINK,
  NODE_PARAGRAPH,
  NODE_HEADING,
  NODE_IMAGE,
} from 'storyblok-rich-text-react-renderer';
import { Heading } from '../Heading';
import { ContentImage } from '.';

interface RichTextProps extends SystemProps {
  text: any;
  markResolvers?: any;
  nodeResolvers?: any;
  textProps?: any;
}

export const RichText: FC<RichTextProps> = ({
  markResolvers = {},
  nodeResolvers = {},
  text,
  textProps,
  ...props
}) => (
  <Flex
    flexDirection="column"
    css={css({ '> *:last-child': { pb: 0 }, '.small': { fontSize: 2 } })}
    {...props}
  >
    {render(text, {
      markResolvers: {
        [MARK_BOLD]: (children) => (
          <Text fontWeight="bold" as="span">
            {children}
          </Text>
        ),
        [MARK_LINK]: (children, props) => {
          const { href, linktype } = props;

          return (
            <Text color="primary500" textDecoration="underline" as="span">
              <a
                href={`${linktype === 'email' ? 'mailto:' : ''}${href}`}
                target="_blank"
                rel="noopener noreferrer"
              >
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
            lineHeight="medium"
            as={`h${level}` as any}
            variant={`h${level}` as any}
            pb={[2, 3]}
            maxWidth="800px"
          >
            {children}
          </Heading>
        ),
        [NODE_PARAGRAPH]: (children) => (
          <Text
            maxWidth="560px"
            fontSize={[2, 2.5]}
            lineHeight="high"
            pb={2}
            {...textProps}
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
  </Flex>
);
