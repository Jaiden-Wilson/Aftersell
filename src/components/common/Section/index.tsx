import SbEditable from 'storyblok-react';

import { FeaturedAsset } from './FeaturedAsset';
import { Simple } from './Simple';

export interface SectionProps {
  content: any;
  first: boolean;
  sectionType: string;
  extraPadding?: number | number[];
}

export const Section: React.FC<SectionProps> = ({
  content,
  first,
  sectionType,
  extraPadding,
}) => {
  let section = null;
  const shared = { content, pb: extraPadding, first };

  switch (sectionType) {
    case 'featured video or image section':
      section = <FeaturedAsset {...shared} />;
      break;
    case 'content section':
      section = <Simple {...shared} />;
  }

  return (
    <SbEditable content={content}>
      <>{section}</>
    </SbEditable>
  );
};
