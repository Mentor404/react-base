import * as types from '../types';
export function botaoClickRequest() {
  return {
    type: types.BOTAO_CLICK_REQUEST,
  };
}

export function botaoClickSucess() {
  return {
    type: types.BOTAO_CLICK_SUCESS,
  };
}

export function botaoClickFailure() {
  return {
    type: types.BOTAO_CLICK_FAILURE,
  };
}
