<template>
  <header class="header">
    <header-item
      v-for="(item, index) in items"
      :key="index"
      :item="item"
      :counter="counters[item.count]"
      :is-last="index === items.length  - 1"
    />
  </header>
</template>

<script>
import HeaderItem from './HeaderItem';

export default {
  components: {
    HeaderItem
  },
  props: {
    counters: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      items: [
        { icon: 'dialog', text: 'отзывы', count: 'reviews' },
        { icon: 'important', text: 'неотвеченные вызовы', count: 'replies' },
        { icon: 'update', text: 'обновления', count: 'updates' },
        { icon: 'star', text: 'средний рейтинг', count: 'rating' }
      ]
    }
  }
};
</script>

<style lang="less" scoped>
.header {
  margin: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 30px;
}
</style>
