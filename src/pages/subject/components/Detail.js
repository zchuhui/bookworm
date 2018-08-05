import React, { Component } from 'react';
import styles from './Detail.less'

class Detail extends Component {


  renderBasicInfo(detail){
      return(
        <div className={styles.basicWrap}>
          <h1 className={styles.title}>{detail.title}：<span>{detail.subtitle}</span></h1>
          <div className={styles.info}>
            <div className={styles.infoImg}><img src="https://img1.doubanio.com/view/subject/l/public/s2768378.jpg" /></div>
            <div className={styles.infoDesc}>
              <ul>
                <li><label>作者:</label>{detail.author}</li>
                <li><label>出版社:</label>{}</li>
                <li><label>出版日期:</label>{}</li>
                <li><label>:</label>{}</li>
                <li><label>:</label>{}</li>
                <li><label>:</label>{}</li>
                <li><label>定价:</label>{}</li>
                <li><label>ISBN:</label>{}</li>
              </ul>
            </div>
          </div>
        </div>
      )
  }

  render() {
    const { detail } = this.props;

    return (
      <div className={styles.detailWrap}>
        {
          this.renderBasicInfo(detail)
        }
      </div>
    );
  }
}

export default Detail;
