import React from 'react';
import { connect } from 'dva';
import router from 'umi/router';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import green from '@material-ui/core/colors/green';
import LogoSrc from '../public/warn.png'
import styles from './Header.less'

/**
 * 搜索页面的搜索栏
 */
class Header extends React.Component {

  // 构造函数
  constructor(props) {
    super(props);


    // 获取搜索参数
    const params = window.location.search.split('='),
      kw = params.length > 1 ? decodeURIComponent(params[1]) : ''

    this.state = {
      keyword: kw
    }
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
   * 渲染
   */
  render() {

    const { loading } = this.props

    return (
      <div className={styles.searchWrap}>
        <div className={styles.logoWrap}>
          <img src={LogoSrc} />
        </div>
        <div className={styles.inputWrap}>
          <input
            type="text"
            value={this.state.keyword}
            onChange={this.handleChangeQ}
            onKeyPress={this.handleEnter}
          />
          <Button
            variant="outlined"
            className={styles.btnSearch}
            onClick={this.handleSearch}
          >搜索</Button>
        </div>
        <div className={styles.loadingProgress}>
          {
            loading ? <LinearProgress styles={{ color: green }} /> : null
          }
        </div>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    search: state.search,
    loading: state.loading.models.search,
  };
}

export default connect(mapStateToProps)(Header);

