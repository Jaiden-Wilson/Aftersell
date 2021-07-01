import * as React from 'react';

function Klaviyo() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.44706 11.338L11.3076 5.17551C11.7395 4.9415 12.2633 4.9415 12.6952 5.17551L22.5558 11.338C22.9509 11.52 23.1072 11.9621 22.9234 12.3261C22.8498 12.4735 22.7212 12.5948 22.5558 12.6728L21.2325 13.4962C18.0069 8.68581 11.2433 7.24702 6.14299 10.2979C4.77373 11.1127 3.61583 12.2048 2.752 13.4962L1.42868 12.6728C1.04272 12.4821 0.886493 12.0314 1.08867 11.6674C1.17137 11.5287 1.29084 11.4074 1.44706 11.338ZM11.9968 11.2687C9.1664 11.2774 6.53815 12.6468 5.03104 14.909L7.30089 16.3304C8.86314 13.8949 12.2174 13.1062 14.8089 14.5796C15.5716 15.013 16.2057 15.6111 16.6652 16.3304L18.935 14.909C17.4463 12.6381 14.8181 11.26 11.9968 11.2687ZM11.9968 16.4171C10.9951 16.4258 10.0762 16.9285 9.58913 17.7519L11.1146 18.688C11.3627 18.8873 11.6752 18.9913 11.9968 19C12.3185 19 12.6401 18.896 12.879 18.688L14.4045 17.7519C13.9175 16.9285 12.9985 16.4171 11.9968 16.4171Z"
        fill="currentColor"
      />
    </svg>
  );
}

const MemoKlaviyo = React.memo(Klaviyo);
export default MemoKlaviyo;