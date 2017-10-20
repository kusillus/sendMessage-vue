<template>
  <div>
    <div v-if="name == 'Agregar'" class="pill add ">
      <span @click="change=!change" v-if="change">{{name}}</span>
      <span v-else>
        <input 
          class="input-field" 
          type="text" 
          placeholder="exameple@imedia.pe" 
          :style="{width: dinamicWidth + 'px'}"
          v-model="textValue">
      </span>
      <span @click="change=!change" v-if="change" class="close">+</span>
      <span @click="change=!change" v-else class="close p04">x</span>
    </div>
    <div v-else class="pill">
      <span>{{name}}</span>
      <span class="close">x</span>
    </div>
  </div> 
</template>

<script>
export default {
  props: ['name'],
  data() {
    return {
      change: true,
      dinamicWidth: 140,
      textValue: ''
    }
  },
  watch: {
    textValue: function () {
      this.changeWidht()
    }
  },
  methods: {
    changeWidht: function () {
      let vm = this
      console.log(vm.textValue.length)
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
    background: #7CB342;
    .close{
      color: #7CB342;
      background: white;
      padding: .4rem .35rem;
    }
  }
  background: #1E88E5;
  padding: .1rem .1rem .1rem 1rem;
  border-radius: 1rem;
  color: white;
  margin: .1rem .3rem .2rem 0;
  font-weight: lighter;
  display: flex;
  align-items: center;
  .close {
    font-size: 14px;
    line-height: 7px;
    padding: .4rem;
    color: #1E88E5;
    font-weight: bold;
    margin-left: .4rem;
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
