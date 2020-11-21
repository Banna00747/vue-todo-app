<template>
  <div>
  <ul v-for="todo in allTodos" :key="todo.id"  class="box-card">
        <li> <TodoItem :todo="todo" /> </li>
  </ul>
          <div class="remain-item">{{ remaining }} item(s) left</div>
          <el-button v-if="showClearCompletedButton" @click="clearCompleted" size="mini" type="warning">Clear Completed</el-button>


  </div>
</template>

<script>
import TodoItem from './TodoItem.vue'
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex';

export default {
    components: {
    TodoItem
  },
  methods: {
       ...mapActions(['deleteTodo']),
      clearCompleted() {
              this.allTodos.forEach((todo) => {
                if(todo.completed == true) {
                  this.deleteTodo(todo.id)
                }
              });}

  },
  computed: {
    ...mapGetters(['allTodos']),
      remaining() {
      return this.allTodos.filter(todo => !todo.completed).length
    },
     showClearCompletedButton() {
      return this.allTodos.filter(todo => todo.completed).length > 0
    },
   
     
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  .box-card {
    width: 100%;
    display: flex;
    justify-content: center;
    width: 500px;
    align-items: center;
    margin: 0 auto;

  }
  ul {
    padding-top: 20px;
  }
  li {
    list-style: none;
    width: 100%;
    margin: 0 0 0 0;
  }

  .remain-item {
    margin: 20px 0 0 0;
    color: #7c203a;
  }

   .el-button {
      margin: 10px 0 0 0;
    }



</style>
