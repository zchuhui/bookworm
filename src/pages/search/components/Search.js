import React from 'react';
import { connect } from 'dva';
import Button from '@material-ui/core/Button';
import LogoSrc from "../../../public/warn.png";
import styles from './Search.less'

class SearchPage extends React.Component {

  state = {
    q: null
  }

  render() {

    return (
      <div className={styles.searchWrap}>
        <div className={styles.logoWrap}>
          <img src={LogoSrc} />
        </div>
        <div className={styles.inputWrap}>
          <input type="text" />
          <Button variant="outlined" className={styles.btnSearch}>搜索</Button>
        </div>
      </div>
    )
  }


  /**
   * change input value
   */
  handleChangeQ = (q) => {
    this.setState({
      keyword: q.target.value
    })
    console.log(this.state.keyword)
  }

  /**
   * input Enter key
   */
  handleEnter = (e) => {
    if (!this.state.keyword) {
      return;
    }

    if (e.key === 'Enter') {
      this.props.dispatch({
        type: 'book/search',
        payload: {
          q: this.state.keyword
        }
      })
    }

  }


  /**
   * search btn
   */
  handleSearch = () => {
    if (!this.state.keyword) {
      return;
    }

    this.props.dispatch({
      type: 'book/search',
      payload: {
        q: this.state.keyword
      }
    });

    // to search list
    router.push('/search')


  }



}

export default connect((search) => (search))(SearchPage);

