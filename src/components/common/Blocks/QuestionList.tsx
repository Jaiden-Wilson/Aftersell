import { Box, SystemProps } from '@storyofams/react-ui';
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
    </Box>
  );
};
