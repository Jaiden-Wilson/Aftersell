import { Text, css, SystemProps } from '@storyofams/react-ui';
import { useRouter } from 'next/router';

import { Link } from '../Link';

type NavLinkProps = {
  href: string;
  text: string;
  onClick?(): void;
} & SystemProps;

export const NavLink = ({ href, text, onClick, ...props }: NavLinkProps) => {
  const router = useRouter();

  return (
    <Link
      href={href}
      onClick={onClick}
      stylingProps={{
        css: css({
          fontSize: [2.25, 2.25, 1.5],
          textTransform: 'uppercase',
          textAlign: ['left', 'left', 'center'],
          color: router?.asPath === href ? 'black' : 'grey500',
          a: {
            display: 'flex',
            flexDirection: ['row', 'row', 'column'],
            alignItems: 'center',
          },
          '&:hover': {
            color: 'black',
          },
          ...props,
        }),
      }}
    >
      <Text>{text}</Text>
    </Link>
  );
};
