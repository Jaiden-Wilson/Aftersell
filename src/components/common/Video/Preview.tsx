import ReactPlayer from 'react-player/lazy';

export const Preview = ({ previewVideo, isOpen }) => {
  return (
    <ReactPlayer
      url={previewVideo?.filename}
      config={{
        file: {
          attributes: {
            autoPlay: true,
            loop: true,
            muted: true,
            controls: false,
          },
        },
      }}
      playing={!isOpen}
    />
  );
};
