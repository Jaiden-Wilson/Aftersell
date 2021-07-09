import * as React from 'react';

function Cart() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 22a1 1 0 100-2 1 1 0 000 2zM17 22a1 1 0 100-2 1 1 0 000 2zM1 5h3.273l2.192 10.712c.075.368.28.699.58.934.299.236.673.36 1.057.354h7.953a1.66 1.66 0 001.057-.354c.3-.235.504-.566.579-.934L19 9H5.09M9 3l3 3 3-3"
        stroke="currentColor"
      />
    </svg>
  );
}

const MemoCart = React.memo(Cart);
export default MemoCart;
