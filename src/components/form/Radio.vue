<template>
  <label class="radio-container">
    <input
      type="radio"
      class="radio"
      :name="group"
      :checked="checked"
      @change="$emit('change', price)"
    />
    <div class="inner" />
    <div class="check-circle" />
    <div class="title-container">
      <h3 class="title">{{ title }}</h3>
      {{ priceText }}
    </div>
    <div class="subtitle">{{ subtitle }}</div>
  </label>
</template>

<script>
import getPriceText from '../../utils/getPriceText';
export default {
  props: {
    group: {
      type: String,
      default: 'group',
    },
    checked: {
      type: Boolean,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  computed: {
    priceText() {
      return getPriceText(this.price);
    },
  },
};
</script>

<style scoped>
.radio-container {
  position: relative;
  display: grid;
  align-content: center;
  align-items: center;
  grid-template-columns: 20px 1fr;
  column-gap: 20px;
  grid-template-rows: 20px 16px;
  row-gap: 2px;
  grid-template-areas:
    'circle title'
    'circle subtitle';

  width: 435px;
  height: 60px;
  padding: 0 20px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 400;
}
.inner {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  border: 1px solid #f0f0f5;
  pointer-events: none;
}
.radio-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.title-container {
  grid-area: title;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.title {
  margin: 0;
  font-size: 14px;
  font-weight: 700;
}
.subtitle {
  grid-area: subtitle;
}

.check-circle {
  grid-area: circle;
  display: grid;
  place-items: center;
  width: 20px;
  height: 20px;
  border-radius: 1px solid #222;
  border-radius: 50%;
}
.check-circle::after {
  content: '';
  width: 8px;
  height: 8px;
  border-radius: 50%;
}
.radio:checked ~ .check-circle {
  background-color: #2a2a2a;
}
.radio:checked ~ .check-circle::after {
  background-color: #fff;
}
.radio:checked ~ .inner {
  border-color: #2a2a2a;
}
</style>
