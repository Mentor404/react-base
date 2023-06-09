import { call, put, all, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';
import * as types from '../types';
import { toast } from 'react-toastify';
const requisicao = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 600);
  });
};

function* exempleRequest() {
  try {
    yield call(requisicao);
    yield put(actions.botaoClickSucess());
    toast.success('O click foi registrado com sucesso!');
  } catch (e) {
    yield put(actions.botaoClickFailure());
  }
}

export default all([takeLatest(types.BOTAO_CLICK_REQUEST, exempleRequest)]);
