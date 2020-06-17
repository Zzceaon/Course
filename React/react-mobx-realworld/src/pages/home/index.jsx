import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Pagination } from 'antd';

// 想要哪个页面的数据 注入流
@inject('articleStore')
@observer
class Home extends Component {
  componentDidMount () {
    this.props.articleStore.getArticle('all');
  }
  handleChange = (page) => {
    // 1 offset 0
    // 2 offset 1
    // 3 offset 2
    this.props.articleStore.getArticle('all', page - 1);
  }
  render() {
    const { total, LIMIT } = this.props.articleStore
    console.log(total, LIMIT)
    return (
      <div>
        { this.props.articleStore.articles.all.length }
        <Pagination
        onChange={this.handleChange}
        total={total}
        pageSize={LIMIT}
        defaultCurrent={1}/>
      </div>
    );
  }
}

// export default inject('articleStore')(observer(Home));
export default Home;