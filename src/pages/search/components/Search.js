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



}

export default connect((search) => (search))(SearchPage);

