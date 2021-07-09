import * as React from 'react';

function Conversion() {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25.76 26.96c-3.28 3.44-5.28 8.16-5.28 13.28 0 10.72 8.72 19.44 19.44 19.44s19.52-8.72 19.52-19.44S50.72 20.8 40 20.8c-5.6 0-10.64 2.4-14.24 6.16zm7.44 20.96c.16-.64.32-1.28.56-1.92.24-.72.4-.8 1.12-.48 1.12.64 2.4.96 3.68 1.12.8.08 1.6 0 2.4-.32 1.44-.64 1.68-2.32.48-3.28-.4-.32-.88-.56-1.36-.8-1.28-.56-2.56-.96-3.76-1.68-1.92-1.12-3.12-2.72-2.96-5.04.16-2.64 1.68-4.32 4.08-5.2.96-.4 1.04-.32 1.04-1.36v-1.04c0-.8.16-.96.96-.96h.72c1.68 0 1.68 0 1.68 1.68 0 1.2 0 1.2 1.2 1.36.88.16 1.76.4 2.56.8.48.24.64.56.48 1.04-.24.72-.4 1.44-.64 2.16-.24.64-.4.8-1.12.48-1.28-.64-2.64-.88-4.08-.8-.4 0-.72.08-1.12.24-1.28.56-1.44 1.92-.4 2.8.56.4 1.12.72 1.76 1.04 1.12.48 2.24.88 3.28 1.44 3.36 1.84 4.24 6 1.92 8.88-.88 1.04-1.92 1.76-3.28 2.08-.56.16-.8.48-.8 1.04v1.76c0 .48-.24.8-.8.8h-1.84c-.56 0-.8-.32-.8-.88V51.6c0-.96 0-.96-.96-1.12-1.12-.16-2.24-.48-3.28-.96-.88-.48-.96-.72-.72-1.6zm-20.32-3.36l-2.64-2.64C11.12 57.6 24.08 70.08 40 70.08h2v4h-2c-9.36 0-17.76-3.76-23.92-9.92-5.76-5.84-9.44-13.68-9.84-22.32l-2.72 2.72-2.8-2.8 5.6-5.6.08-.08 1.92-1.92 1.92 1.92.08.08 5.6 5.6-3.04 2.8zm54.24-8.64l2.64 2.64C68.88 22.88 55.92 10.4 40 10.4h-2v-4h2c9.36 0 17.76 3.76 23.92 9.92 5.76 5.76 9.44 13.6 9.84 22.32l2.72-2.72 2.8 2.8-5.6 5.6-.08.08-1.92 1.92-1.92-1.92-.08-.08-5.6-5.6 3.04-2.8z"
        fill="currentColor"
      />
    </svg>
  );
}

const MemoConversion = React.memo(Conversion);
export default MemoConversion;
