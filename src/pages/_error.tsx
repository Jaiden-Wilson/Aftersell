import { Heading, Text } from '@storyofams/react-ui';
import { NextSeo } from 'next-seo';
import { Button, Container } from '~components';

const getError = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

const getContent = ({ statusCode }) => {
  switch (statusCode) {
    case 401:
      return "It looks like you're not supposed to be here.";
    case 404:
      return 'We could not find the page you were looking for.';
    case 500:
      return 'Our server had some trouble processing this request.';
    default:
      return 'An unexpected error has occured.';
  }
};

const Error = ({ statusCode }) => {
  const content = getContent({ statusCode });

  return (
    <>
      <NextSeo title={statusCode} description={content} />
      <Container minHeight="100vh">
        <Heading
          textAlign="center"
          color={'aloe' as any}
          fontSize={[5, 7]}
          lineHeight="heading"
          as="h1"
        >
          {statusCode}
        </Heading>
        <Text
          textAlign="center"
          color={'black' as any}
          fontSize={[2, 2.5]}
          lineHeight="high"
          maxWidth="480px"
        >
          {content}
        </Text>
        <Button to="/" variant="primary">
          Take me home
        </Button>
      </Container>
    </>
  );
};

Error.getInitialProps = ({ res, err }) => getError({ res, err });

export default Error;
