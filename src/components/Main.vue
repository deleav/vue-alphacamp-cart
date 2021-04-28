<template>
  <div id="main">
    <div id="title-area">結帳</div>
    <div id="step-area"><StepContainer /></div>
    <div id="footer-area"><Footer /></div>
  </div>
</template>

<script>
import FooterVue from './footer/Footer.vue';
import StepContainerVue from './step/StepContainer.vue';
export default {
  name: 'App',
  components: {
    StepContainer: StepContainerVue,
    Footer: FooterVue,
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
  column-gap: 130px;
  grid-template-columns: 540px 440px;
  grid-template-rows: 38px 48px 64px 336px 70px;
  grid-template-areas:
    'title .'
    '. .'
    'step cart'
    'router cart'
    'footer cart';
}

#title-area {
  grid-area: title;
  display: flex;
  align-items: center;
  font-size: 32px;
  font-weight: 700;
}

#step-area {
  grid-area: step;
  display: flex;
  align-items: center;
}

#footer-area {
  grid-area: footer;
}
</style>
