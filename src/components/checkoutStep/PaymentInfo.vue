<template>
  <div id="payment-info-main">
    <Input
      style="grid-column: 1 / span 4"
      label="持卡人姓名"
      type="text"
      name="ccname"
      :value="ccname"
      placeholder="John Doe"
      @change="handleChange"
    />
    <Input
      style="grid-column: 1 / span 4"
      label="卡號"
      type="text"
      name="cardnumber"
      :value="cardnumber"
      placeholder="1111 2222 3333 4444"
      @change="handleChange"
    />
    <Input
      style="grid-column: 1 / span 3"
      label="有效期限"
      type="text"
      name="expdate"
      :value="expdate"
      placeholder="MM/YY"
      @change="handleChange"
    />
    <Input
      style="grid-column: 4 / span 3"
      label="CVC / CCV "
      type="text"
      name="cvv"
      :value="cvv"
      placeholder="123"
      @change="handleChange"
    />
  </div>
</template>

<script>
import InputVue from '../form/Input.vue';
export default {
  components: {
    Input: InputVue,
  },
  props: {
    ccname: String,
    cardnumber: String,
    expdate: String,
    cvv: String,
  },
  methods: {
    handleChange(obj) {
      this.$emit('formChange', obj);
    },
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
