import { Stack, SystemProps } from '@storyofams/react-ui';
import { Button } from '~components';
import { getLinkProps } from '~lib';

interface ContentButtonProps extends SystemProps {
  content: any;
  background?: 'none' | 'color' | 'gradient';
}

export const ContentButton = ({ content, background }: ContentButtonProps) => {
  return (
    <Stack alignItems="center" space={2}>
      {/* {content?.[0]?.link_url && (
        <Button
          variant={background === 'gradient' ? 'secondary' : 'primary'}
          to={getLinkProps(content?.[0]?.link_url)}
        >
          {content?.[0]?.link_label}
        </Button>
      )}
      {content?.[1]?.link_url && (
        <Button
          variant={background === 'gradient' ? 'secondary-outline' : 'outline'}
          to={getLinkProps(content?.[1]?.link_url)}
        >
          {content?.[1]?.link_label}
        </Button>
      )} */}
    </Stack>
  );
};
