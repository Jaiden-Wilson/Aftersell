import { useState, FC } from 'react';
import { Box, Text } from '@storyofams/react-ui';
import { useForm } from 'react-hook-form';

import { Button, Form, Input, Textarea } from '~/components';

export const ContactForm: FC<{}> = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = async (values) => {
    setError('');
    setSuccess('');

    try {
      const res = await fetch('/api/postmark', {
        method: 'post',
        body: JSON.stringify(values),
        headers: { 'Content-Type': 'application/json' },
      });

      if (res.status === 200) {
        setSuccess('Your message has been sent!');
        reset();
      } else {
        const data = await res.json();
        setError(data.message);
      }
    } catch (e) {
      setError('An unknown error has occured');
    }

    return false;
  };

  return (
    <Box
      position="relative"
      overflow="hidden"
      width="100%"
      maxWidth="640px"
      mx="auto"
    >
      <Form space={0}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box position="absolute" left="-5000px" aria-hidden="true">
            <input
              type="text"
              name="b_35cf2612bb33321a60e61d239_7eb72358b5"
              tabIndex={-1}
            />
          </Box>

          <Box
            display="flex"
            flexDirection="row"
            alignItems="flex-start"
            position="relative"
            textAlign="left"
          >
            <Box flex="1">
              <Text
                as="label"
                htmlFor="name"
                fontSize={['16px', '18px']}
                lineHeight="100%"
                color="grey500"
                fontWeight="bold"
              >
                Full name
              </Text>
              <Input
                type="text"
                id="name"
                required
                aria-label="Your name"
                defaultValue=""
                {...register('name', { required: true })}
                autoFocus
              />
              <Text
                as="label"
                htmlFor="email"
                fontSize={['16px', '18px']}
                lineHeight="100%"
                fontWeight="bold"
                color="grey500"
              >
                Email
              </Text>
              <Input
                type="email"
                id="email"
                aria-label="Your email"
                required
                {...register('email', { required: true })}
                defaultValue=""
              />
              <Text
                as="label"
                htmlFor="url"
                fontSize={['16px', '18px']}
                lineHeight="100%"
                fontWeight="bold"
                color="grey500"
              >
                Webshop URL
              </Text>
              <Input
                type="text"
                id="url"
                required
                aria-label="Your webshop URL"
                {...register('url', { required: true })}
                defaultValue=""
              />
              <Text
                as="label"
                htmlFor="message"
                fontSize={['16px', '18px']}
                lineHeight="100%"
                fontWeight="bold"
                color="grey500"
              >
                Message
              </Text>
              <Textarea
                id="message"
                aria-label="Your message"
                rows={4}
                required
                {...register('message', { required: true })}
                defaultValue=""
              />
            </Box>
          </Box>

          <Button
            variant="primary"
            aria-label="Submit"
            value={isSubmitting ? 'Submitting' : 'Submit'}
            mt={1}
            input
            boxShadow="none"
            isLoading={isSubmitting}
          />

          <Text
            fontSize="20px"
            lineHeight="130%"
            color="grey500"
            mt={success || error ? 3 : 0}
            mb="0"
          >
            <span submit-success="">{success}</span>
            <span submit-error="">{error}</span>
          </Text>
        </form>
      </Form>
    </Box>
  );
};
