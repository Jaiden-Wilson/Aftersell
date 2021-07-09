import * as React from 'react';

function Chart() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 20V10M18 20V4M6 20v-4" stroke="currentColor" />
    </svg>
  );
}

const MemoChart = React.memo(Chart);
export default MemoChart;
