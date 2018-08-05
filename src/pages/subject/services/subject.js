import request from '../../../utils/request';

export function query(payload) {
  return request(`/api/book/${payload.id}`);
}
