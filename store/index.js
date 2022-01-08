export const state = () => ({
  lessons: []
})

export const mutations = {
  addLessons(state, lessons) {
    state.lessons.push( lessons );
  }
}

export const actions = {
  async getLessons() {
    const lessons = ['one', 'two', 'three'];
    commit('addLessons', lessons);
    return lessons;
  }
}