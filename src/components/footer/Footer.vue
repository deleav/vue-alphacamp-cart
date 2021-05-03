<template>
  <div id="footer-main">
    <Button :onClick="handlPrevious">
      <template v-slot:left><ArrowLeft /></template>
      上一步
    </Button>
    <Button :onClick="handleNext" intent="primary">
      下一步
      <template v-slot:right>
        <ArrowLeft style="transform: rotate(180deg)" />
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
  methods: {
    handlPrevious() {
      const step = +this.$route.path.split('/')[1];

      if (!Number.isNaN(step) && step > 1) {
        this.$router.push(`${step - 1}`);
      }
    },
    handleNext() {
      const step = +this.$route.path.split('/')[1];

      if (!Number.isNaN(step) && step < 3) {
        this.$router.push(`${step + 1}`);
      }
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
