<template>
  <div id="main">
    <div id="title">結帳</div>
    <div id="step"><StepContainer /></div>
  </div>
</template>

<script>
import StepContainerVue from './step/StepContainer.vue';
export default {
  name: 'App',
  components: {
    StepContainer: StepContainerVue,
  },
  data: function () {
    return {
      step: 1,
    };
  },
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

#title {
  display: flex;
  align-items: center;
  grid-area: title;
  font-size: 32px;
  font-weight: 700;
}

#step {
  display: flex;
  align-items: center;
  grid-area: step;
}
</style>
