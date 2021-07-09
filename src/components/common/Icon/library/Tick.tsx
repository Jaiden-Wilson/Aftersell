import * as React from 'react';

function Tick() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20 6L9 17l-5-5" stroke="#87F0BE" />
    </svg>
  );
}

const MemoTick = React.memo(Tick);
export default MemoTick;
