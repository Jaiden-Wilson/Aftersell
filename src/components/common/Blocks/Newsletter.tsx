import { useState } from 'react';
import { Box, Text, SystemProps, Flex, css } from '@storyofams/react-ui';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Parallax } from 'react-scroll-parallax';

import { Button, Input, Form, Heading } from '~components';

interface NewsletterProps extends SystemProps {
  content?: { title: string; subtitle: string; button_label: string };
}

export const Newsletter = ({ content, ...props }: NewsletterProps) => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = (input) => {
    return axios
      .post(`/api/newsletter`, { email: input.newsletterEmail })
      .then((response) => {
        if (response.status !== 200) {
          setError(response.statusText);
        } else {
          setSuccess('Subscribed!');
          reset();
        }
      })
      .catch((err) => setError(err?.message));
  };

  return (
    <Form
      position="relative"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      space={[3, 5]}
      py={[4, 10]}
      px={[2, 6]}
      width="100%"
      color="white"
    >
      {!!content?.title && (
        <Heading variant="h1" as="h2" color="white !important">
          {content?.title}
        </Heading>
      )}
      {!!content?.subtitle && (
        <Text fontSize={[3, 4]} maxWidth="800px">
          {content?.subtitle}
        </Text>
      )}
      <Box
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        width="100%"
        maxWidth="496px"
      >
        <Flex
          flexDirection={['column', 'row']}
          css={css({
            'input[type="email"]': {
              my: 0,
              mr: [0, 2],
              mb: [2, 0],
              bg: 'white',
              borderColor: 'white',
            },
          })}
        >
          <Input
            type="email"
            id="newsletterEmail"
            aria-label="Your email address"
            placeholder="Your email address"
            required
            {...register('email', { required: true })}
            defaultValue=""
          />
          <Button
            variant="secondary"
            aria-label={content?.button_label || 'Subscribe'}
            value={content?.button_label || 'Subscribe'}
            input
            boxShadow="none"
            isLoading={isSubmitting}
            width={['100%', 'auto']}
          />
        </Flex>
        {(success || error) && (
          <Text
            fontSize="16px"
            lineHeight="130%"
            color="grey500"
            mt={success || error ? 3 : 0}
            p={2}
            bg="white"
            borderRadius="sm"
          >
            <span submit-success="">{success}</span>
            <span submit-error="">{error}</span>
          </Text>
        )}
      </Box>
      <Box
        position="absolute"
        left="0"
        top="0"
        width="100%"
        height="100%"
        borderRadius="md"
        css={css({
          background: 'linear-gradient(180deg, #6138FE 0%, #F087B3 100%)',
          '&&': {
            mt: 0,
          },
        })}
        overflow="hidden"
        zIndex="hide"
      >
        <Parallax
          y={['0px', '-80px']}
          x={['80px', '-80px']}
          styleOuter={{
            position: 'absolute',
            left: 0,
            top: 0,
            height: '100%',
            width: '100%',
          }}
          styleInner={{
            position: 'absolute',
            left: 0,
            top: 0,
            height: '100%',
            width: '100%',
          }}
        >
          <Box
            position="absolute"
            top="16%"
            left="16%"
            width="160%"
            pt="160%"
            borderRadius="full"
            css={css({
              background: 'linear-gradient(180deg, #6138FE 0%, #F087B3 100%)',
            })}
          />
        </Parallax>
      </Box>
    </Form>
  );
};
