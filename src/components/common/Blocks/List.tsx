import {
  Icon as IconComponent,
  Flex,
  Stack,
  Text,
  Grid,
  SystemProps,
  css,
} from '@storyofams/react-ui';
import { Fade } from 'react-awesome-reveal';
import { Heading } from '~components';

import {
  Arrows,
  Conversion,
  Returns,
  Customer,
  Email,
  Flow,
  Klaviyo,
  Money,
  Search,
  Cart,
  Chart,
  Code,
} from '~components/common/Icon/library';

interface ListProps extends SystemProps {
  content: any;
  background?: 'none' | 'color' | 'gradient';
}

export const Icon = ({ type, ...props }) => {
  let stickerProps;

  switch (type) {
    case 'email':
      stickerProps = {
        icon: Email,
      };
      break;
    case 'flow':
      stickerProps = {
        icon: Flow,
      };
      break;
    case 'klaviyo':
      stickerProps = {
        icon: Klaviyo,
      };
      break;
    case 'money':
      stickerProps = {
        icon: Money,
      };
      break;
    case 'search':
      stickerProps = {
        icon: Search,
      };
      break;
    case 'customer':
      stickerProps = {
        icon: Customer,
      };
      break;
    case 'arrows':
      stickerProps = {
        icon: Arrows,
      };
      break;
    case 'cart':
      stickerProps = {
        icon: Cart,
      };
      break;
    case 'chart':
      stickerProps = {
        icon: Chart,
      };
      break;
    case 'code':
      stickerProps = {
        icon: Code,
      };
      break;
    case 'returns':
      stickerProps = {
        icon: Returns,
      };
      break;
    case 'conversion':
      stickerProps = {
        icon: Conversion,
      };
  }

  return <IconComponent {...stickerProps} {...props} />;
};

export const List = ({ content }: ListProps) => {
  return (
    <Grid
      width="100%"
      alignItems={'center'}
      rowSize={[1, 2, 3]}
      rowGap={[2, 6]}
      columnGap={2}
      css={css({
        '> div > div': {
          justifyContent: content?.length > 3 ? 'flex-start' : 'center',
          textAlign: content?.length > 3 ? 'left' : 'center',
        },
      })}
    >
      <Fade
        duration={640}
        fraction={0.3}
        cascade={content?.length < 4 ? true : false}
        damping={0.2}
        direction="up"
        triggerOnce
        style={{
          width: '100%',
          display: 'flex',
        }}
      >
        {content?.map(({ icon, title, description, _uid }) => (
          <Stack key={_uid} flexDirection="column" space={2} maxWidth="400px">
            <Flex
              alignItems={content?.length > 3 ? 'flex-start' : 'center'}
              flexDirection={content?.length > 3 ? 'row' : 'column'}
            >
              {icon && (
                <Icon
                  type={icon}
                  fontSize={3}
                  color="primary500"
                  mr={content?.length > 3 && 1.5}
                  mb={content?.length < 4 && [2, 3]}
                  mt="-1px"
                />
              )}
              <Heading
                as="h5"
                variant="h5"
                fontSize={content?.length > 3 ? [2, 2.5] : [2, 3]}
              >
                {title}
              </Heading>
            </Flex>
            <Text as="p">{description}</Text>
          </Stack>
        ))}
      </Fade>
    </Grid>
  );
};
