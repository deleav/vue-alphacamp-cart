<template>
  <div>
    <Subtitle>運送方式</Subtitle>
    <div id="shipping-info-main">
      <Select
        style="grid-column: 1 / span 2"
        label="稱謂"
        name="salutation"
        :value="salutation"
        :options="[
          { name: '先生', value: 'Mr.' },
          { name: '小姐', value: 'Ms.' },
        ]"
        @change="handleChange"
      />
      <Input
        style="grid-column: 3 / span 4"
        label="姓名"
        type="text"
        name="username"
        :value="username"
        placeholder="請輸入姓名"
        @change="handleChange"
      />
      <Input
        style="grid-column: 1 / span 3"
        label="電話"
        type="tel"
        name="phone"
        :value="phone"
        placeholder="請輸入行動電話"
        @change="handleChange"
      />
      <Input
        style="grid-column: 4 / span 3"
        label="Email"
        type="email"
        name="email"
        :value="email"
        placeholder="請輸入電子郵件"
        @change="handleChange"
      />
      <Select
        style="grid-column: 1 / span 2"
        label="縣市"
        type="text"
        name="city"
        :value="city"
        placeholder="請選擇縣市"
        :options="[{ name: '台北', value: 'Taipei' }]"
        disabledOption="請選擇縣市"
        @change="handleChange"
      />
      <Input
        style="grid-column: 3 / span 4"
        label="地址"
        type="text"
        name="addr"
        :value="addr"
        placeholder="請輸入地址"
        @change="handleChange"
      />
    </div>
  </div>
</template>

<script>
import InputVue from '../form/Input.vue';
import SelectVue from '../form/Select.vue';
import SubtitleVue from '../shared/Subtitle.vue';

export default {
  components: {
    Subtitle: SubtitleVue,
    Input: InputVue,
    Select: SelectVue,
  },
  props: {
    salutation: String,
    username: String,
    phone: String,
    email: String,
    city: String,
    addr: String,
  },
  methods: {
    handleChange(obj) {
      this.$emit('form-change', obj);
    },
  },
};
</script>

<style scoped>
#shipping-info-main {
  display: grid;
  grid-template-columns: repeat(6, 65px);
  grid-template-rows: repeat(3, 64px);
  gap: 24px 30px;
}
</style>
