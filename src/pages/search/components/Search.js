import React from 'react';
import { connect } from 'dva';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import LogoSrc from "../../../public/warn.jpg";
import styles from './Search.less'

class SearchPage extends React.Component {

  state = {
    q: null
  }

  render() {

    const { books } = this.props;
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
          />

        </div>
        <p className={styles.tips}>好书都在这里！</p>
        <div>
          <Button variant="outlined" className={styles.btnSearch} onClick={this.handleSearch}>
            搜索
          </Button>
          <Button variant="outlined" className={styles.btnSearch} onClick={this.handleSearch}>
            推荐
          </Button>
        </div>

        <div>
          {
            books && books.map((i, index) => (
              <Card className={styles.card} key={index}>
                {/* <CardMedia
                  image='http://p2.so.qhimgs1.com/t013dc9096acc4f6ad2.jpg'
                  title={i.title}
                /> */}

                <img src={i.image} />
                <CardContent>
                  <Typography gutterBottom variant="headline" component="h6">
                    {i.title}
                  </Typography>
                  <Typography component="p">
                    {i.subtitle}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    <a href={i.alt} target="_blank">详情</a>
                  </Button>
                </CardActions>
              </Card>
            ))
          }
        </div>
      </div>
    )
  }

  handleChangeQ = (q) => {
    console.log('q', q.target.value);
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

