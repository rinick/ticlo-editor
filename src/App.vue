<template>
  <div id="app">


    <b-navbar type="dark" variant="primary" toggleable="sm">
      <b-navbar-nav>
        <b-navbar-brand href="#">ticlo</b-navbar-brand>
        <b-nav-item-dropdown text="Project">
          <b-dropdown-item>First Action</b-dropdown-item>
          <b-dropdown-item>Second Action</b-dropdown-item>
          <b-dropdown-item>Third Action</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item>Something else here...</b-dropdown-item>
          <li class="dropdown-submenu">
            <b-dropdown-item>Third Action</b-dropdown-item>
            <ul class="dropdown-menu">
              <b-dropdown-item>4th Action</b-dropdown-item>
              <b-dropdown-item>5th Action</b-dropdown-item>
            </ul>
          </li>
          <b-dropdown-item disabled>Disabled action</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>

    <div id="editorMain" style="display: flex">
      <div id="panel0" style="display: flex;flex-direction:column">
        <b-card id="panel00" class='panel' no-body>
          <b-tabs card>
            <b-tab title="Project" active>

              <b-dropdown text="Dropdown 1" boundary="window">
                <b-dropdown-item>First Action</b-dropdown-item>
                <b-dropdown-item>Second Action</b-dropdown-item>
              </b-dropdown>

            </b-tab>
            <b-tab title="Tab 2">
              Tab Contents 2
            </b-tab>
          </b-tabs>
        </b-card>
        <div id="panel01" class="card panel" style="width: 18rem;">
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
      <div id="panel1" style="display: flex;flex-direction:column">
        <div id="panel10" style="display: flex">
          <div id="panel100">
                    <h1>\{{ msg }}</h1>
          Name:
          <input v-model="name" type="text">
          <h1>Hello Component</h1>
          <hello-component :name="name" :initialEnthusiasm="5" />
          <h1>Hello Decorator Component</h1>
          <hello-decorator-component :name="name" :initialEnthusiasm="5" />
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
        <b-card id="panel101" class='panel' no-body>
    
        </b-card>
        </div>

      </div>


    </div>
  </div>
</template>

<script lang="ts">
  import HelloComponent from "./components/Hello.vue";
  import HelloDecoratorComponent from "./components/HelloDecorator.vue";
  import * as Split from "split.js";

  export default {
    name: "app",
    data() {
      return {
        name: "World",
        msg: "Welcome to Your Vue.js App"
      };
    },
    components: {
      HelloComponent,
      HelloDecoratorComponent
    },
    mounted() {
      Split(["#panel0", "#panel1"], {
        sizes: [25, 75],
        minSize: 100
      });
      Split(["#panel100", "#panel101"], {
        sizes: [70, 32],
        minSize: 100
      });
      Split(["#panel00", "#panel01"], {
        direction: "vertical",
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
    height: calc(100% - 56px);
  }

  #editorMain>* {
    overflow: hidden;
  }

  html,
  body {
    height: 100%;
  }
</style>