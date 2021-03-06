import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color } from 'styled-system';

const IconContainer = styled.svg`
  ${color};
  fill: currentcolor;
`;

IconContainer.displayName = 'IconContainer';

interface IProps {
  content: any,
  viewBox: string,
  size: string | number
}

const IconComponent = ({ content, viewBox, size, ...props }: IProps) => (
  <IconContainer width={size} height={size} viewBox={viewBox} {...props}>
    {content}
  </IconContainer>
);

IconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  content: PropTypes.node,
  viewBox: PropTypes.string,
};

IconComponent.defaultProps = {
  size: 24,
};

export default IconComponent;
