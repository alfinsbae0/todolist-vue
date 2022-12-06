<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-3">
      <a class="navbar-brand" href="#">
        <img
          src="https://icon-library.com/images/todo-icon/todo-icon-22.jpg"
          width="30px"
        />
        ToDoList
      </a>
      <!-- <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="true"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button> -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="">
              <router-link to="/">Home</router-link>
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="/add">
              <router-link to="/add">Add</router-link>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <div id="nav" class="mb-3 text-center">
      <h1><b>ToDoList</b></h1>
      <button active to="#" id="edite" v-if="$route.name == 'edit-data'">
        Edit
      </button>
      <i style="align-items: center" v-if="$route.name == 'detail-data'"></i>
      <button active to="#" id="edite" v-if="$route.name == 'detail-data'">
        Detail
      </button>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
};
</script>
<style>
#app {
  font-family: monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 2rem;
}
#title {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
  color: white;
  margin: 1rem 1rem 0 1rem;
  background: gray;
  border-radius: 14px;
  text-decoration: none;
  padding: 0.25rem 0.75rem;
  width: 175px;
  text-align: center;
}
#actionic {
  font-weight: bold;
  color: #2c3e50;
  margin: 0 0.5rem 0 0;
  background: #eee;
  border-radius: 14px;
  text-decoration: none;
  padding: 0.25rem 0.75rem;
  border: 0;
}
#actionic:hover {
  color: #0428ff;
}

h1 {
  font-weight: 1200;
  font-size: 2rem;
  margin: 3rem 0 2rem 0rem;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0 1rem 0 0;
  background: #eee;
  border-radius: 14px;
  text-decoration: none;
  padding: 0.25rem 0.75rem;
}

#nav a.router-link-exact-active {
  color: #0428ff;
}
#edite {
  font-weight: bold;
  color: white;
  margin: 0 1rem 0 0;
  background: green;
  border-radius: 14px;
  text-decoration: none;
  padding: 0 0.75rem;
  border: 0;
}
input[type="submit"] {
  background: gray;
  color: black;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  border: none;
  box-shadow: 0 5px 10px, gray;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.25s ease-out;
  cursor: pointer;
}
input[type="submit"]:hover {
  background: #3600ff;
  box-shadow: 0 3px 7px #0428ff7a;
  color: white;
}
input {
  border-radius: 10px;
  box-sizing: border-box;
  border: 1px solid #aaa;
  font-size: 1rem;
  width: 100%;
  padding: 0.5rem 1rem;
}
</style>
