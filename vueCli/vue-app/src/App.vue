<template>
  <h1>{{ title }}</h1>
  <input type="text" ref="name">
  <button @click="handleClick">clicker moi</button>
  <ModalComponent />
</template>

<script>
import ModalComponent from './components/ModalComponent.vue';

export default {
  name: 'App',
  components: {
    ModalComponent,
  },
  data(){
    return{
      title: "Bienvenue dans notre toute premiere app VueJs."
    }
  },
  methods: {
    handleClick(){
      console.log(this.$refs.name);
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1{
  color: blueviolet;
  font-size: 4rem;
}
</style>
