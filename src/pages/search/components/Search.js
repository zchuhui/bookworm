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

    const { books } = this.props;
    return (
      <div className={styles.searchContainer}>
        <div className={styles.logoWrap}>
          <img src={LogoSrc} />
        </div>
        <div className={styles.inputWrap}>
          <input type="text" />
          <Button variant="outlined">搜索</Button>
        </div>
      </div>
    )
  }

  handleChangeQ = (q) => {
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

export default connect((search) => (search))(SearchPage);

