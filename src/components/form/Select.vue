<template>
  <div class="select-container">
    <label class="label" :for="name">{{ label }}</label>
    <select :name="name" :id="name" class="select">
      <option
        v-for="option in options"
        :key="option.value"
        :value="options.value"
      >
        {{ option.name }}
      </option>
    </select>
    <div class="arrow-container">
      <TriangleArrowDown />
    </div>
  </div>
</template>

<script>
import TriangleArrowDown from '../../assets/triangle-arrow-down.svg';

export default {
  components: {
    TriangleArrowDown,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
    },
    style: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
.select-container {
  position: relative;
  display: grid;
  row-gap: 8px;
}
.select {
  border: 1px solid #4a4a4a;
  border-radius: 4px;
  padding: 12px 18px;
  width: 100%;
  height: 40px;
  appearance: none;
  cursor: pointer;
}
.arrow-container {
  position: absolute;
  right: 18px;
  top: 50%;
  transform: translateX(-50%);
  pointer-events: none;
}
.label {
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: #808080;
}
</style>
