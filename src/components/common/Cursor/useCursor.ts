import { useContext } from 'react';

import { CursorContext } from '.';

export const useCursor = () => {
  const context = useContext(CursorContext);

  return {
    ...context,
    cursor: context?.cursor?.current,
  };
};
