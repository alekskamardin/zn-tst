<template>
  <footer class="footer" :class="{ footer_disabled: data.disabled }">
    <div v-if="rating" class="footer__rating">
      <div class="footer__rating-icon" />
      <div class="footer__rating-text">{{ rating }} из 5</div>
    </div>
    <div class="footer__message">
      <div v-if="rating === 0" class="footer__rating-icon" />
      <div v-if="rating" class="footer__delimiter">&#8226;</div>
      {{ data.text }}
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    },
    rating: {
      type: Number,
      required: true
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/variables.less";

.footer {
  display: flex;
  &__delimiter {
    margin: 0 5px;
  }
  &__rating {
    display: flex;
  }
  &__message {
    display: flex;
  }
  &__rating-icon {
    width: 16px;
    height: 15px;
    margin-right: 5px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    background-image: url("../../assets/images/star-orange.svg");
  }
  &__rating-text {
    color: @orange;
  }
  &_disabled {
    color: @gray-text;
  }
  &_disabled &__rating-text {
    color: @gray-text;
  }
  &_disabled &__rating-icon {
    background-image: url("../../assets/images/star-gray.svg");
  }
}
</style>
