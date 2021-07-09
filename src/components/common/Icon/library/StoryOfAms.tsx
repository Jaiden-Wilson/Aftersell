import * as React from 'react';

function StoryOfAms() {
  return (
    <svg
      width="76"
      height="48"
      viewBox="0 0 76 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.779 47.584h-5.737l-1.716-4.608h-8.98L5.63 47.584H0L8.659 25.64h6.434l8.686 21.943zM9.088 38.239h5.495l-2.734-7.392-2.761 7.392zM52.541 47.584h-5.388v-15.02l-4.53 15.02h-5.737l-4.53-14.967v14.967h-5.39V25.64h7.641l5.147 15.201 5.12-15.2h7.64v21.942h.027zM73.265 31.862a12.876 12.876 0 00-6.46-1.848c-2.038 0-3.539.676-3.539 1.978 0 1.38 2.145 1.718 4.638 2.134l.938.157C73.239 35.01 76 37.015 76 40.608 76 45.839 71.362 48 66.537 48c-3.754 0-7.453-.963-9.946-2.785l2.707-4.27a12.923 12.923 0 007.292 2.318c2.037 0 3.592-.677 3.592-2.03 0-1.354-1.528-1.693-4.477-2.135l-1.126-.182c-4.637-.703-7.157-2.733-7.077-6.69.08-4.269 3.834-6.95 9.115-6.95 3.056 0 5.71.495 9.115 2.317l-2.467 4.269zM18.445 7.005a2.952 2.952 0 00-1.475.443c-.59.39-.804.885-.536 1.275.241.338.67.26 1.287-.026l.321-.156c.778-.365 1.662-.547 2.199.234.59.86.134 1.848-.805 2.473a3.288 3.288 0 01-2.144.572v-.806a2.63 2.63 0 001.689-.443c.563-.364.858-.91.59-1.301-.242-.339-.67-.26-1.368.078l-.375.182c-.697.338-1.555.469-2.091-.312-.59-.86-.16-1.822.804-2.447a3.347 3.347 0 011.877-.573l.027.807zM24.717 3.517l-1.555.677 1.85 3.93-.777.338-1.85-3.93-1.555.677-.349-.703 3.86-1.718.376.729zM33.269 2.973a2.601 2.601 0 01-.081 1.553 2.684 2.684 0 01-.957 1.248 2.82 2.82 0 01-3.063.137 2.705 2.705 0 01-1.07-1.158 2.606 2.606 0 01-.227-1.54 2.645 2.645 0 01.694-1.402c.369-.39.849-.665 1.38-.79a2.706 2.706 0 012.105.264 2.6 2.6 0 01.793.719c.21.29.354.62.425.969zM28.792 4.04c.095.347.293.658.57.896a1.926 1.926 0 002.058.277c.332-.156.61-.404.8-.712a1.78 1.78 0 00-.107-2.015 1.873 1.873 0 00-.87-.629 1.93 1.93 0 00-1.084-.056c-.247.05-.48.15-.686.292a1.783 1.783 0 00-.506.535 1.728 1.728 0 00-.175 1.412zM38.604.004c1.206-.052 1.877.468 1.903 1.405.027.86-.643 1.458-1.688 1.536l1.796 2.082-1.046.026-1.742-2.082-.43.026.081 2.134-.858.026-.187-5.101 2.171-.052zm-1.287.832l.054 1.432 1.287-.052c.67-.026.992-.286.965-.755-.027-.468-.376-.703-1.019-.677l-1.287.052zM45.842 3.493l-.322 2.056-.83-.13.32-2.056-1.554-3.28.992.156 1.1 2.473L47.342.656l.965.13-2.466 2.707zM59.111 7.421c-.67 1.38-2.198 1.9-3.672 1.224a2.629 2.629 0 01-.883-.601 2.538 2.538 0 01-.56-.895 2.481 2.481 0 01.156-2.044c.67-1.38 2.198-1.9 3.672-1.224.332.142.63.349.876.607s.435.562.556.893a2.508 2.508 0 01-.145 2.04zm-4.155-1.926c-.15.324-.2.684-.14 1.034.058.35.223.676.472.937.249.26.571.443.927.526a1.91 1.91 0 001.072-.06c.343-.122.642-.34.859-.626a1.763 1.763 0 00.097-1.994 1.839 1.839 0 00-.794-.702c-.965-.468-2.01-.104-2.493.885zM64.472 11.587l-2.17-1.588-1.368 1.744-.67-.495 3.163-4.06 2.976 2.186-.483.625-2.305-1.692-.858 1.093 2.171 1.588-.456.599z"
        fill="#202029"
      />
      <path
        d="M39.783 16.61c.785 0 1.42-.618 1.42-1.38 0-.762-.635-1.38-1.42-1.38-.785 0-1.42.618-1.42 1.38 0 .761.635 1.38 1.42 1.38z"
        fill="#18ECC0"
      />
    </svg>
  );
}

const MemoStoryOfAms = React.memo(StoryOfAms);
export default MemoStoryOfAms;
