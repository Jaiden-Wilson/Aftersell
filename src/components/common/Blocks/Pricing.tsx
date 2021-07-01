import { Icon, Text, Box, Stack, SystemProps } from '@storyofams/react-ui';
import { Heading } from '~components';
import { Tick } from '~components/common/Icon/library';

import { Divider } from '../Divider';

interface PricingProps extends SystemProps {
  content: any;
}

export const Pricing = ({ content, ...props }: PricingProps) => {
  console.log(content);

  return (
    <Box width="100%" {...props}>
      <Stack
        alignItems={['center', 'center', 'flex-start']}
        flexDirection={['column', 'column', 'row']}
        space={3}
      >
        {content?.map(({ content }) => (
          <Stack
            space={2}
            boxShadow="md"
            bg="white"
            p={4}
            width={['100%', '100%', '33.33%']}
            textAlign="left"
            borderRadius="md"
            flexDirection="column"
            key={content?.uid}
            maxWidth="400px"
          >
            <Heading as="h4" variant="h5" lineHeight="normal">
              {content?.name}
            </Heading>
            <Heading
              as="h5"
              variant="h3"
              fontWeight="medium"
              lineHeight="normal"
            >
              {content?.price}$ / month
            </Heading>
            <Divider />
            {content?.list?.map(({ text }) => (
              <Text display="flex" as="p">
                <Icon icon={<Tick />} color="white" fontSize={3} mr={1.5} />
                {text}
              </Text>
            ))}
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};
