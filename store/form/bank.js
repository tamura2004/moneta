import Form from '~/plugins/form';
const form = new Form(['name', 'num']);

export const state = form.state;
export const mutations = form.mutations;

export const getters = {
  ...form.getters,
  bank: state => ({
    name: state.name,
    num: state.num,
  }),
}

export const actions = {
  ...form.actions,
  new: ({ commit }) => {
    commit('id', null);
    commit('name', null);
    commit('num', null);
  },
  edit: ({ commit, rootGetters }, id) => {
    const bank = rootGetters['banks/bank'](id);
    commit('id', id);
    commit('name', bank.name);
    commit('num', bank.num);
  },
  add({ getters, dispatch }) {
    dispatch('banks/add', getters.bank, { root: true });
  },
  modify({ getters, dispatch }) {
    dispatch('banks/modify', {
      id: getters.id,
      data: getters.bank,
    }, { root: true });
  },
}
