import * as React from 'react';

function Email() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.89 2.86H2.11C.947 2.86 0 3.805 0 4.968V19.03c0 1.159.944 2.11 2.11 2.11h19.78c1.16 0 2.11-.944 2.11-2.11V4.97c0-1.159-.944-2.11-2.11-2.11zm-.29 1.406l-9.555 9.554-9.638-9.554H21.6zM1.405 18.74V5.253l6.773 6.715-6.773 6.772zm.995.994l6.776-6.776 2.375 2.354a.703.703 0 00.992-.002l2.315-2.316 6.74 6.74H2.401zm20.193-.994L15.854 12l6.74-6.74v13.48z"
        fill="currentColor"
      />
    </svg>
  );
}

const MemoEmail = React.memo(Email);
export default MemoEmail;
