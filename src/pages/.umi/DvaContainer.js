import { Component } from 'react';
import dva from 'dva';
import createLoading from 'dva-loading';

let app = dva({
  history: window.g_history,
  
});

window.g_app = app;
app.use(createLoading());

app.model({ namespace: 'book', ...(require('D:/works/my/bookworm/src/pages/index/models/book.js').default) });
app.model({ namespace: 'search', ...(require('D:/works/my/bookworm/src/pages/search/models/search.js').default) });
app.model({ namespace: 'subject', ...(require('D:/works/my/bookworm/src/pages/subject/models/subject.js').default) });

class DvaContainer extends Component {
  render() {
    app.router(() => this.props.children);
    return app.start()();
  }
}

export default DvaContainer;
