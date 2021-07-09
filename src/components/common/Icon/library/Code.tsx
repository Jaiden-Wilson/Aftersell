import * as React from 'react';

function Code() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" stroke="currentColor" />
    </svg>
  );
}

const MemoCode = React.memo(Code);
export default MemoCode;
