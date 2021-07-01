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
        d="M8 22C8.55228 22 9 21.5523 9 21C9 20.4477 8.55228 20 8 20C7.44772 20 7 20.4477 7 21C7 21.5523 7.44772 22 8 22Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17 22C17.5523 22 18 21.5523 18 21C18 20.4477 17.5523 20 17 20C16.4477 20 16 20.4477 16 21C16 21.5523 16.4477 22 17 22Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1 5H4.27273L6.46545 15.7117C6.54027 16.08 6.7452 16.4109 7.04436 16.6464C7.34351 16.8818 7.71784 17.0069 8.10182 16.9997H16.0545C16.4385 17.0069 16.8129 16.8818 17.112 16.6464C17.4112 16.4109 17.6161 16.08 17.6909 15.7117L19 8.9999H5.09091"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9 3L12 6L15 3"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

const MemoCart = React.memo(Cart);
export default MemoCart;
