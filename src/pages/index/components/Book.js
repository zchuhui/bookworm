import React from 'react';
import { connect } from 'dva';
import Button from '@material-ui/core/Button';
import Footer from '../../../layouts/Footer'
import LogoSrc from "../../../public/warn.png";
import styles from './Book.less'

class Book extends React.Component {

  state = {
    q: null
  }

  render() {

    const { books } = this.props;

    return (
      <div className={styles.bookContainer}>
        <div className={styles.logoWrap}>
          <img src={LogoSrc} />
        </div>
        <div className={styles.searchBox}>
          <input
            type="text"
            className={styles.searchInput}
            onChange={this.handleChangeQ}
          />

        </div>
        {/* <p className={styles.tips}>好书都在这里！</p> */}
        <div>
          <Button variant="outlined" className={styles.btnSearch} onClick={this.handleSearch}>
            书虫搜索
          </Button>
          <Button variant="outlined" className={styles.btnSearch} onClick={this.handleSearch}>
            好书推荐
          </Button>
        </div>

        <Footer />
      </div>
    )
  }

  handleChangeQ = (q) => {
    console.log('q', q.target.value);
    this.setState({
      q: q.target.value
    })
  }


  handleSearch = () => {
    this.props.dispatch({
      type: 'book/search',
      payload: {
        q: this.state.q
      }
    })
  }

}

export default connect((book) => (book))(Book);

