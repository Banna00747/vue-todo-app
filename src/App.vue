<template>
  <div id="app">
    <div class="wrapper">
      <TodoInput/>
      <TodoList/>
      </div>
  </div>
</template>

<script>
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'



export default {
  name: 'App',
  components: {
    TodoInput,
    TodoList

  }
}
</script>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 30px;
  background: linear-gradient(45deg, #3498db, #9b59b6);
  height: 100vh;
  width: 100vw;
  .wrapper {
    width: 60vw;
    margin: 0 auto;
    padding: 30px 20px;
    justify-content: center;
    align-items: center;
    background: linear-gradient(45deg, #c9eaff, #f9eaff);
    border-radius: 10px;
    box-shadow: 0px 0px 7px 13px rgba(0, 0, 0, 0.1);
    height: 80vh;
;
  }
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

</style>
