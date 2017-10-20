<template>
  <div>
    <div class="container-email">
      <span v-for="(el, idx) in emails" :key="idx">
        <pill 
          :name="el.name">
        </pill>
      </span>
      <pill
        :name="add"></pill>
    </div>
      soy un componente rikolino
      {{count}}
  </div>
</template>

<script>
import pill from './pillEmail.vue'
export default {
  data () {
    return {
      add: 'Agregar',
      emails: [ 
        { 'name': 'soy un correo riko' },
        { 'name': 'soy un correo riko 1' }
      ]

    }
  },
  computed: {
    count: function () {
      return this.$store.getters.getCount
    }
  },
  components: {
    pill
  }
}
</script>

<style lang="scss">
.container-email {
  border-bottom: solid .1rem grey;
  display: flex;
}
</style>
