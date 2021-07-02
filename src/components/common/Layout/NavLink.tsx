import { Text, css, SystemProps } from '@storyofams/react-ui';
import { useRouter } from 'next/router';

import { Link } from '../Link';

type NavLinkProps = {
  href: string;
  text: string;
  onClick?(): void;
  colorChange?: boolean;
} & SystemProps;

export const NavLink = ({
  href,
  text,
  onClick,
  colorChange,
  ...props
}: NavLinkProps) => {
  const router = useRouter();

  return (
    <Link
      href={href}
      onClick={onClick}
      stylingProps={{
        css: css({
          fontSize: 2,
          textAlign: ['left', 'left', 'center'],
          color:
            router?.asPath === href
              ? colorChange
                ? 'white'
                : 'black'
              : colorChange
              ? 'white'
              : 'grey500',
          a: {
            display: 'flex',
            flexDirection: ['row', 'row', 'column'],
            alignItems: 'center',
            borderBottomStyle: 'solid',
            borderBottomWidth: '1px',
            borderBottomColor:
              router?.asPath === href
                ? colorChange
                  ? 'white'
                  : 'black'
                : 'transparent',
          },
          '&:hover': {
            color: colorChange ? 'primary200' : 'black',
          },
          ...props,
        }),
      }}
    >
      <Text as={'a' as any}>{text}</Text>
    </Link>
  );
};
