<template>
  <button @click="onClick()" :class="{ button: true, primary }">
    <slot name="left" />
    <slot />
    <slot name="right" />
  </button>
</template>

<script>
export default {
  props: {
    intent: {
      type: String,
      default: 'text',
    },
    onClick: {
      type: Function,
      required: true,
    },
  },
  computed: {
    primary() {
      return this.intent === 'primary';
    },
  },
};
</script>

<style scoped>
.button {
  display: grid;
  grid-auto-flow: column;
  place-content: center;
  place-items: center;
  column-gap: 12px;
  width: 174px;
  height: 46px;
  padding: 0;
  border-radius: 8px;

  color: #000;
  cursor: pointer;
  border: none;
  background-color: transparent;
}

.button.primary {
  background-color: #f67599;
  color: #fff;
}
.button.primary > svg path {
  fill: #fff;
}
</style>
