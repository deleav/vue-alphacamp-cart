<template>
  <div class="price-row-main">
    <div class="title">{{ title }}</div>
    <div class="price">{{ price }}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.price-row-main {
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-top: 1px solid #f0f0f5;
  height: 68px;
  font-size: 14px;
}
.title {
  color: #2a2a2a;
}
.price {
  color: #000;
  font-weight: bold;
}
</style>
