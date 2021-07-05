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
          fontSize: [2.25, 2.25, 2],
          textAlign: ['left', 'left', 'center'],
          color:
            router?.asPath === href
              ? [
                  'primary500',
                  'primary500',
                  colorChange ? 'white' : 'primary500',
                ]
              : ['black', 'black', colorChange ? 'white' : 'grey500'],
          a: {
            display: 'flex',
            flexDirection: ['row', 'row', 'column'],
            alignItems: 'center',
            position: 'relative',

            '&::before': {
              content: "''",
              position: 'absolute',
              left: '50%',
              bottom: '-4px',
              width: router?.asPath === href ? '100%' : '0',
              height: '2px',
              borderRadius: '1px',
              transition:
                'width 0.18s ease-in-out, background-color 0.18s ease-in-out',
              bg: [
                router?.asPath === href ? 'primary500' : 'transparent',
                router?.asPath === href ? 'primary500' : 'transparent',
                router?.asPath === href
                  ? colorChange
                    ? 'white'
                    : 'primary500'
                  : 'transparent',
              ],
              transform: 'translateX(-50%)',
            },
          },
          '&:hover': {
            color: ['black', 'black', colorChange ? 'primary200' : 'black'],

            '& a::before': {
              width: '100%',
              bg: [
                'primary500',
                'primary500',
                colorChange ? 'white' : 'primary500',
              ],
            },
          },
          ...props,
        }),
      }}
    >
      <Text as={'a' as any}>{text}</Text>
    </Link>
  );
};
