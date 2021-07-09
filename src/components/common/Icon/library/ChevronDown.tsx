import * as React from 'react';

function ChevronDown() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 6l4 4 4-4" stroke="currentColor" />
    </svg>
  );
}

const MemoChevronDown = React.memo(ChevronDown);
export default MemoChevronDown;
