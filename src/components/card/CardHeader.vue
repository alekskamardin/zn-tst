<template>
  <div class="card-header">
    <div class="card-header__title">{{ data.title }}</div>
    <div
      v-for="(element, index) in data.info"
      :key="index"
      class="card-header__info"
    >
      <span class="card-header__delimiter">&#8226;</span>{{ element }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/variables.less";

.card-header {
  display: flex;
  font-size: 16px;
  flex-wrap: wrap;
  &__title {
    font-weight: bold;
  }
  &__info {
    line-height: 20px;
    color: @gray-text;
  }
  &__delimiter {
    margin: 0 5px;
  }
}
</style>
