<template>
  <div class="button" :class="{ button_filled: data.isFilled }">
    <div class="button__icon" :class="`button__icon_${data.image}`" />
    <div class="button__text">{{ data.text }}</div>
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

.button {
  padding: 9px 10px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  border: 1px solid #e6ecf2;
  color: black;
  margin-right: 10px;
  margin-bottom: 5px;
  &__img {
    max-width: 12px;
    height: auto;
    margin-right: 5px;
  }
  &_filled {
    background: @purple;
    color: white;
    border: 1px solid @purple;
  }
  &__icon {
    width: 10px;
    height: 10px;
    margin-right: 5px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    &_check {
      background-image: url("../../assets/images/check.svg");
    }
    &_check-white {
      background-image: url("../../assets/images/check-white.svg");
    }
    &_reload {
      width: 13px;
      height: 13px;
      background-image: url("../../assets/images/reload.svg");
    }
  }
}
</style>
