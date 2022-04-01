<template>
  <section class="advice">
    <transition-group name="fade">
      <h1 v-if="advice">advice #{{ advice.id }}</h1>
      <q v-if="advice">{{ advice.advice }}</q>
    </transition-group>
    <img src="../assets/pattern-divider-desktop.svg" alt="divider image" />
    <button class="advice-button" @click="getAdvice">
      <img src="../assets/icon-dice.svg" alt="dice icon" />
    </button>
  </section>
</template>

<script>
export default {
  emits: ["getAdvice"],
  props: {
    advice: Object,
  },
  setup: (props, { emit }) => ({
    getAdvice: () => emit("getAdvice"),
  }),
};
</script>

<style scoped>
.advice {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 24px;
  max-width: 500px;
  min-height: 200px;
  padding: 44px;
  border-radius: 12px;
  background-color: var(--dark-grayish-blue);
  box-shadow: 1px 1px 20px hsla(217, 25%, 10%, .2);
}

.advice h1 {
  text-transform: uppercase;
  font-size: 0.8em;
  letter-spacing: 4px;
  color: var(--neon-green);
}

.advice q {
  font-size: 1.7em;
  text-align: center;
  font-weight: 800;
  quotes: "“" "”";
}

.advice > img {
  margin-top: 12px;
  width: 98%;
  object-position: center;
  margin-bottom: 20px;
}

.advice-button {
  position: absolute;
  bottom: -28px;
  display: flex;
  align-items: center;
  padding: 18px;
  border-radius: 50%;
  background-color: var(--neon-green);
  cursor: pointer;
  transition: all 0.1s ease;
}

.advice-button:hover {
  box-shadow: 0px 0px 32px var(--neon-green);
}

.advice-button img {
  max-width: 20px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media screen and (max-width: 425px) {
  .advice{
    padding: 44px 22px;
  }
}
</style>