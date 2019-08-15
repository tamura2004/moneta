import Form from '@/plugins/form.js'

const form = new Form(['name', 'age'])

describe('plugins/form', () => {
  test('state', () => {
    const state = form.state()

    expect(state.id).toBeNull()
    expect(state.name).toBeNull()
    expect(state.age).toBeNull()
  })

  test('mutations', () => {
    const state = form.state()
    const mutations = form.mutations

    mutations.id(state, 'abc')
    mutations.name(state, '太郎')
    mutations.age(state, 18)

    expect(state.id).toBe('abc')
    expect(state.name).toBe('太郎')
    expect(state.age).toBe(18)
  })

  test('getters', () => {
    const state = form.state()
    const mutations = form.mutations
    const getters = form.getters

    mutations.id(state, 'abc')
    mutations.name(state, '太郎')
    mutations.age(state, 18)

    expect(getters.id(state)).toBe('abc')
    expect(getters.name(state)).toBe('太郎')
    expect(getters.age(state)).toBe(18)
  })

  test('actions', () => {
    const state = form.state()
    const mutations = form.mutations
    const getters = form.getters
    const actions = form.actions
    const commit = (label, value) => mutations[label](state, value)

    actions.id({ commit }, 'abc')
    actions.name({ commit }, '太郎')
    actions.age({ commit }, 18)

    expect(getters.id(state)).toBe('abc')
    expect(getters.name(state)).toBe('太郎')
    expect(getters.age(state)).toBe(18)
  })
})
