<template>
  <div id="main">
    <div class="title">結帳</div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
#main {
  display: grid;
  margin: auto;
  width: fit-content;
  padding: 40px;
  grid-column-gap: 130px;
  grid-template-columns: 540px 440px;
  grid-template-rows: 38px 48px 64px 336px 70px;
  grid-template-areas:
    'title .'
    '. .'
    'step cart'
    'router cart'
    'footer cart';
}

.title {
  grid-area: title;
  font-size: 32px;
  font-weight: 700;
  line-height: 38px;
}
</style>
