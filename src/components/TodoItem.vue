<template>
        <div class="list-item">
          <div class='left-item'>
              <el-checkbox v-model="todo.completed"></el-checkbox>
              <div>
             <h4  v-if="!editing" :class="{ completed : todo.completed }">{{ todo.title}}</h4>
            <el-input v-else @change="todoTextChange" v-model="todoText" type="text"></el-input> 
            </div>
          </div>
          <div>
          <el-button type="success" @click="updateTodoI(todo)" size="mini" >{{ editing ? "Update" : 'Edit'}}</el-button>
          <el-button type="danger" @click="deleteTodo(todo.id)" icon="el-icon-delete" size="mini" ></el-button></div>
       </div>

</template>

<script>
import {mapActions} from 'vuex';
export default {
  props: {
    todo: {}
  },
  data() {
    return {
      todoText: '',
      editing: false,
    }
  },
  methods: {
   ...mapActions(['deleteTodo', 'updateTodo']),
    todoTextChange(e) {
            this.todoText = e.target.value;
    },
   updateTodoI(todo) {
     this.editing = this.editing == true ? false : true;
     if(this.editing) {
       this.todoText = todo.title;
       this.updateTodo(todo);
     } else {
       todo.title = this.todoText;
     }
   }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 0 0;
}

h4 {
  font-size: 14px;
  font-weight: 500;
}

.left-item {
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .el-checkbox {
    padding-right: 10px;
  }
}

 .completed {
    text-decoration: line-through;
    color: grey;
  }



   


</style>
