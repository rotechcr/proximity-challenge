import { actions } from '../reducers/products';

export const { setList } = actions;

export const getList = (state) => state.products.list;
