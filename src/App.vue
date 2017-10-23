<template>
  <div id="app">
    <div style="width:100%;margin-bottom:3rem;">
      <p>Componente para el envio de correos, agrega, elimina y envia un array de correos.</p>
      <p>para agregar un correo al array preciona enter, luego de ingresar un correo valido.</p>
    </div>
    <div class="container-input">
      <activeMessage 
        v-if="active"
        @clicked="hiddenInput">
      </activeMessage>
      <button class="btn" v-if="!active" @click="active=!active">SEND MESSAGE</button>
    </div>
    <div class="container-input">
      <h2>Current email array.</h2>
      <pre>
        {{emails}}
      </pre>
    </div>
  </div>
</template>

<script>
import activeMessage from './components/cActiveMessage.vue'
export default {
  name: 'app',
  data () {
    return {
      active: false,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    hiddenInput: function () {
      this.active = false
    }
  },
  computed: {
    emails: function () {
      return this.$store.getters.getEmails
    }
  },
  components: {
    activeMessage
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
}
.container-input {
  width: 45%;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.btn {
  font-size: 12px;
  line-height: 30px;
  height: 30px;
  padding: 0 1.3rem;
  margin-left: .3rem;
  text-decoration: none;
  color: #fff;
  background-color: #26a69a;
  text-align: center;
  letter-spacing: .5px;
  -webkit-transition: .2s ease-out;
  transition: .2s ease-out;
  cursor: pointer;
  border: none;
  border-radius: 2px;

}
</style>
