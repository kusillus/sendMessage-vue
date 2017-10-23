<template>
  <div>
    <div 
      v-if="name == 'Agregar'"
      class="pill add"
      :class="{error: errorEmail}">
      <span @click="activeFocus()" v-if="change">{{name}}</span>
      <span v-else>
        <input
          v-focus
          class="input-field" 
          type="email"
          placeholder="exameple@imedia.pe" 
          :style="{width: dinamicWidth + 'px'}"
          @keydown.enter="addEmail()"
          v-model="textValue">
      </span>
      <span @click="activeFocus()" v-if="change" class="close">+</span>
      <span @click="reset()" v-else class="close p04">x</span>
    </div>
    <div v-else class="pill">
      <span>{{name}}</span>
      <span 
        class="close"
        @click="deleteItem(idx)">x</span>
    </div>
  </div> 
</template>

<script>
 const focus = {
    inserted(el) {
      el.focus()
    },
  }
export default {
  directives: { focus },
  props: ['name', 'idx'],
  data() {
    return {
      change: true,
      dinamicWidth: 140,
      textValue: '',
      errorEmail: false
    }
  },
  watch: {
    textValue: function () {
      this.changeWidht()
    }
  },
  methods: {
    deleteItem: function (index) {
      this.$store.commit('deleteEmail', index)
    },
    activeFocus: function() {
      this.change = false
      // console.log(this.$refs.herepapu)
      // this.$refs.input
      // this.$refs.emails.focus()
    },
    addEmail: function (){
      let item = this.textValue
      if(this.validateEmail(item)) {
        this.pushEmail(item)
        this.reset()
      } else {
        this.errorEmail = true
        console.log('no es un email valido')
      }
    },
    validateEmail: function (item) {
      let regexp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
      let result = regexp.test(item)
      return result
    },
    reset: function () {
      this.textValue = ''
      this.change = true
      this.errorEmail = false
    },
    pushEmail: function (item) {
      this.$store.commit('addEmail', item )
    },
    changeWidht: function () {
      let vm = this
      this.errorEmail = false
      if(vm.textValue.length > 16) {
        vm.dinamicWidth =  vm.textValue.length * 8
      }
    }
  }
}
</script>

<style lang="scss">
.pill{
  &.add{
    &.error{
      background-color: #d50200;
      .close{
        color: #d50200;
      }
    }
    background-color: #7CB342;
    .close{
      color: #7CB342;
      background: white;
      padding: 0.42rem .35rem .4rem;
    }
  }
  background-color: #1E88E5;
  padding: .1rem .2rem .1rem 1rem;
  border-radius: 1rem;
  color: white;
  margin: .1rem .3rem .2rem 0;
  font-weight: lighter;
  display: flex;
  align-items: center;
  .close {
    font-size: 14px;
    line-height: 6px;
    padding: .4rem .4rem .4rem .35rem;
    color: #1E88E5;
    font-weight: bold;
    margin-left: .5rem;
    background: white;
    border-radius: 1rem;
    cursor: pointer;
  }
}
.p04 {
  padding: .4rem!important;
}
.input-field {
  border: none;
  background: none;
  color: white;
  font-size: 14px;
  &:focus{
    outline: none;
  }
  &::placeholder{
    color: rgba(255, 255, 255, 0.5);
  }
}

</style>
