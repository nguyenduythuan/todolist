import qs from 'query-string';
import axiosService from '../commons/axiosService';
import { API_ENDPOINT } from '../constants';

const url = 'tasks';

const getList = (params = {}) => {
  let queryPrames = '';
  if (Object.keys(params).length > 0) {
    queryPrames = qs.stringify(params);
  }
  return axiosService.get(`${API_ENDPOINT}${url}?${queryPrames}`);
};

const addTask = data => axiosService.post(`${API_ENDPOINT}${url}`, data);

const deleteTaskApi = id =>
  axiosService.delete(`${API_ENDPOINT}${url}/${id}`, id);

const editTaskApi = data =>
  axiosService.put(`${API_ENDPOINT}${url}/${data.id}`, data);

export { getList, addTask, deleteTaskApi, editTaskApi };
