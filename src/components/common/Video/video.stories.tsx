import React from 'react';

import { Video } from '.';

export default {
  component: Video,
  title: 'components/Video',
};

export const Cashew = (args) => <Video maxWidth="800px" {...args} />;

Cashew.args = {
  src: 'https://www.youtube.com/watch?v=YzPjG8whuTw',
};
