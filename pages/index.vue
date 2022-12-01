<template>
  <div class="container">
    <h1 class="title">Your Tasks in each day</h1>
    <p class="description">for create your task click <span class="primary_text_color">ADD</span> and if you have done click <span class="primary_text_color">DONE</span>
      and if you want delete a task click <span class="primary_text_color">DELETE</span>
    <br/> 
    <br/> 
     <span class="secendry_text_color">HAVE A NICE DAY !</span>
    </p>
    <add-task/>
    <div class="tasks_container">
      <tasks v-for="(item , i) in this.$store.getters['todos']" :key="i" :text="item"/>
    </div>
  </div>
</template>

<script lang="ts">
import addTask from '~/components/addTask.vue'
import Tasks from '~/components/Tasks.vue'
import { Component , Vue} from 'nuxt-property-decorator'
@Component({
  components : {
    addTask , 
    Tasks
  }
})
export default class index extends Vue{

}
</script>

<style scoped>
.title , .description{
  margin: 0;
  padding: 0;
  text-align: center;
}
.title{
  margin-top: 10px;
  font-size: 50px;
}
.description{
  margin-top: 20px;
  font-size: 20px;
}
.primary_text_color{
  color: orangered;
}
.secendry_text_color{
  color: rgb(0, 177, 68);
}
.tasks_container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  border: 2px solid rgba(255, 68, 0, 0.466);
  width: 600px;
  margin: 0 auto;
  margin-bottom: 30px;
  padding: 20px 0;
  border-radius: 20px;
}
</style>
