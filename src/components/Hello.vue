<!-- src/components/Hello.vue -->
<template>
    <div>
        <div class="greeting">Hello {{name}}{{exclamationMarks}}</div>
        <button @click="decrement" ref="usernameInput">-</button>
        <button @click="increment">+</button>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["name", "initialEnthusiasm"],
  data() {
    return {
      enthusiasm: this.initialEnthusiasm
    };
  },
  methods: {
    increment() {
      (<HTMLElement>this.$refs.usernameInput).style.backgroundColor = "red";
      this.enthusiasm++;
    },
    decrement() {
      if (this.enthusiasm > 1) {
        this.enthusiasm--;
      }
    }
  },
  computed: {
    exclamationMarks(): string {
      return Array(this.enthusiasm + 1).join("!");
    }
  }
});
</script>

<style>
.greeting {
  font-size: 20px;
}
</style>
