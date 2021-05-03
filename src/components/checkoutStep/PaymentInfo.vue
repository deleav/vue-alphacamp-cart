<template>
  <div id="payment-info-main">
    <Input
      style="grid-column: 1 / span 4"
      label="持卡人姓名"
      type="text"
      name="ccname"
      placeholder="John Doe"
    />
    <Input
      style="grid-column: 1 / span 4"
      label="卡號"
      type="text"
      name="cardnumber"
      placeholder="1111 2222 3333 4444"
    />
    <Input
      style="grid-column: 1 / span 3"
      label="有效期限"
      type="text"
      name="exp-date"
      placeholder="MM/YY"
    />
    <Input
      style="grid-column: 4 / span 3"
      label="CVC / CCV "
      type="text"
      name="cvv"
      placeholder="123"
    />
  </div>
</template>

<script>
import InputVue from '../form/Input.vue';
export default {
  components: {
    Input: InputVue,
  },
};
</script>

<style scoped>
#payment-info-main {
  display: grid;
  grid-template-columns: repeat(6, 65px);
  grid-template-rows: repeat(3, 64px);
  gap: 24px 30px;
}
</style>
