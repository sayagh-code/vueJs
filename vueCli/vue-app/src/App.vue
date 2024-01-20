<template>
  <h1>{{ title }}</h1>
  <input type="text" ref="name">
  <button @click="handleClick">clicker moi</button>
  <teleport to="#modals" v-if="showModal">
    <ModalComponent :entete="entete" theme="dark" @close="toggleModal">
      <p>slot Test</p>
      <template v-slot:liens>
        <a href="#">inscrivez-vous</a>
        <a href="#">Encore plus ...</a>
      </template>
      <template v-slot:defaut>
        <p>Votre text par defaut par ici</p>
      </template>
    </ModalComponent>
  </teleport>
  
</template>

<script>
import ModalComponent from './components/ModalComponent';

export default {
  name: 'App',
  components: {
    ModalComponent,
  },
  data(){
    return{
      title: "Bienvenue dans notre toute premiere app VueJs.",
      entete: "pre-inscrivez vous maintenant",
      showModal: false
    }
  },
  methods: {
    handleClick(){
      console.log(this.$refs.name.value);
      this.$refs.name.classList.add('active')
      if(this.$refs.name.value=="123")
        this.toggleModal();
      else
      this.$refs.name.focus()

    },
    toggleModal(){
        this.showModal= !this.showModal
    }
  }
}
</script>

<style>
#app, #modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1{
  color: blueviolet;
  font-size: 3rem;
}
.dark a{
        margin: 0 30px;
        border: solid 1px #ebebeb;
        padding: 15px 20px;
        border-radius: 15px;
        text-decoration: none;
        color: #fff;
}
.dark a:hover{
  background: #fff;
  color: #111;
}
.light a{
        margin: 0 30px;
        border: solid 1px #0e0e0e;
        padding: 15px 20px;
        border-radius: 15px;
        text-decoration: none;
        color: #090909;
    }
.light a:hover{
  background: #111;
  color: #fff;
}
</style>
