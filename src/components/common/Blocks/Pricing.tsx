import { Icon, Text, Box, Stack, SystemProps } from '@storyofams/react-ui';
import { Fade } from 'react-awesome-reveal';

import { Heading } from '~components';
import { Tick } from '~components/common/Icon/library';

import { Divider } from '../Divider';

interface PricingProps extends SystemProps {
  content: any;
}

export const Pricing = ({ content, ...props }: PricingProps) => {
  return (
    <Box width="100%" {...props}>
      <Stack
        alignItems={['center', 'center', 'flex-start']}
        flexDirection={['column', 'column', 'row']}
        space={3}
        width="100%"
      >
        <Fade
          duration={640}
          fraction={0.3}
          cascade
          damping={0.2}
          direction="up"
          triggerOnce
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {content?.map(({ content: itemContent, uuid }) => (
            <Stack
              space={2}
              boxShadow="md"
              bg="white"
              p={4}
              width="100%"
              textAlign="left"
              borderRadius="md"
              flexDirection="column"
              key={uuid}
              maxWidth="400px"
            >
              <Heading as="h4" variant="h5" lineHeight="normal">
                {itemContent?.name}
              </Heading>
              <Heading
                as="h5"
                variant="h3"
                fontWeight="medium"
                lineHeight="normal"
              >
                {itemContent?.price}$ / month
              </Heading>
              <Divider />
              {itemContent?.list?.map(({ text, _uid }) => (
                <Text display="flex" as="p" key={`${_uid}-list-item`}>
                  <Icon
                    as="span"
                    icon={<Tick />}
                    color="white"
                    fontSize={3}
                    mr={1.5}
                  />
                  {text}
                </Text>
              ))}
            </Stack>
          ))}
        </Fade>
      </Stack>
    </Box>
  );
};
