import { useState, FC } from 'react';
import { Box, Text } from '@storyofams/react-ui';
import styled from 'styled-components';

import { Button } from '~/components';

const StyledForm = styled.div`
  [submit-error] {
    color: ${(p) => p.theme.colors.error};
  }

  [submit-success] {
    color: ${(p) => p.theme.colors.success};
  }
`;

const StyledInput = styled.input`
  background-color: ${(p) => p.theme.colors.white};
  height: 48px;
  width: 100%;
  font-size: 18px;
  line-height: 150%;
  color: ${(p) => p.theme.colors.black};
  border: 1px solid ${(p) => p.theme.colors.grey300};
  padding: 10px 24px;
  border-radius: 8px;
  appearance: none;
  margin-top: 8px;
  margin-bottom: 24px;
  transition: border 0.18s ease-in-out;

  ::placeholder {
    color: ${(p) => p.theme.colors.grey500};
  }

  &:hover {
    border: 1px solid ${(p) => p.theme.colors.grey500};
  }

  &:focus {
    border: 1px solid ${(p) => p.theme.colors.primary500};
  }
`;

const StyledTextarea = styled.textarea`
  background-color: ${(p) => p.theme.colors.white};
  width: 100%;
  font-size: 18px;
  line-height: 150%;
  color: ${(p) => p.theme.colors.black};
  border: 1px solid ${(p) => p.theme.colors.grey300};
  padding: 10px 24px;
  border-radius: 8px;
  appearance: none;
  margin-top: 8px;
  margin-bottom: 24px;
  transition: border 0.18s ease-in-out;

  ::placeholder {
    color: ${(p) => p.theme.colors.grey500};
  }

  &:hover {
    border: 1px solid ${(p) => p.theme.colors.grey500};
  }

  &:focus {
    border: 1px solid ${(p) => p.theme.colors.primary500};
  }
`;

export const ContactForm: FC<{}> = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    setError('');
    setSuccess('');

    try {
      const res = await fetch('/api/postmark', {
        method: 'post',
        body: JSON.stringify({
          name,
          url,
          email,
          message,
        }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (res.status === 204) {
        setSuccess('Your message has been sent!');
        setName('');
        setUrl('');
        setEmail('');
        setMessage('');
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
      <StyledForm>
        <form
          action-xhr="/api/mailchimp"
          method="post"
          target="_top"
          encType="application/x-www-form-urlencoded"
          onSubmit={onSubmit}
        >
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
              <StyledInput type="hidden" name="WHITEPAPERFORM" value={1} />
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
              <StyledInput
                type="text"
                name="name"
                id="name"
                required
                aria-label="Your name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
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
              <StyledInput
                type="email"
                name="email"
                id="email"
                aria-label="Your email"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
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
              <StyledInput
                type="text"
                name="url"
                id="url"
                required
                aria-label="Your webshop URL"
                onChange={(e) => {
                  setUrl(e.target.value);
                }}
                value={url}
                autoFocus
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
              <StyledTextarea
                name="message"
                id="message"
                aria-label="Your message"
                rows={4}
                required
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                value={message}
              />
            </Box>
          </Box>

          <Button
            variant="primary"
            aria-label="Submit"
            mt={1}
            input
            boxShadow="none"
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
      </StyledForm>
    </Box>
  );
};
