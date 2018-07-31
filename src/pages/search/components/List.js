import React from 'react';
import { connect } from 'dva';
import Button from '@material-ui/core/Button';
import styles from './List.less'

const testData = [
  {
    title: "三体",
    subtitle: "“地球往事”三部曲之一",
    author: ["刘慈欣"],
    pubdate: "2008-1",
    tags: [
      {
        count: 47916,
        name: "科幻",
        title: "科幻"
      },
      {
        count: 37943,
        name: "刘慈欣",
        title: "刘慈欣"
      },
    ],
    image: "https://images-cn.ssl-images-amazon.com/images/I/51y3PDVGdCL._AA218_.jpg",
    price: "50.50",
    summary: "文化大革命如火如荼进行的同时。军方探寻外星文明的绝秘计划“红岸工程”取得了突破性进展。但在按下发射键的那一刻，历经劫难的叶文洁没有意识到，她彻底改变了人类的命运。地球文明向宇宙发出的第一声啼鸣，以太阳为中心，以光速向宇宙深处飞驰…… 四光年外，“三体文明”正苦苦挣扎——三颗无规则运行的太阳主导下的百余次毁灭与重生逼迫他们逃离母星。而恰在此时。他们接收到了地球发来的信息。在运用超技术锁死地球人的基础科学之后。三体人庞大的宇宙舰队开始向地球进发…… 人类的末日悄然来临。"
  },
  {
    title: "三体2",
    subtitle: "“地球往事”三部曲之一",
    author: ["刘慈欣"],
    pubdate: "2008-1",
    tags: [
      {
        count: 47916,
        name: "科幻",
        title: "科幻"
      },
      {
        count: 37943,
        name: "刘慈欣",
        title: "刘慈欣"
      },
    ],
    image: "https://images-cn.ssl-images-amazon.com/images/I/51y3PDVGdCL._AA218_.jpg",
    price: "50.50",
    summary: "文化大革命如火如荼进行的同时。军方探寻外星文明的绝秘计划“红岸工程”取得了突破性进展。但在按下发射键的那一刻，历经劫难的叶文洁没有意识到，她彻底改变了人类的命运。地球文明向宇宙发出的第一声啼鸣，以太阳为中心，以光速向宇宙深处飞驰…… 四光年外，“三体文明”正苦苦挣扎——三颗无规则运行的太阳主导下的百余次毁灭与重生逼迫他们逃离母星。而恰在此时。他们接收到了地球发来的信息。在运用超技术锁死地球人的基础科学之后。三体人庞大的宇宙舰队开始向地球进发…… 人类的末日悄然来临。"
  },
]

class ListPage extends React.Component {

  state = {
    q: null
  }


  renderItem(detail,index) {
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


  render() {

    const { search } = this.props;
    const { books } = search

    return (
      <div className={styles.listWrap}>
        {
          books && books.map((item,index) => (this.renderItem(item,index)))
        }
      </div>
    )
  }



}

export default connect((search) => (search))(ListPage);

