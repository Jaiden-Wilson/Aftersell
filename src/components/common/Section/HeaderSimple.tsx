import { SystemProps } from '@storyofams/react-ui';
import { Fade } from 'react-awesome-reveal';

import { Title, RichText } from '../Blocks';
import { Container } from './Container';

type HeaderSimpleProps = {
  first?: boolean;
  content: {
    title?: any;
    description?: any;
    overlap_next_section?: boolean;
  };
} & SystemProps;

export const HeaderSimple = ({
  content,
  first,
  ...props
}: HeaderSimpleProps) => {
  return (
    <Container
      background="gradient"
      pt={10}
      pb={[4, 10]}
      childProps={{
        pt: [4, 10],
        pb: [4, 10],
      }}
      mb={content?.overlap_next_section && ['-64px', '-160px']}
      {...props}
    >
      <Fade cascade damping={0.2} duration={640} direction="up" triggerOnce>
        {!!content?.title && <Title text={content?.title} h1={first} />}
        {!!content?.description?.content?.[0].content && (
          <RichText text={content?.description} />
        )}
      </Fade>
    </Container>
  );
};
