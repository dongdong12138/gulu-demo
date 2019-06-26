<template>
  <div class="col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'GuluCol',
    props: {
      span: [String, Number],
      offset: {
        type: [String, Number]
      },
    },
    data() {
      return {
        gutter: 0
      }
    },
    computed: {
      colClass() {
        return [this.span && `col-${this.span}`, this.offset && `offset-${this.offset}`]
      },
      colStyle() {
        return {
          paddingLeft: this.gutter/2 + 'px',
          paddingRight: this.gutter/2 + 'px'
        }
      }
    },
  }
</script>

<style scoped lang="scss">
  .col {
    width: 50%;

    $class-prefix: col-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }

    $class-prefix: offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }

</style>