import State from '@/models/State';
import Branch from '@/models/Branch';
import Item from '@/models/Item';

class SignupState {
  public bankid: string = '';
  public branchid: string = '';
  public name: string = '';
  public bankName: string = '';
  public branchName: string = '';
  public password: string = '';
}

export default {
  namespaced: true,
  state: new SignupState(),
  getters: {
    branches(state: SignupState, getters: any, rootState: State): Map<string, Branch> {
      const collection = new Map<string, Branch>();
      for (const [key, branch] of rootState.branches) {
        if (state.bankid === branch.bankId) {
          collection.set(key, branch);
        }
      }
      return collection;
    },
    branchItems(state: SignupState, getters: any): Item[] {
      const items = [];
      for (const [key, branch] of getters.branches) {
        items.push({ id: key, name: branch.name });
      }
      return items;
    },
  },
  mutations: {
  },
  actions: {
  },
};
