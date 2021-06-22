import { Text } from '@storyofams/react-ui';
import {
  MARK_BOLD,
  NODE_PARAGRAPH,
  MARK_LINK,
} from 'storyblok-rich-text-react-renderer';

import { RichText } from '../RichText';

export const Paragraph = ({ text, fontSize = [2, 2.5], ...props }) => {
  return (
    <RichText
      text={text}
      {...props}
      markResolvers={{
        [MARK_BOLD]: (children) => (
          <Text fontWeight="bold" as="span">
            {children}
          </Text>
        ),
        [MARK_LINK]: (children, props) => {
          const { href } = props;
          return (
            <Text textDecoration="underline" as="span">
              <a href={href} target="_blank" rel="noopener noreferrer">
                {children}
              </a>
            </Text>
          );
        },
      }}
      nodeResolvers={{
        [NODE_PARAGRAPH]: (children) => (
          <Text fontSize={fontSize} lineHeight="high" maxWidth="480px" pb={2}>
            {children}
          </Text>
        ),
      }}
    />
  );
};
