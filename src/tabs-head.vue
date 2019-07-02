<template>
  <div class="tabs-head">
    <slot></slot>
    <slot name="actions"></slot>
  </div>
</template>

<script>
  export default {
    name: 'GuluTabsHead',
    inject: ['eventBus'],
    created() {
      console.log(this.eventBus)
    }
  }
</script>

<style scoped lang="scss">
  .tabs-head {

  }
</style>