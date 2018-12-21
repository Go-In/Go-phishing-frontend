// @flow weak

import React, {
  PureComponent
}                       from 'react';
import PropTypes        from 'prop-types';
import { AnimatedView } from '../../components';

class SimpleTables extends PureComponent {
  // componentWillMount() {
  //   const { actions: {  enterSimpleTables } } = this.props;
  //   enterSimpleTables();
  // }

  // componentWillUnmount() {
  //   const { actions: {  leaveSimpleTables } } = this.props;
  //   leaveSimpleTables();
  // }

  constructor(props) {
    super(props);
    this.state = {data: {}}
  }

  componentDidMount() {
    let url = 'http://localhost:5000/api?target_domain=ktbnetbank'
    fetch(url).then(response => response.json()).then((repos) => {
      console.log(repos)
      // console.log(repos.length);
      this.setState({
        data: repos
      });
      console.log(this.state.data[0])
    });
  }

  render() {
    const { data } = this.state;
    return(
      <AnimatedView>
        <div className="row">
            <div className="col-xs-12">
              <div className="panel">
                <header className="panel-heading">
                  Responsive Hover Table
                </header>
                <div className="panel-body table-responsive">
                  <div className="box-tools m-b-15">
                    <div className="input-group">
                      <input
                        type="text"
                        name="table_search"
                        className="form-control input-sm pull-right"
                        style={{width: '150px'}}
                        placeholder="Search"
                      />
                      <div className="input-group-btn">
                        <button className="btn btn-sm btn-default">
                          <i className="fa fa-search" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Domain</th>
                        <th>Domain Score</th>
                        <th>Page Score</th>
                        <th>Page Capture</th>
                        <th>Email</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        Object.values(this.state.data).map((item, i) => (
                          <tr>
                            <td>{i}</td>
                            <td>{item.log_domain}</td> 
                            <td>{item.domain_score}</td>
                            <td>{item.page_score}</td> 
                            <td></td>
                            <td>contact@gmail.com</td> 
                            <td>CHECK</td>  
                          </tr>
                        ))
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
      </AnimatedView>
    );
  }
}

SimpleTables.propTypes= {
  actions: PropTypes.shape({
    enterSimpleTables: PropTypes.func,
    leaveSimpleTables: PropTypes.func
  })
};

export default SimpleTables;
