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
      alert('previous');
    },
    handleNext() {
      alert('next');
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
