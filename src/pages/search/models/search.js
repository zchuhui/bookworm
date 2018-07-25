import * as usersService from '../services/search';

export default {
  namespace: 'search',
  state: {
    books:null,
    total:null,
    page:null,
  },
  reducers: {
    save(state, { payload}) {
      return { ...state,...payload };
    },
  },
  effects: {

    *search({ payload }, { call, put }) {
      const { data } = yield call(usersService.search, { ...payload });
      console.log('search data',data);

      if (data && data.books) {
        yield put({
          type: 'save',
          payload: {
            books:data.books,
            total:data.total
          },
        });
      }

    }

  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
         if (pathname === '/book') {
           //dispatch({ type: 'search', });
        }
      });
    },
  },
};
