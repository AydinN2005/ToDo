<template>
  <div class="container">
    <div class="inputs_container">
      <input
        id="input"
        v-model="taskValue"
        type="text"
        class="input_text"
        placeholder="write your task ..."
      />
      <button @click="addtodo" class="btn_add">ADD</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { component } from 'vue/types/umd'
@Component
export default class addTask extends Vue {
  taskValue: string = ''
  addtodo() {
    this.$store.dispatch('addtodo', this.taskValue)
    this.taskValue = '';
    let input: HTMLELEMENT = document.getElementById('input');
    input.focus();
  }
}
</script>

<style scoped>
.container {
  width: max-content;
  margin: 80px auto;
  margin-bottom: 40px;
}
.inputs_container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}
.input_text {
  width: 380px;
  height: 50px;
  border: none;
  border-bottom: 2px solid rgba(0, 90, 0, 0.719);
  background-color: rgba(255, 255, 255, 0);
  color: white;
  font-size: 28px;
}
.input_text:focus {
  outline: none;
}
.btn_add {
  background-color: orangered;
  color: white;
  padding: 10px 50px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.4s;
  border: 2px solid black;
  align-self: flex-end;
}
.btn_add:hover {
  background-color: rgba(255, 68, 0, 0);
}
</style>
