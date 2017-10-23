<template>
  <div>
    <div class="container-email">
      <span v-for="(el, idx) in emails" :key="idx">
        <pill 
          :name="el.email"
          :idx="idx">
        </pill>
      </span>
      <pill
        :name="add"
        :idx="0">
      </pill>
      <span class="btnSend" v-if="send" @click="sendData()">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M2,21L23,12L2,3V10L17,12L2,14V21Z" /></svg>
      </span>
      <span class="btnSend" v-else @click="closeInput()">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z" /></svg>
      </span>
    </div>
  </div>
</template>

<script>
import axios from 'Axios'
import pill from './pillEmail.vue'
export default {
  data () {
    return {
      add: 'Agregar',
      send: false,
      urlService: 'your_url_here'
    }
  },
  mounted: function () {
    this.validateSend()
  },
  watch: {
    emails: function () {
      this.validateSend()
    }
  },
  computed: {
    emails: function () {
      return this.$store.getters.getEmails
    }
  },
  methods: {
    closeInput: function () {
      this.$emit('clicked')
    },
    validateSend: function () {
      if(this.emails.length > 0) {
        this.send = true
      } else {
        this.send = false
      }
    },
    sendData: function (){
      let vm = this
      //debes integragrlo con tu servicio para que funcione
      axios.post(vm.urlService, { 'listEmails' : vm.emails})
      .then( function (response) {
        console.log(response)
      })
      .catch( function (response) {
        console.log(response)
        alert('debes integragrlo con tu servicio para que funcione')
      })
    }
  },
  components: {
    pill
  }
}
</script>

<style lang="scss">
.container-email {
  border-bottom: solid .01rem grey;
  display: flex;
  flex-flow: row wrap;
}
.btnSend {
  margin-left: auto;
  svg {
    fill: #1E88E5;
  }
}
</style>
