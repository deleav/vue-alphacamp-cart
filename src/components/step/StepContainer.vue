<template>
  <div id="step-container">
    <Step
      v-for="(stepIndicator, index) in stepIndicators"
      :key="stepIndicator"
      :index="index + 1"
      :title="stepIndicator"
      :inactive="index + 1 > currentStep"
      :checked="index + 1 < currentStep"
    />
  </div>
</template>

<script>
import StepVue from './Step.vue';

export default {
  components: {
    Step: StepVue,
  },
  props: {
    currentStep: {
      type: Number,
      default: 1,
    },
  },
  data: function () {
    return {
      stepIndicators: ['寄送地址', '運送方式', '付款資訊'],
    };
  },
};
</script>

<style scoped>
#step-container {
  display: flex;
}
</style>
