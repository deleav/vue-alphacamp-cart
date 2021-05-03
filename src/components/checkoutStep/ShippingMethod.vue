<template>
  <div>
    <Subtitle>運送方式</Subtitle>
    <div id="shipping-method-main">
      <Radio
        title="標準運送"
        subtitle="約 3~7 個工作天"
        :price="0"
        :checked="shippingFee === 0"
        @change="handleClick"
      />
      <Radio
        title="DHL 貨運"
        subtitle="48 小時內送達"
        :checked="shippingFee === 500"
        :price="500"
        @change="handleClick"
      />
    </div>
  </div>
</template>

<script>
import RadioVue from '../form/Radio.vue';
import SubtitleVue from '../shared/Subtitle.vue';
export default {
  components: {
    Radio: RadioVue,
    Subtitle: SubtitleVue,
  },
  props: {
    shippingFee: {
      type: Number,
      required: true,
    },
  },
  methods: {
    handleClick(e) {
      this.$emit('formChange', { name: 'shippingFee', value: e });
    },
  },
};
</script>
<style scoped>
#shipping-method-main {
  display: grid;
  row-gap: 24px;
}
</style>
