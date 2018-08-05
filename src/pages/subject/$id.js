import React, { Component } from 'react';
import { connect } from 'dva'
import PropTypes from 'prop-types';

import Detail from './components/Detail'

class page extends Component {

  render() {

    const { bookDetail, loading } = this.props
    const {detail} = bookDetail

    return (
      <div>
        <Detail detail={detail} />
      </div>
    );
  }
}

page.propTypes = {

};


function mapStateToProps(state) {
  return {
    bookDetail: state.bookDetail,
    loading: state.loading.models.bookDetail,
  };
}

export default connect(mapStateToProps)(page);
