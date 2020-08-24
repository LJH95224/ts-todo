import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todolist: [
      {
        text: '学习《TypeScript》全面解读课程',
        complete: false,
      },
      {
        text: '学习《Vue技术栈开发实战》课程',
        complete: false,
      },
    ],
  },
  mutations: {
    updateTodoList(state, {index, content}) {
      state.todolist[index].text = content;
    },
    todoItemComplete(state, index) {
      state.todolist[index].complete = true;
    },
  },
  actions: {
  },
  modules: {
  },
});
