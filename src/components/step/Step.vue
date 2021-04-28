<template>
  <div :class="{ step: true, inactive }">
    <div v-if="checked" class="step-number checked"><CheckIcon /></div>
    <div v-else class="step-number">{{ index }}</div>
    {{ title }}
    <div class="dash-container">
      <div class="long-dash" />
    </div>
  </div>
</template>

<script>
import CheckIcon from '../../assets/check.svg';

export default {
  components: {
    CheckIcon,
  },
  props: {
    index: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    checked: {
      type: Boolean,
      required: true,
    },
    inactive: {
      type: Boolean,
      requried: true,
    },
  },
};
</script>

<style scoped>
.step {
  display: flex;
  align-items: center;
  flex-direction: row;

  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #333;
}

.step.inactive {
  color: #afb1bd;
}

.step-number {
  display: grid;
  place-items: center;
  margin-right: 8px;

  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid;
  background-color: #fff;

  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
}

.step-number.checked {
  background-color: #333;
}

.dash-container {
  padding: 0 32px;
}
.long-dash {
  width: 60px;
  border: 1px solid;
  border-right: none;
  border-left: none;
}

.step:last-child .dash-container {
  display: none;
}
</style>
