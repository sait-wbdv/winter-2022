export const state = () => ({
  lessons: []
})

export const mutations = {
  initLessons(state, lessons) {
    state.lessons.push( lessons );
  }
}

export const actions = {
  async getLessons() {
    const lessons = ['one', 'two', 'three'];
    commit('initLessons', lessons);
    return lessons;
  }
}