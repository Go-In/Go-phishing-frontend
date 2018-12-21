// @flow weak

import React, {
  PureComponent
}                       from 'react';
import PropTypes        from 'prop-types';
import { AnimatedView } from '../../components';
import { Button }       from 'react-bootstrap';
import Modal from 'react-responsive-modal';

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
    this.state = {data: {}, open: false};
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  componentDidMount() {
    let url = 'http://localhost:5000/api?target_domain=ktbnetbank.com'
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
    const { open } = this.state;
    const badge_name = ['badge-success', 'badge-info', 'badge-warning', 'badge-danger', 'badge-danger'];
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
                        {/* <th>Email</th> */}
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>0</td>
                        <td>thelonelyghost.com</td> 
                        <td><span className={"badge " + badge_name[Math.floor(parseInt("25")/25)]}>{parseInt("25")}%</span></td>
                        <td><span className={"badge " + badge_name[Math.floor(parseInt("20.380906282230647")/25)]}>{parseInt("20.380906282230647")}%</span></td>
                        <td>
                          <div>
                            <Button bsStyle="link" onClick={this.onOpenModal}>image</Button>
                            <Modal open={open} onClose={this.onCloseModal} center>
                              <h2>Simple centered modal</h2>
                              <p>
                                PicturePicturePicturePicturePicturePicture
                                PicturePicturePicturePicturePicturePicture
                                PicturePicturePicturePicturePicturePicture
                              </p>
                            </Modal>
                          </div>
                        </td>
                        {/* <td>contact@gmail.com</td>  */}
                        <td><Button bsStyle="primary">check</Button></td>  
                      </tr>
                      {
                        Object.values(this.state.data).map((item, i) => (
                          <tr>
                            <td>{i}</td>
                            <td>{item.log_domain}</td> 
                            <td><span className={"badge " + badge_name[Math.floor(parseInt(item.domain_score)/25)]}>{parseInt(item.domain_score)}%</span></td>
                            <td><span className={"badge " + badge_name[Math.floor(parseInt(item.html_score)/25)]}>{parseInt(item.html_score)}%</span></td>
                            <td>
                              <Button bsStyle="link">image</Button>
                            </td>
                            {/* <td>contact@gmail.com</td>  */}
                            <td><Button bsStyle="primary">check</Button></td>  
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
