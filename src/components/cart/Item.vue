<template>
  <div class="item-main">
    <div class="img-area">
      <img :src="imgSrc" alt="" class="img" />
    </div>
    <div class="title-area">
      <div class="title">{{ title }}</div>
      <div class="price">{{ price }}</div>
    </div>
    <div class="amount-area">
      <div class="counter minus" @click="$emit('decrease', index)" />
      {{ amount }}
      <div class="counter plus" @click="$emit('increase', index)" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
.item-main {
  display: grid;
  grid-template-rows: 24px 18px 26px;
  grid-template-columns: 100px 20px 1fr;
  grid-template-areas:
    'img . title'
    'img . .'
    'img . amount';
  height: 100px;
  margin-bottom: 34px;
  color: #000;
}
.item-main:last-child {
  margin-bottom: 0;
}

.img-area {
  grid-area: img;
  border-radius: 4px;
  overflow: hidden;
  height: 100px;
  width: 100px;
}
.img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.title-area {
  grid-area: title;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.title {
  font-size: 16px;
  font-weight: 400;
  color: #2a2a2a;
}

.price {
  font-weight: 700;
  font-size: 16px;
}

.amount-area {
  grid-area: amount;
  display: grid;
  place-items: center;
  grid-template-columns: 26px 64px 26px;
  grid-auto-flow: column;

  font-size: 14px;
  font-weight: 500;
}

.counter {
  position: relative;
  width: 26px;
  height: 26px;
  background-color: #f0f0f5;
  border-radius: 50%;
  cursor: pointer;
}
.counter.minus::after {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  content: '';
  border-radius: 2px;
  border: 1px solid;
  width: 12px;
}

.counter.plus::before {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  content: '';
  border-radius: 2px;
  border: 1px solid;
  width: 12px;
}
.counter.plus::after {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  content: '';
  border-radius: 2px;
  border: 1px solid;
  height: 12px;
}
</style>
