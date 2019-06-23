<template>
  <div class="g-button-group">
    <slot></slot>
  </div>
</template>

<script></script>

<style lang="scss">
  .g-button-group {
    display: inline-flex;
    vertical-align: middle;

    > .g-button {
      border-radius: 0;

      &:hover {
        position: relative;
        z-index: 1;
      }

      &:first-child {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        &:hover {
          border-color: red;
        }
      }
      &:last-child {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
        margin-left: -1px;
        &:hover {
          border-color: red;
        }
      }

    }
  }
</style>