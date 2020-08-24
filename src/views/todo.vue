<template>
  <div class="todo">
    <ul>
      <todo-item
        v-for="(item, index) in list"
        :item="item"
        :index="index"
        :editting-index="edittingIndex"
        @on-save="handleSave"
        @on-edit="handleEdit"
        @on-cancel="handleCancel"
        @on-complete="handleComplete">
      </todo-item>
    </ul>
    <a-button @click="turn">跳转</a-button>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import TodoItem from '@/components/todo-item';
import { State, Mutation } from 'vuex-class';

@Component({
  name: 'todoPage',
  components: {
    TodoItem,
  },
})
export default class Todo extends Vue {
  public edittingIndex = -1;

  @State('todolist')
  public list;

  @Mutation('updateTodoList')
  public updateList;

  @Mutation('todoItemComplete') public handleComplete

  public handleSave({index, content}) {
    // this.list[index].text = content;
    this.updateList({index, content});
    this.handleCancel();
  }
  public handleEdit(index) {
    this.edittingIndex = index;
  }
  public handleCancel() {
    this.edittingIndex = -1;
  }

  public turn() {
    this.$router.push({ name: 'show'})
  }
}
</script>

<style>

</style>
