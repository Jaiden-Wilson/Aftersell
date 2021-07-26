import * as React from 'react';

function Customer() {
  return (
    <svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="32" stroke="currentColor" stroke-width="4" />
      <path
        d="M52.274 46.653c0-4.092-3.099-7.452-7.057-7.817-.03 1.43-2.13 2.586-4.717 2.586-2.586 0-4.686-1.156-4.717-2.586-3.957.365-7.056 3.725-7.056 7.817 0 4.335 3.48 4.325 7.771 4.325h8.005c4.292 0 7.771.01 7.771-4.325z"
        fill="currentColor"
      />
      <path
        d="M33.968 33.401c.17.046.35.072.535.072h.37c.77 3.502 2.997 6.035 5.627 6.035 2.361 0 4.394-2.046 5.342-4.998.446-.32.815-.685 1.086-1.088l.066-.011c.837-.21 1.456-.93 1.456-1.79v-1.455c0-.86-.619-1.581-1.456-1.79v-.225c0-3.408-2.923-6.181-6.513-6.181-3.591 0-6.513 2.772-6.513 6.18v.235c-.817.221-1.417.934-1.417 1.781v1.454c0 .848.6 1.56 1.417 1.781zm6.513-10.141c2.615 0 4.775 1.858 5.105 4.254-1.042-1.83-2.927-3.055-5.086-3.055-2.194 0-4.107 1.265-5.138 3.145.288-2.44 2.473-4.344 5.119-4.344zm-4.302 9.09s-.587-3.524.654-4.018c0 0 1.71.839 3.667.893 1.957-.054 3.669-.893 3.669-.893 1.24.494.651 4.017.651 4.018.306-.215.586-.328.815-.387v.084c-.04.391-.098.771-.176 1.14-.81.741-2.202 1.275-3.799 1.373a.836.836 0 00-.546-.206h-1.13c-.47 0-.85.386-.85.86s.381.859.85.859h1.13a.842.842 0 00.59-.242c1.183-.066 2.263-.335 3.16-.752-.925 2.111-2.532 3.51-4.363 3.51-2.631 0-4.806-2.886-5.146-6.63.23.058.515.172.824.39zM29.567 54.116l-1.255-.185a.772.772 0 01-.518-.38l-.562-1.15c-.087-.18-.232-.18-.32 0l-.561 1.15a.772.772 0 01-.518.38l-1.255.185c-.197.028-.241.167-.099.307l.908.894c.143.14.232.418.198.616l-.215 1.263c-.033.198.083.284.26.19l1.122-.597a.77.77 0 01.64 0l1.124.597c.176.093.292.008.259-.19l-.215-1.263a.787.787 0 01.198-.616l.908-.894c.143-.14.098-.28-.099-.307zM36.198 54.116l-1.255-.185a.772.772 0 01-.518-.38l-.561-1.15c-.089-.18-.233-.18-.32 0l-.562 1.15a.773.773 0 01-.518.38l-1.255.185c-.197.028-.242.167-.1.307l.91.894a.79.79 0 01.197.616l-.214 1.263c-.034.198.082.284.259.19l1.122-.597a.77.77 0 01.64 0l1.124.597c.176.093.292.008.259-.19l-.215-1.263a.79.79 0 01.198-.616l.908-.894c.143-.14.098-.28-.099-.307zM43.16 54.116l-1.256-.185a.77.77 0 01-.518-.38l-.561-1.15c-.088-.18-.232-.18-.32 0l-.562 1.15a.772.772 0 01-.518.38l-1.255.185c-.197.028-.242.167-.1.307l.91.894a.79.79 0 01.197.616l-.214 1.263c-.034.198.082.284.259.19l1.123-.597a.77.77 0 01.64 0l1.123.597c.177.093.293.008.26-.19l-.215-1.263a.786.786 0 01.197-.616l.909-.894c.142-.14.098-.28-.099-.307zM49.791 54.116l-1.255-.185a.77.77 0 01-.518-.38l-.561-1.15c-.089-.18-.233-.18-.32 0l-.562 1.15a.771.771 0 01-.518.38l-1.256.185c-.197.028-.24.167-.098.307l.908.894c.142.14.232.418.198.616l-.214 1.263c-.035.198.082.284.258.19l1.123-.597a.77.77 0 01.64 0l1.124.597c.176.093.293.008.259-.19l-.215-1.263a.79.79 0 01.198-.616l.909-.894c.142-.14.097-.28-.1-.307zM56.522 54.423c.143-.14.098-.28-.1-.307l-1.254-.185a.77.77 0 01-.518-.38l-.561-1.15c-.09-.18-.233-.18-.32 0l-.562 1.15a.772.772 0 01-.518.38l-1.256.185c-.197.028-.24.167-.099.307l.909.894c.142.14.231.418.197.616l-.214 1.263c-.034.198.083.284.259.19l1.123-.597a.77.77 0 01.64 0l1.123.597c.177.093.293.008.26-.19l-.215-1.263a.79.79 0 01.198-.616l.908-.894z"
        fill="currentColor"
      />
    </svg>
  );
}

const MemoCustomer = React.memo(Customer);
export default MemoCustomer;
