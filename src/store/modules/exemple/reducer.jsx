import * as types from '../types';

const initialState = {
  botaoClidado: false,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case types.BOTAO_CLICK_SUCESS: {
      console.log('Sucesso!');
      const newState = { ...state };
      newState.botaoClidado = !newState.botaoClidado;
      return newState;
    }

    case types.BOTAO_CLICK_REQUEST: {
      console.log('Estou fazendo a request.');
      return state;
    }

    case types.BOTAO_CLICK_FAILURE: {
      console.log('Deu erro');
      return state;
    }

    default: {
      return state;
    }
  }
}
