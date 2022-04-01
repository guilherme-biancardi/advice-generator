<template>
  <main>
    <Advice-generate
      :advice="state.advice"
      @getAdvice="getAdvice"
    ></Advice-generate>
  </main>
</template>

<script>
import AdviceGenerate from "./components/AdviceGenerate.vue";
import { onMounted, reactive } from "@vue/runtime-core";
import { useIndex } from "./mixins";

export default {
  components: { AdviceGenerate },
  setup() {
    const { axios } = useIndex();

    const state = reactive({
      advice: null,
    });

    const getAdvice = async () => {
      state.advice = null
      await axios.get("/advice").then(({ data }) => (state.advice = data.slip));
    }

    onMounted(getAdvice);

    return {
      state,
      getAdvice,
    };
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Manrope', sans-serif;
}

:root{
 --light-cyan: hsl(193, 38%, 86%);
 --neon-green: hsl(150, 100%, 66%);
 --grayish-blue: hsl(217, 19%, 38%);
 --dark-grayish-blue: hsl(217, 19%, 24%);
 --dark-blue: hsl(218, 23%, 16%);
}

main{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--dark-blue);
  color: var(--light-cyan);
  padding: 16px;
}

button{
  outline: none;
  border: none;
}
</style>
