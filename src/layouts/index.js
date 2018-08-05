import React, { Component } from 'react';
import Footer from './Footer'
import Header from './Header'

class index extends Component {
  render() {
    const pathname = this.props.location.pathname;

    // 首页布局
    if (pathname === '/') {
      return (<div>
        <div>
          {this.props.children}
          <Footer isFixed={true} />
        </div>
      </div>)
    }


    return (
      <div>
        <Header />
        {this.props.children}
        <Footer isFixed={false} />
      </div>
    );
  }
}

export default index;
