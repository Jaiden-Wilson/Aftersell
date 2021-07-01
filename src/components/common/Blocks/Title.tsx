import { SystemProps } from '@storyofams/react-ui';
import { Heading } from '~components';

interface TitleProps extends SystemProps {
  text: any;
  h1?: boolean;
}

export const Title = ({ text, h1, ...props }: TitleProps) => {
  return (
    <Heading
      lineHeight="heading"
      maxWidth="960px"
      as={h1 ? ('h1' as any) : ('h2' as any)}
      variant={h1 ? 'h1' : 'h2'}
      {...props}
    >
      {text}
    </Heading>
  );
};
