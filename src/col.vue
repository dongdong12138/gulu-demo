<template>
  <div class="col" :class="[`col-${span}`]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'GuluCol',
    props: {
      span: [String, Number]
    }
  }
</script>

<style scoped lang="scss">
  $class-prefix: col-;
  .col {
    width: 50%;
    height: 100px;
    background: yellowgreen;
    border: 1px solid red;

    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
  }

</style>