<template>
  <div class="content" :class="{ content_last: isLast } ">
    <div class="content__message">
      <div class="content__count">{{ counter }}</div>
      <div class="content__text">{{ item.text }}</div>
    </div>
    <div class="content__icon" :class="`content__icon_${item.icon}`" />
  </div>
</template>

<script>
export default {
  props: {
    counter: {
      type: Number,
      required: true
    },
    item: {
      type: Object,
      required: true
    },
    isLast: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/variables.less";
.content {
  display: flex;
  justify-content: space-between;
  background: @purple;
  width: 260px;
  color: white;
  padding: 14px 15px 20px 25px;
  margin-bottom: 5px;
  margin-right: 5px;
  border-radius: 4px;
  &_last {
    margin-right: 0;
  }
  &__count {
    font-size: 25px;
    font-weight: bold;
  }
  &__icon {
    width: 40px;
    height: auto;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    &_dialog {
      background-image: url('../../assets/images/dialog.svg');
    }
    &_important {
      background-image: url('../../assets/images/important.svg');
    }
    &_update {
      background-image: url('../../assets/images/update.svg');
    }
    &_star {
      background-image: url('../../assets/images/star.svg');
    }
  }
  @media (max-width: 1080px) {
    &_last {
      margin-right: 5px;
    }
  }
}
</style>
