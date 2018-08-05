import React from 'react';
import { connect } from 'dva';
import router from 'umi/router';
import Button from '@material-ui/core/Button';
import Footer from '../../../layouts/Footer'
import LogoSrc from "../../../public/warn.png";
import styles from './Book.less'

/**
 * 搜索组件
 */
class Book extends React.Component {

  state = {
    keyword: null         // search keyword
  }

  /**
   * change input value
   */
  handleChangeQ = (q) => {
    this.setState({
      keyword: q.target.value
    })
  }

  /**
   * jump search page
   */
  jumpSearch = () => {
    this.props.dispatch({
      type: 'book/search',
      payload: {
        q: this.state.keyword
      }
    })

    // to search list
    router.push('/search?q=' + this.state.keyword)
  }

  /**
   * input Enter key
   */
  handleEnter = (e) => {
    if (!this.state.keyword) {
      return;
    }

    if (e.key === 'Enter') {
      this.jumpSearch()
    }
  }


  /**
   * search btn
   */
  handleSearch = () => {
    if (!this.state.keyword) {
      return;
    }
    this.jumpSearch()
  }

  /**
   * render
   */
  render() {

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
            onKeyPress={this.handleEnter}
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
      </div>
    )
  }

}

export default connect((book) => (book))(Book);

