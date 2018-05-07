<template>
  <div id="app">
    <!--div class="navbar navbar-expand-lg shadow-sm navbar-dark bg-primary">
      <ul class="navbar-nav">
        <a class="navbar-brand" href="#">ticlo</a>
        <b-nav-item-dropdown id="ddown1" text="Dropdown" class="nav-item">
          <b-dropdown-item>First Action</b-dropdown-item>
          <b-dropdown-item>Second Action</b-dropdown-item>
          <b-dropdown-item>Third Action</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item>Something else here...</b-dropdown-item>
          <b-dropdown-item disabled>Disabled action</b-dropdown-item>
        </b-nav-item-dropdown>
      </ul>
    </div-->

    <b-navbar type="dark" variant="primary" toggleable="sm">
      <b-navbar-nav>
        <b-navbar-brand href="#">ticlo</b-navbar-brand>
        <b-nav-item-dropdown text="Dropdown">
          <b-dropdown-item>First Action</b-dropdown-item>
          <b-dropdown-item>Second Action</b-dropdown-item>
          <b-dropdown-item>Third Action</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item>Something else here...</b-dropdown-item>
          <b-dropdown-item disabled>Disabled action</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>

    <div id="editorMain">
      <div id="panel0" style="display: flex;flex-direction:column">
        <div id="panel00" class="card" style="width: 18rem;">
          <div class="card-header">
            Featured
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Vestibulum at eros</li>
          </ul>
        </div>
        <div id="panel01" class="card" style="width: 18rem;">
          <div class="card-header">
            Featured
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Vestibulum at eros</li>
          </ul>
        </div>
      </div>
      <div id="panel1">
        <h1>\{{ msg }}</h1>
        Name: <input v-model="name" type="text">
        <h1>Hello Component</h1>
        <hello-component :name="name" :initialEnthusiasm="5"/>
        <h1>Hello Decorator Component</h1>
        <hello-decorator-component :name="name" :initialEnthusiasm="5"/>
        <b-tabs>
          <b-tab title="first" active>
            <br>I'm the first fading tab
          </b-tab>
          <b-tab title="second">
            <br>I'm the second tab content
          </b-tab>
          <b-tab title="disabled" disabled>
            <br>Disabled tab!
          </b-tab>
        </b-tabs>

      </div>
      <div id="panel2">

      </div>

    </div>
  </div>
</template>

<script lang="ts">
  import HelloComponent from "./components/Hello.vue";
  import HelloDecoratorComponent from "./components/HelloDecorator.vue";
  import * as Split from 'split.js';

  export default {
    name: 'app',
    data() {
      return {
        name: 'World',
        msg: 'Welcome to Your Vue.js App'
      };
    },
    components: {
      HelloComponent,
      HelloDecoratorComponent
    },
    mounted() {
      Split(['#panel0', '#panel1', "#panel2"], {
        sizes: [25, 50, 25],
        minSize: 200
      });

      Split(['#panel00', '#panel01'], {
        direction: 'vertical',
        sizes: [50, 50],
        minSize: 50
      });


    }
  };
</script>

<style>

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    height: 100%;
  }

  #editorMain {
    padding: 8px 6px;
    display: flex;
    height: calc(100% - 56px)
  }

  html, body {
    height: 100%;
  }

</style>
