import React, {PropTypes} from 'react';
import {diffObject} from '../utils';

class Table extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    striped: PropTypes.any,
    header: PropTypes.any,
    rows: PropTypes.any
  }
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const className = this.props.striped ? 'table-striped' : '';
    const realProps = diffObject(this.props, Object.keys(Table.propTypes));

    return (
      <table {...realProps} className={className}>
        {!this.props.header || <thead>
          <tr>
            {this.props.header.map(h=><th>{h}</th>)}
          </tr>
        </thead>}
        <tbody>
          {this.props.rows.map(r=><tr>{r.map(d=><td>{d}</td>)}</tr>)}
        </tbody>
      </table>
    );
  }
}

export default Table;
