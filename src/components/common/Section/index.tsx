import SbEditable from 'storyblok-react';

import { Header } from './Header';
import { HeaderSimple } from './HeaderSimple';
import { SectionDynamic } from './SectionDynamic';

export interface SectionProps {
  content: any;
  first: boolean;
  sectionType: string;
}

export const Section: React.FC<SectionProps> = ({
  content,
  first,
  sectionType,
}) => {
  let section = null;
  const shared = { content, first };

  switch (sectionType) {
    case 'header_simple':
      section = <HeaderSimple {...shared} />;
      break;
    case 'header':
      section = <Header {...shared} />;
      break;
    case 'section':
      section = <SectionDynamic {...shared} />;
  }

  return (
    <SbEditable content={content}>
      <>{section}</>
    </SbEditable>
  );
};
