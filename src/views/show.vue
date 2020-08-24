<template>
  <div class="about">
    <span>ceshi</span>
    <p 
      v-for='(item, index) in list'
      :key="`todo_item` + index"
      :style="{textDecoration: item.complete ? 'line-through': ''}"> {{ item.text }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State } from 'vuex-class'
@Component({
  name: 'Show',
})
export default class Show extends Vue {
  @State('todolist') public list;
}
</script>

<style scoped>

</style>
