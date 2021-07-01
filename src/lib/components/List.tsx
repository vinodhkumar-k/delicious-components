import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space, layout } from 'styled-system';
// @ts-ignore
import propTypes from '@styled-system/prop-types';

export const ListItem = styled.li``;

ListItem.displayName = 'ListItem';

const List = styled.ul`
  list-style-type: ${(props: any) => props.listStyleType};
  ${space}
  ${layout}
`;

List.propTypes = {
  ...propTypes.layout,
  ...propTypes.space,
  listStyleType: PropTypes.string,
};

List.defaultProps = {
  // @ts-ignore
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  width: '100%',
};

List.displayName = 'List';

export default List;
