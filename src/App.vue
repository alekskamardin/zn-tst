<template>
  <main id="app">
    <the-header :counters="counters"></the-header>
    <div class="cards">
      <stage-card v-for="(card, index) in cards" :key="index" :card="card" />
    </div>
  </main>
</template>

<script>
import TheHeader from "./components/header/TheHeader";
import StageCard from "./components/card/StageCard";
import { cards, jsonData } from "./assets/constants";

export default {
  name: "app",
  components: {
    TheHeader,
    StageCard
  },
  data() {
    return {
      cards,
      jsonData
    };
  },
  computed: {
    counters() {
      const cards = this.cards;
      const reviews = this.jsonData.reduce(
        (acc, key) => (acc += cards[key.title].review),
        0
      );
      const replies = this.jsonData.reduce(
        (acc, key) => (acc += cards[key.title].reply),
        0
      );
      const updates = this.jsonData.reduce(
        (acc, key) => (acc += cards[key.title].update),
        0
      );
      const rating =
        this.jsonData.reduce(
          (acc, key) => (acc += cards[key.title].rating),
          0
        ) / this.jsonData.length;
      return { reviews, replies, updates, rating };
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const states = ["purple", "orange", "gray"];
      const r = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
      const getRandomObject = () => {
        var obj = this.jsonData[
          Math.floor(Math.random() * this.jsonData.length)
        ];
        Object.assign(obj, {
          state: states[Math.floor(Math.random() * states.length)],
          rating: r(1, 5),
          review: r(0, 200),
          reply: r(0, 20),
          update: r(0, 5)
        });
        return obj;
      };
      const self = this;
      setInterval(() => {
        var obj = getRandomObject();
        self.updateCards(obj);
      }, r(10, 30) * 1000);
    },
    updateCards({ title, ...obj }) {
      this.cards[title] = Object.assign(this.cards[title], obj);
    }
  }
};
</script>

<style lang="less">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Roboto;
}

#app {
  font-size: 13px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  max-width: 1060px;
  box-sizing: content-box;
  padding: 10px;
}

.cards {
  display: flex;
  width: 100%;
  flex-direction: column;
}
</style>
