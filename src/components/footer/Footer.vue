<template>
  <div id="footer-main">
    <Button @click="handlPrevious">
      <template v-slot:left><ArrowLeft /></template>
      上一步
    </Button>
    <Button @click="handleNext" intent="primary">
      <template v-if="finalStep">確認下單</template>
      <template v-else>下一步</template>
      <template v-slot:right>
        <ArrowLeft v-show="!finalStep" style="transform: rotate(180deg)" />
      </template>
    </Button>
  </div>
</template>

<script>
import ArrowLeft from '../../assets/arrow-left.svg';
import ButtonVue from './Button.vue';
export default {
  components: {
    Button: ButtonVue,
    ArrowLeft,
  },
  props: {
    step: {
      type: Number,
      required: true,
    },
  },
  methods: {
    handlPrevious() {
      if (!Number.isNaN(this.step) && this.step > 1) {
        this.$router.push(`${this.step - 1}`);
      }
    },
    handleNext() {
      if (this.finalStep) return this.$emit('submit');
      if (!Number.isNaN(this.step) && this.step < 3) {
        this.$router.push(`${this.step + 1}`);
      }
    },
  },
  computed: {
    finalStep() {
      return this.step === 3;
    },
  },
};
</script>

<style scoped>
#footer-main {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  border-top: 1px solid #e6e6eb;
}
</style>
