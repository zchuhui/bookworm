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

    /**
     * search book
     */
    *search({ payload }, { call, put }) {
      const { data } = yield call(usersService.search, { ...payload });
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
         if (pathname === '/search') {
          dispatch({
            type:'search',
            payload:query
          })
        }
      });
    },
  },
};
