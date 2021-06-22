import { Text, Heading, SystemProps } from '@storyofams/react-ui';
import {
  MARK_BOLD,
  NODE_HEADING,
  NODE_PARAGRAPH,
} from 'storyblok-rich-text-react-renderer';

import { RichText } from '../RichText';
interface TitleProps extends SystemProps {
  text: any;
  titleColor?: string;
  boldColor?: string;
  h1?: boolean;
}

export const Title = ({
  text,
  h1,
  fontSize = [5, 7],
  ...props
}: TitleProps) => {
  return (
    <RichText
      text={text}
      {...props}
      markResolvers={{
        [MARK_BOLD]: (children) => <Text as="span">{children}</Text>,
      }}
      nodeResolvers={{
        [NODE_HEADING]: (children, { level }) => (
          <Heading
            fontSize={fontSize}
            lineHeight="heading"
            maxWidth="800px"
            as={`h${h1 ? 1 : level || 3}` as any}
          >
            {children}
          </Heading>
        ),
        [NODE_PARAGRAPH]: (children) => (
          <Heading
            fontSize={fontSize}
            lineHeight="heading"
            maxWidth="800px"
            as={`h${h1 ? 1 : 3}` as any}
          >
            {children}
          </Heading>
        ),
      }}
    />
  );
};
