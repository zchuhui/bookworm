import React, { Component } from 'react'
import styles from './Footer.less'

export default class componentName extends Component {
  render() {
    return (
      <div className={styles.footerWrap}>
        <span>© 2018 备案 xxxxx 号</span>
        <span>书虫简介</span>

        <span>公众号</span>
        <span>微博</span>
        <span>帮助</span>
      </div>
    )
  }
}
