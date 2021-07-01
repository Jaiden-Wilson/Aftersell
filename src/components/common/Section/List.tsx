import { SystemProps } from '@storyofams/react-ui';

import { Title } from '../Blocks';
import { Container } from './Container';

type ListProps = {
  first?: boolean;
  content: {
    content?: any;
    title?: any;
    background?: 'none' | 'color' | 'gradient';
    remove_padding?: 'disabled' | 'top' | 'bottom';
    remove_rounded_border?: 'disabled' | 'top' | 'bottom';
  };
} & SystemProps;

export const List = ({ content, first, ...props }: ListProps) => {
  return (
    <Container {...props}>
      {!!content?.title && <Title text={content?.title} h1={first} />}
    </Container>
  );
};
