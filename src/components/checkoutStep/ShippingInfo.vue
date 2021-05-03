<template>
  <div>
    <Subtitle>運送方式</Subtitle>
    <div id="shipping-info-main">
      <Select
        style="grid-column: 1 / span 2"
        label="稱謂"
        name="salutation"
        :options="[
          { name: '先生', value: 'Mr.' },
          { name: '小姐', value: 'Ms.' },
        ]"
      />
      <Input
        style="grid-column: 3 / span 4"
        label="姓名"
        type="text"
        name="name"
        placeholder="請輸入姓名"
      />
      <Input
        style="grid-column: 1 / span 3"
        label="電話"
        type="text"
        name="phone"
        placeholder="請輸入行動電話"
      />
      <Input
        style="grid-column: 4 / span 3"
        label="Email"
        type="text"
        name="email"
        placeholder="請輸入電子郵件"
      />
      <Select
        style="grid-column: 1 / span 2"
        label="縣市"
        type="text"
        name="city"
        placeholder="請選擇縣市"
        :options="[{ name: '台北', value: 'Taipei' }]"
      />
      <Input
        style="grid-column: 3 / span 4"
        label="地址"
        type="text"
        name="addr"
        placeholder="請輸入地址"
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
