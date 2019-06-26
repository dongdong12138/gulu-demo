<template>
  <div class="row" :style="rowStyle">
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
    computed: {
      rowStyle() {
        let {gutter} = this
        return {marginLeft: -gutter/2 + 'px', marginRight: -gutter/2 + 'px'}
      }
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