<template>
  <div class="row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'GuluRow',
    props: {
      gutter: {
        type: [String, Number]
      },
      align: {
        type: String,
        validator(value) {
          return ['left', 'center', 'right'].includes(value)
        }
      }
    },
    computed: {
      rowStyle() {
        let {gutter} = this
        return {marginLeft: -gutter/2 + 'px', marginRight: -gutter/2 + 'px'}
      },
      rowClass() {
        let {align} = this
        return [align && `align-${align}`]
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
    flex-wrap: wrap;
    &.align-left {
      justify-content: flex-start;
    }
    &.align-center {
      justify-content: center;
    }
    &.align-right {
      justify-content: flex-end;
    }
  }
</style>