import { Box, SystemProps } from '@storyofams/react-ui';
import { getPlainText } from '@storyofams/storyblok-toolkit';
import { FAQPageJsonLd } from 'next-seo';

import { Accordion } from '../Accordion';
import { RichText } from './RichText';

interface QuestionListProps extends SystemProps {
  content: any;
}

export const QuestionList = ({ content, ...props }: QuestionListProps) => {
  return (
    <Box width="100%" {...props}>
      {content?.map((question) => (
        <Accordion title={question?.question} key={question?._uid}>
          <RichText fontSize={[1.75, 2]} text={question?.answer} />
        </Accordion>
      ))}

      <FAQPageJsonLd
        mainEntity={content?.map((question) => ({
          questionName: question?.question,
          acceptedAnswerText: getPlainText(question?.answer),
        }))}
      />
    </Box>
  );
};
