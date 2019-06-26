<template>
  <div class="col" :class="[`col-${span}`, offset && `offset-${offset}`]"
    :style="{paddingLeft: gutter/2 + 'px', paddingRight: gutter/2 + 'px'}"
  >
    <div style="border: 1px solid yellowgreen; height: 100px;">
      <slot></slot>
    </div>
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
    created() {
    },
    mounted() {
    }
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