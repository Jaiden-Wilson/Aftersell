import { Icon, Box } from '@storyofams/react-ui';
import styled from 'styled-components';
import '@reach/dialog/styles.css';

const ShapeWrapper = styled(Box)`
  div {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }

  svg {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
`;

export const Shape = ({ icon, ...props }) => {
  return (
    <ShapeWrapper position="relative" {...props}>
      <Icon icon={icon} />
    </ShapeWrapper>
  );
};
