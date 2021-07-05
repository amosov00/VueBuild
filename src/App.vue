<template>
  <div>
    <transition name="ga">
    <h1 v-if="counter">123456789</h1>
    </transition>
    <button @click="nextCount">+</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      counter: true
    }
  },
  methods: {
    nextCount(){
      this.counter = !this.counter
    }
  }
}
</script>
<style>
.ga-enter {
  opacity: 0;
}
.ga-enter-active {
  transition: opacity 5s;
}
.ga-enter-to {
  background-color: red;
}

.ga-leave {}
.ga-leave-active {}
.ga-leave-to {}

</style>
