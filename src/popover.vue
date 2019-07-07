<template>
  <div class="popover" @click.stop="onClick" ref="popover">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" style="display: inline-block;">
      <slot></slot>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'GuluPopover',
    data() {
      return {
        visible: false
      }
    },
    methods: {
      positionContent() {
        document.body.appendChild(this.$refs.contentWrapper)
        let {width, height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
        this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
        this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
      },
      onClickDocument(event) {
        if (this.$refs.popover && (this.$refs.popover === event.target || this.$refs.popover.contains(event.target))) {
          return
        }
        if (this.$refs.contentWrapper && (this.$refs.contentWrapper === event.target || this.$refs.contentWrapper.contains(event.target))) {
          return
        }
        this.close()
      },
      open() {
        this.visible = true
        this.$nextTick(() => {
          this.positionContent()
          document.addEventListener('click', this.onClickDocument)
        })
      },
      close() {
        this.visible = false
        document.removeEventListener('click', this.onClickDocument)
      },
      onClick(event) {
        if (this.$refs.triggerWrapper.contains(event.target)) {
          if (this.visible === true) {
            this.close()
          } else {
            this.open()
          }
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  $border-color: #333;
  $border-radius: 4px;
  .popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
    margin: 10px 0 0 10px;
  }

  .content-wrapper {
    max-width: 20em;
    word-break: break-all;
    position: absolute;
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
    background: #fff;
    transform: translateY(-100%);
    border: 1px solid $border-color;
    border-radius: $border-radius;
    margin-top: -10px;
    padding: .5em 1em;
    &::before, &::after {
      content: "";
      display: block;
      border: 10px solid transparent;
      width: 0;
      height: 0;
      position: absolute;
      left: 10px;
    }
    &::before {
      border-top-color: #000;
      top: 100%;
    }
    &::after {
      border-top-color: #fff;
      top: calc(100% - 1px);
    }
  }
</style>