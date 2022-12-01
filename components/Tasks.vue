<template>
  <div class="container">
    <div :class="done ? 'task_container done_click' : 'task_container'">
      <h4 class="taskValue">{{ this.text }}</h4>
      <div class="btns">
        <button class="done" @click="donecontroller" id="btn">
          {{btnText}}
        </button>
        <button @click="remove" class="delete">DELETE</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
@Component
export default class Tasks extends Vue {
  @Prop() readonly text!: string
  done: boolean = false
  btnText:string = 'DONE'
  btn:HTMLELEMENT = document.getElementById('btn');
  donecontroller() {
    if(this.done === false){
        this.btnText = "UNDO"
        this.done = true
    }else{
        this.done = false;
        this.btnText = "DONE"
    }
  }
  remove(){
      this.$store.dispatch('removetodo' , this.text);
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: max-content;
  margin: 0px auto;
  width: 500px;
}
.task_container {
  width: 100%;
  padding: 10px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(0, 0, 124);
  border-radius: 20px;
}
.taskValue {
  font-size: 30px;
  margin: 0;
  padding: 0;
  background-color: rgb(0, 0, 65);
  width: 73%;
  border-radius: 10px;
  padding: 5px 15px;
  box-sizing: border-box;
}
.btns {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-left: 15px;
}
.done,
.delete {
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  /* border:1px solid black; */
  border: none;
  cursor: pointer;
  transition: 0.4s;
}
.done {
  background-color: rgba(0, 112, 0, 0.747);
}
.delete {
  background-color: rgba(173, 0, 0, 0.753);
}
.done:hover {
  background-color: rgba(0, 112, 0, 0.397);
}
.delete:hover {
  background-color: rgba(173, 0, 0, 0.267);
}
.done_click {
  animation-name: doneclick;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}
@keyframes doneclick {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0.4;
  }
}
</style>
