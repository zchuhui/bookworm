import React from 'react';
import { connect } from 'dva';
import styles from './List.less'


/**
 * 搜索列表
 */
class ListPage extends React.Component {
  constructor(props){
    super(props);
  }


  renderLoading(){
    return(
      <div className={styles.loadWrap}>我已经很努力了...</div>
    )
  }

  /**
   * 渲染列表详情
   * @param {object} detail
   * @param {number} index
   */
  renderItem(detail, index) {
    return (
      <div className={styles.itemWrap} key={index}>
        <div className={styles.itemImg}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSryx-xet78d1ZKZ2VR7-qrf2Wm_9hbPZpT1J2-VODAkTu5pzMy" />
        </div>
        <div className={styles.itemMain}>
          <h2 className={styles.itemTitle}>{detail.title}</h2>
          <div className={styles.itemAuthor}>
            {detail.author} / {detail.pubdate}
          </div>
          <div className={styles.itemSummary}>{detail.summary}</div>
        </div>
      </div>
    )
  }


  /**
   * 渲染
   */
  render() {

    const { search, loading } = this.props;
    const { books } = search

    return (
      <div className={styles.listWrap}>
        {
          books && books.length > 0 ? books.map((item, index) => (this.renderItem(item, index))) : this.renderLoading()
        }
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

export default connect(mapStateToProps)(ListPage);

