import * as React from 'react';

function Money() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 1v22M17 5H9.5a3.5 3.5 0 100 7h5a3.5 3.5 0 110 7H6"
        stroke="currentColor"
      />
    </svg>
  );
}

const MemoMoney = React.memo(Money);
export default MemoMoney;
