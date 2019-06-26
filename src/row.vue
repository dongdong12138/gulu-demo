<template>
  <div class="row" :style="{marginLeft: -gutter/2 + 'px', marginRight: -gutter/2 + 'px'}">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'GuluRow',
    props: {
      gutter: {
        type: [String, Number]
      }
    },
    created() {
    },
    mounted() {
      this.$children.forEach(function (vm) {
        vm.gutter = this.gutter
      }.bind(this))
    }
  }
</script>

<style lang="scss" scoped>
  .row {
    display: flex;
  }
</style>