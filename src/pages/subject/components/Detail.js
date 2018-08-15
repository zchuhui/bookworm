import React, { Component } from 'react';
import Rater from 'react-rater';
import styles from './Detail.less'

class Detail extends Component {


  /**
   * book basic info
   * @param {object} detail
   */
  renderBasicInfo(detail) {
    return (
      <div className={styles.basicWrap}>
        <h1 className={styles.title}>{detail.title}：<span>{detail.subtitle}</span></h1>
        <div className={styles.info}>
          <div className={styles.infoImg}><img src="https://img3.doubanio.com/view/subject/l/public/s3078482.jpg" /></div>
          <div className={styles.infoDesc}>
            <ul>
              <li><label>作者:</label>{detail.author}</li>
              <li><label>豆瓣评分:</label>
                <Rater className={styles.rater} total={detail.rating.max / 2} rating={detail.rating.average / 2}>

                </Rater>
                {detail.rating && detail.rating.average}
              </li>
              <li><label>出版社:</label>{detail.publisher}</li>
              <li><label>出版日期:</label>{detail.pubdate}</li>
              <li><label>定价:</label>{detail.price}</li>
              <li><label>标签:</label>
                {
                  detail.tags.map((item, index) => (<span className={styles.tag} key={index}>{item.name}</span>))
                }
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.summary}>
          {
            detail.summary
          }
        </div>
        <div>
          目录：
        </div>
      </div>
    )
  }




  render() {
    const { detail } = this.props;

    return (
      <div className={styles.detailWrap}>
        {
          this.renderBasicInfo(detail && detail)
        }
      </div>
    );
  }
}

export default Detail;
