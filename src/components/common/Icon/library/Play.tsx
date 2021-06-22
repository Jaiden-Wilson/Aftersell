import * as React from 'react';

function Play() {
  return (
    <svg
      width="33"
      height="48"
      viewBox="0 0 33 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.33374 48.0005V0.000488281L32.3337 24.0005L0.33374 48.0005Z"
        fill="white"
      />
    </svg>
  );
}

const MemoPlay = React.memo(Play);
export default MemoPlay;
