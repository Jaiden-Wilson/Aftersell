import { SystemProps } from '@storyofams/react-ui';
import SbEditable from 'storyblok-react';

import { Header } from './Header';
import { HeaderSimple } from './HeaderSimple';
import { SectionDynamic } from './SectionDynamic';

type SectionProps = {
  content: any;
  first: boolean;
  last: boolean;
  sectionType: string;
  noBgAnimation?: boolean;
  blogPost?: boolean;
} & SystemProps;

export const Section = ({
  content,
  first,
  sectionType,
  noBgAnimation,
  blogPost,
  last,
}: SectionProps) => {
  let section = null;
  const shared = { content, first, blogPost };

  switch (sectionType) {
    case 'header_simple':
      section = <HeaderSimple {...shared} />;
      break;
    case 'header':
      section = <Header {...shared} />;
      break;
    case 'section':
      section = (
        <SectionDynamic last={last} noBgAnimation={noBgAnimation} {...shared} />
      );
  }

  return (
    <SbEditable content={content}>
      <>{section}</>
    </SbEditable>
  );
};
