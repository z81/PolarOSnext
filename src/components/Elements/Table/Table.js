import React, {PropTypes, Component} from 'react';
import { diffProps } from '../../../utils';

class Table extends Component {
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
    return (
      <table {...diffProps(this, Table)} className={className}>
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
