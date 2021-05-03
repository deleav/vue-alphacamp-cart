<template>
  <div class="input-container">
    <label class="label" :for="name">{{ label }}</label>
    <input
      :id="name"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      class="input-text"
    />
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text',
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
    },
    placeholder: {
      type: String,
    },
  },
};
</script>

<style scoped>
.input-text {
  border: 1px solid #4a4a4a;
  border-radius: 4px;
  padding: 12px 18px;
  width: 100%;
  height: 40px;
}
.input-container {
  display: grid;
  row-gap: 8px;
}
.label {
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: #808080;
}
</style>
