<template>
  <div>
    <h2>Todo App</h2>
      <div class="todo-input">
          <div>
          <el-input placeholder="Type new todo" @change="todoTextChange" v-model="todoText" type="text"></el-input> 
          </div>
          <div>
           <el-button type="primary" @click="addTodoID">Add</el-button>
          </div>
       </div>


 
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import {v1} from 'uuid'

export default {
    data() {
        return {
            todoText: ''
        }
    },
    methods: {
        ...mapActions(['addTodo']),
        todoTextChange(e) {
            this.todoText = e.target.value;
        },
        addTodoID() {
             if (this.todoText.trim().length == 0) {
           return
            }
            this.addTodo({
                id: v1(),
                title: this.todoText,
                completed: false,

            });
            this.todoText = '';
        }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .text {
    font-size: 14px;
  }

  h2 {
    padding-bottom: 20px;
  }

  .todo-input {
    display: flex;
    justify-content: center;
    align-items: center;
  }

</style>
