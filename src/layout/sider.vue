<template>
  <transition name="fade">
    <div class="sider" v-if="visible">
      <slot></slot>
      <button @click="closeSider">close</button>
    </div>

  </transition>

</template>

<script>
  export default {
    name: 'GuluSider',
    data () {
      return {
        visible: true
      }
    },
    methods: {
      closeSider() {
        this.visible = false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .sider {
    position: relative;

    > button {
      position: absolute;
      top: 10px;
      right: 10px;
      border: none;
      padding: 4px;
      background: #fff;
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: all .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    margin-left: -200px;
  }
</style>