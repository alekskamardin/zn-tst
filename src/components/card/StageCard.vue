<template>
  <div class="card" :class="`card_${card.state}`">
    <card-header :data="card.header" />
    <div class="card__buttons">
      <card-button v-for="(button, index) in card.buttons" :key="index" :data="button" />
    </div>
    <card-footer :data="card.footer || footerText" :rating="card.rating" />
    <div class="card__dots">
      <div class="card__tooltip">Включить</div>
    </div>
    <div v-if="card.isWarning" class="card__warning-button">
      <div class="card__bell-icon" />
      Требует действий
    </div>
  </div>
</template>

<script>
import CardHeader from "./CardHeader";
import CardButton from "./CardButton";
import CardFooter from "./CardFooter";

export default {
  components: {
    CardHeader,
    CardButton,
    CardFooter
  },
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  computed: {
    footerText() {
      return { text: `${this.card.review} отзывов, ${this.card.reply} неотвеченных` }
    }
  }
}
</script>

<style lang="less" scoped>

@import "../../assets/variables.less";

.card {
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 1;
  position: relative;
  border: 1px solid @gray;
  border-left: 4px solid @purple;
  border-radius: 4px;
  padding: 15px 20px 15px 30px;
  margin-bottom: 10px;
  &__bell-icon {
    min-width: 12px;
    min-height: 14px;
    margin-right: 5px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    background-image: url('../../assets/images/bell.svg');
  }
  &__warning-button {
    display: flex;
    right: 18px;
    bottom: 15px;
    color: white;
    position: absolute;
    background: @orange;
    border-radius: 4px;
    padding: 5px 10px;
  }
  @media(max-width: 410px) {
    &__warning-button {
      width: 100px;
    }
  }
  &__tooltip {
    background: white;
    z-index: 2;
    position: absolute;
    right: -32px;
    top: 32px;
    border-radius: 4px;
    font-size: 16px;
    color: @purple;
    padding: 20px 15px;
    border: 1px solid @gray;
    &:after, &:before {
      bottom: 100%;
      left: 69%;
      border: solid transparent;
      content: " ";
      height: 0;
      width: 0;
      position: absolute;
    }
    &:after {
      border-color: rgba(255, 255, 255, 0);
      border-bottom-color: white;
      border-width: 12px;
      margin-left: -12px;
    }
    &:before {
      border-color: rgba(230, 236, 242, 0);
      border-bottom-color: @gray;
      border-width: 13px;
      margin-left: -13px;
    }
  }
  &__dots {
    position: absolute;
    top: 22px;
    right: 18px;
    width: 4px;
    height: 18px;
    cursor: pointer;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url('../../assets/images/dots.svg');
    &:hover {
      background-image: url('../../assets/images/dots-purple.svg')
    }
  }
  &__dots &__tooltip {
    visibility: hidden;
  }
  &__dots:hover &__tooltip {
    visibility: visible;
  }
  &_gray {
    border-left-color: @gray;
    order: 3;
  }
  &_orange {
    border-left-color: @orange;
    order: 2;
  }
  &_purple {
    border-left-color: @purple;
    order: 1;
  }
  &__buttons {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 7px;
    margin-top: 10px;
  }
}
</style>
