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
      <path d="M.334 48V0l32 24-32 24z" fill="#fff" />
    </svg>
  );
}

const MemoPlay = React.memo(Play);
export default MemoPlay;
