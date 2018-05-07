<!-- src/components/HelloDecorator.vue -->
<!-- This is an alternative way to define the Hello component using decorators -->
<template>
    <div>
        <div class="greeting">Hello {{name}}{{exclamationMarks}}</div>
        <button @click="decrement">-</button>
        <button @click="increment">+</button>
          <b-card-group deck
                  class="mb-3">
        <b-card bg-variant="primary"
                text-variant="white"
                header="Primary"
                class="text-center">
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </b-card>
        <b-card bg-variant="secondary"
                text-variant="white"
                header="Secondary"
                class="text-center">
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </b-card>
        <b-card header="Default"
                class="text-center">
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </b-card>
    </b-card-group>
    </div>
    
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class HelloDecorator extends Vue {
    @Prop() name: string = '';
    @Prop() initialEnthusiasm: number = 5;

    enthusiasm = this.initialEnthusiasm;

    increment() {
        this.enthusiasm++;
    }
    decrement() {
        if (this.enthusiasm > 1) {
            this.enthusiasm--;
        }
    }

    get exclamationMarks(): string {
        return Array(this.enthusiasm + 1).join('!');
    }
}
</script>

<style>
.greeting {
    font-size: 20px;
}
</style>
