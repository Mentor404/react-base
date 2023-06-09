import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducers = persistReducer(
    {
      key: 'NOME_APLICACAO',
      storage,
      whitelist: ['exemple'],
    },
    reducers
  );

  return persistedReducers;
};
