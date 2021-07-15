import * as React from 'react';

function Logo({ color }: { color: boolean }) {
  return (
    <svg
      width="731"
      height="240"
      viewBox="0 0 731 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="94"
          y1="0"
          x2="94"
          y2="188"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#6138FE" />
          <stop offset="1" stop-color="#F087B3" />
        </linearGradient>
      </defs>

      <path
        d="M426.2 0h-25.92v62.05h16.22V42.9h9.7c4.57 0 8.72-.88 12.24-2.66a19.7 19.7 0 008.2-7.44c1.94-3.2 2.9-7 2.9-11.35 0-4.25-.96-8.06-2.9-11.26a19.9 19.9 0 00-8.2-7.53A27.1 27.1 0 00426.2 0zm-9.7 29.6V13.3h8.2c2.55 0 4.58.8 6.07 2.21 1.5 1.42 2.3 3.46 2.3 5.94 0 2.57-.8 4.61-2.3 6.03-1.5 1.42-3.52 2.13-6.08 2.13h-8.2zM454.85 26.86c-1.94 3.54-2.9 7.71-2.9 12.5 0 4.78.96 8.86 2.99 12.32a19.77 19.77 0 008.9 8.06c3.88 1.95 8.46 2.84 13.84 2.84 4.05 0 7.66-.7 10.83-2.13a18.52 18.52 0 007.5-5.85c1.85-2.48 3-5.14 3.43-8.15h-14.98c-.88 3.37-3.52 5.05-7.84 5.05-5.11 0-8.11-2.84-8.81-8.5v-.19h31.72c.26-1.41.44-3.01.44-4.96 0-4.34-1.06-8.15-3.08-11.52a21.1 21.1 0 00-8.64-7.8 29.05 29.05 0 00-12.69-2.75c-4.76 0-8.9.97-12.43 2.92a20.44 20.44 0 00-8.28 8.16zm30.05 6.56h-16.92a7.82 7.82 0 012.64-4.97c1.42-1.15 3.35-1.77 5.73-1.77 2.3 0 4.14.62 5.64 1.77a8.1 8.1 0 012.91 4.97zM536.26 16.31h-2.2c-3.18 0-5.82.62-7.76 1.68a13.77 13.77 0 00-5.02 5.06l-1.24-6.74h-14v45.74h15.24V40.07c0-6.74 3.08-10.2 9.25-10.2h5.73V16.31zM544.93 3.46c-2.55 2.3-3.79 5.5-3.79 9.48v49.1h15.25V29h10.66V16.3H556.4v-.53c0-1.95.97-3.02 3.09-3.02h7.57V0h-11.19c-4.76 0-8.37 1.15-10.93 3.46zM571.2 26.86c-1.93 3.54-2.9 7.71-2.9 12.5 0 4.78.97 8.86 3 12.32a19.78 19.78 0 008.9 8.06c3.87 1.95 8.45 2.84 13.83 2.84 4.05 0 7.67-.7 10.84-2.13a18.52 18.52 0 007.49-5.85 17.6 17.6 0 003.44-8.15h-14.98c-.89 3.37-3.53 5.05-7.85 5.05-5.11 0-8.1-2.84-8.81-8.5v-.19h31.72c.27-1.41.45-3.01.45-4.96 0-4.34-1.06-8.15-3.09-11.52a21.1 21.1 0 00-8.64-7.8 29.05 29.05 0 00-12.69-2.75c-4.75 0-8.9.97-12.42 2.92a20.44 20.44 0 00-8.29 8.16zm30.05 6.56h-16.91a7.82 7.82 0 012.64-4.97c1.4-1.15 3.35-1.77 5.73-1.77 2.29 0 4.14.62 5.64 1.77a8.1 8.1 0 012.9 4.97zM660.54 57.62c4.06-3.28 6.44-7.9 7.32-13.74H652a8.33 8.33 0 01-2.47 4.78 6.89 6.89 0 01-4.85 1.69 7.6 7.6 0 01-6.34-3.02c-1.59-2.03-2.3-4.78-2.3-8.15s.71-6.03 2.3-8.07a7.67 7.67 0 016.34-3.1c1.85 0 3.44.62 4.67 1.69a8.81 8.81 0 012.56 4.43h15.86c-.88-5.68-3.26-10.2-7.31-13.48-4.06-3.19-9.35-4.87-15.78-4.87-4.93 0-9.25.97-12.86 2.83a20.14 20.14 0 00-8.38 8.16c-1.94 3.55-2.9 7.71-2.9 12.41 0 4.79.96 8.86 2.9 12.41a20.14 20.14 0 008.38 8.15c3.6 1.95 7.93 2.84 12.86 2.84 6.52 0 11.81-1.6 15.86-4.96zM676.41 28.99V48.3c0 4.52 1.15 7.98 3.53 10.28 2.38 2.3 5.72 3.46 10.13 3.46h11.37V49.37h-5.64c-1.5 0-2.56-.26-3.17-.97-.7-.62-.97-1.69-.97-3.2V29h9.78V16.3h-9.78V3.46H676.4V16.3h-7.14v12.68h7.14zM426.2 88.64h-25.92v62.05h16.22v-19.15h9.7c4.57 0 8.72-.88 12.24-2.65a19.7 19.7 0 008.2-7.45c1.94-3.2 2.9-7 2.9-11.35 0-4.25-.96-8.06-2.9-11.25a19.9 19.9 0 00-8.2-7.54 27.1 27.1 0 00-12.25-2.66zm-9.7 29.6v-16.3h8.2c2.55 0 4.58.8 6.07 2.21 1.5 1.42 2.3 3.46 2.3 5.94 0 2.57-.8 4.61-2.3 6.03-1.5 1.42-3.52 2.13-6.08 2.13h-8.2zM485.74 104.95h-2.2c-3.18 0-5.82.62-7.76 1.69a13.76 13.76 0 00-5.02 5.05l-1.23-6.74H455.5v45.74h15.25v-21.98c0-6.74 3.08-10.2 9.25-10.2h5.73v-13.56zM499.55 148.39c3.7 1.95 8.1 2.83 13.13 2.83 4.93 0 9.34-.88 13.04-2.83a21 21 0 008.64-8.25 24.33 24.33 0 003.08-12.32c0-4.6-1.06-8.77-3.08-12.32a20.79 20.79 0 00-8.64-8.15c-3.7-1.95-8.1-2.93-13.04-2.93-5.02 0-9.43.97-13.13 2.93a20.79 20.79 0 00-8.64 8.15c-2.03 3.55-3 7.71-3 12.32 0 4.7.97 8.78 3 12.32a21 21 0 008.64 8.25zm19.91-12.41c-1.67 2.04-3.96 3.01-6.78 3.01-2.9 0-5.2-.97-6.79-3.01-1.67-2.04-2.46-4.79-2.46-8.16s.79-6.03 2.46-8.06c1.59-2.04 3.88-3.1 6.79-3.1a8.4 8.4 0 016.78 3.1c1.6 2.03 2.47 4.7 2.47 8.06 0 3.37-.88 6.12-2.47 8.16zM590.35 88.64H575.1V110c-3.26-3.72-7.49-5.58-12.77-5.58-3.97 0-7.5.97-10.67 2.84a19.3 19.3 0 00-7.31 8.15 27.53 27.53 0 00-2.65 12.32c0 4.61.88 8.78 2.65 12.32a19.54 19.54 0 007.31 8.25 19.45 19.45 0 0010.67 2.92c5.55 0 9.95-2.12 13.3-6.47l1.32 5.94h13.4V88.64zm-17.45 47.34c-1.59 2.12-3.79 3.1-6.6 3.1-2.83 0-5.03-.98-6.62-3.1-1.67-2.04-2.47-4.79-2.47-8.16s.8-6.03 2.47-8.15a7.94 7.94 0 016.61-3.1 7.94 7.94 0 016.61 3.1c1.59 2.12 2.38 4.78 2.38 8.15s-.8 6.12-2.38 8.16zM643.14 104.95H627.9v22.34c0 3.72-.7 6.65-2.12 8.6a6.94 6.94 0 01-5.9 2.92c-2.64 0-4.5-.88-5.55-2.83-1.15-1.86-1.68-4.79-1.68-8.69v-22.34h-15.24v24.47c0 7.98 1.67 13.65 5.1 16.93 3.36 3.28 7.68 4.87 12.96 4.87 2.91 0 5.38-.44 7.4-1.41 2.03-.98 3.88-2.4 5.56-4.35l1.14 5.23h13.57v-45.74zM689.2 146.26c4.06-3.28 6.44-7.89 7.32-13.74h-15.87a8.33 8.33 0 01-2.46 4.79 6.89 6.89 0 01-4.85 1.68 7.6 7.6 0 01-6.35-3.01c-1.58-2.04-2.29-4.79-2.29-8.16s.7-6.03 2.3-8.06a7.67 7.67 0 016.34-3.1c1.85 0 3.44.61 4.67 1.68a8.82 8.82 0 012.56 4.43h15.86c-.88-5.67-3.26-10.2-7.31-13.47-4.06-3.2-9.35-4.88-15.78-4.88-4.94 0-9.25.97-12.87 2.84a20.12 20.12 0 00-8.37 8.15c-1.94 3.55-2.9 7.71-2.9 12.41 0 4.79.96 8.87 2.9 12.41a20.13 20.13 0 008.37 8.16c3.62 1.95 7.93 2.83 12.87 2.83 6.52 0 11.8-1.6 15.86-4.96zM705.07 117.63v19.32c0 4.52 1.15 7.98 3.52 10.28 2.38 2.3 5.73 3.46 10.14 3.46h11.37v-12.67h-5.64c-1.5 0-2.56-.27-3.17-.98-.7-.62-.97-1.68-.97-3.19v-16.22h9.78v-12.68h-9.78V92.1h-15.25v12.85h-7.14v12.68h7.14zM400.28 177.28v62.05h16.22v-24.1h21.06v-12.95H416.5v-11.17h25.82v-13.83h-42.04zM461.77 176.13a8.5 8.5 0 00-6.08-2.4c-2.46 0-4.5.8-6.08 2.4a7.92 7.92 0 00-2.47 5.94c0 2.4.8 4.34 2.47 5.94a8.21 8.21 0 006.08 2.4c2.38 0 4.41-.8 6.08-2.4a8.12 8.12 0 002.47-5.94c0-2.3-.88-4.34-2.47-5.94zm-13.74 17.46v45.74h15.24V193.6h-15.24zM512.24 198.03c-3.43-3.28-7.75-4.97-12.95-4.97-3.17 0-5.82.53-7.93 1.6a16.11 16.11 0 00-5.64 4.43l-1.15-5.5h-13.4v45.74h15.25v-23.66c0-3.37.7-5.94 2.12-7.72 1.4-1.77 3.52-2.66 6.17-2.66 2.64 0 4.5.9 5.73 2.58 1.14 1.77 1.76 4.34 1.76 7.8v23.66h15.24v-24.46c0-7.98-1.76-13.56-5.2-16.84zM571.33 177.28h-15.25v21.37c-3.26-3.73-7.49-5.59-12.78-5.59-3.96 0-7.48.98-10.66 2.84a19.3 19.3 0 00-7.31 8.15 27.51 27.51 0 00-2.65 12.32c0 4.62.89 8.78 2.65 12.33a19.55 19.55 0 007.31 8.24 19.46 19.46 0 0010.66 2.93c5.56 0 9.96-2.13 13.31-6.47l1.32 5.93h13.4v-62.05zm-17.45 47.34c-1.59 2.13-3.79 3.1-6.6 3.1-2.83 0-5.03-.97-6.62-3.1-1.67-2.04-2.47-4.79-2.47-8.16 0-3.36.8-6.02 2.47-8.15a7.94 7.94 0 016.61-3.1 7.94 7.94 0 016.61 3.1c1.59 2.13 2.38 4.79 2.38 8.15 0 3.37-.8 6.12-2.38 8.16zM580.33 204.14c-1.94 3.55-2.91 7.72-2.91 12.5 0 4.79.97 8.87 3 12.32a19.77 19.77 0 008.9 8.07c3.87 1.95 8.46 2.84 13.83 2.84 4.06 0 7.67-.71 10.84-2.13a18.52 18.52 0 007.5-5.85c1.84-2.48 2.99-5.14 3.43-8.16h-14.98c-.88 3.37-3.53 5.06-7.85 5.06-5.1 0-8.1-2.84-8.8-8.51v-.18H625c.26-1.42.44-3.02.44-4.97 0-4.34-1.06-8.15-3.09-11.52a21.1 21.1 0 00-8.63-7.8 29.07 29.07 0 00-12.7-2.75c-4.75 0-8.9.98-12.42 2.93a20.44 20.44 0 00-8.28 8.15zm30.05 6.56h-16.92a7.82 7.82 0 012.64-4.96c1.41-1.15 3.35-1.78 5.73-1.78 2.3 0 4.14.63 5.64 1.78a8.1 8.1 0 012.9 4.96zM661.74 193.6h-2.2c-3.18 0-5.82.62-7.76 1.68a13.76 13.76 0 00-5.03 5.05l-1.23-6.74h-14.01v45.74h15.24v-21.98c0-6.74 3.09-10.2 9.26-10.2h5.73V193.6zM240.37 147.61c0-10.2-8.27-18.45-18.49-18.45h-73.95a18.47 18.47 0 00-18.5 18.45v73.8c0 10.2 8.28 18.46 18.5 18.46h73.95a18.47 18.47 0 0018.5-18.46v-73.8z"
        fill={color ? '#65666B' : 'currentColor'}
      />
      <path
        d="M240.37 147.61c0-10.2-8.27-18.45-18.49-18.45h-73.95a18.47 18.47 0 00-18.5 18.45v73.8c0 10.2 8.28 18.46 18.5 18.46h73.95a18.47 18.47 0 0018.5-18.46v-73.8z"
        fill={color ? 'url(#paint0_linear)' : 'currentColor'}
      />
      <path
        d="M110.95 93.17c0 26.52 18.49 35.98 36.51 35.98 18.03 0-18.02 35.98-18.02 18 0-18-18.5-36.45-36.98-36.45-18.5 0 18.49-44.04 18.49-17.53z"
        fill={color ? 'url(#paint0_linear)' : 'currentColor'}
      />
      <path
        d="M110.94 147.61c0-10.2-8.28-18.45-18.5-18.45H18.5A18.47 18.47 0 000 147.6v73.8c0 10.2 8.28 18.46 18.49 18.46h73.96a18.47 18.47 0 0018.49-18.46v-73.8zM240.37 18.45A18.47 18.47 0 00221.88 0h-73.95a18.47 18.47 0 00-18.5 18.45v73.8a18.47 18.47 0 0018.5 18.46h73.95a18.47 18.47 0 0018.5-18.45v-73.8zM110.95 18.45A18.47 18.47 0 0092.45 0H18.5A18.47 18.47 0 000 18.45v73.8a18.47 18.47 0 0018.5 18.46h73.96a18.47 18.47 0 0018.49-18.45v-73.8z"
        fill={color ? 'url(#paint0_linear)' : 'currentColor'}
      />
      <path
        stroke={color ? '#CACBD2' : 'currentColor'}
        stroke-width="7"
        d="M323.83 0v239.87"
      />
    </svg>
  );
}

const MemoLogo = React.memo(Logo);
export default MemoLogo;
