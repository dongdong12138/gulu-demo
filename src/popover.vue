<template>
  <div class="popover" @click.stop="onClick" ref="popover">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible" :class="{[`position-${position}`]: true}">
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
    props: {
      position: {
        type: String,
        default: 'top',
        validator(value) {
          return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
        }
      }
    },
    methods: {
      positionContent() {
        const {contentWrapper, triggerWrapper} = this.$refs
        document.body.appendChild(contentWrapper)
        const {height: height2} = contentWrapper.getBoundingClientRect()
        const {width, height, top, left} = triggerWrapper.getBoundingClientRect()
        let positions = {
          top: {
            top: top + window.scrollY,
            left: left + window.scrollX
          },
          bottom: {
            top: top + height + window.scrollY,
            left: left + window.scrollX
          },
          left: {
            top: top + window.scrollY + (height - height2) / 2,
            left: left + window.scrollX
          },
          right: {
            top: top + window.scrollY + (height - height2) / 2,
            left: left + window.scrollX + width
          },
        }
        contentWrapper.style.left = positions[this.position].left + 'px'
        contentWrapper.style.top = positions[this.position].top + 'px'

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
  }

  .content-wrapper {
    max-width: 20em;
    word-break: break-all;
    position: absolute;
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
    background: #fff;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    padding: .5em 1em;

    &::before, &::after {
      content: "";
      display: block;
      border: 10px solid transparent;
      width: 0;
      height: 0;
      position: absolute;
    }

    &.position-top {
      transform: translateY(-100%);
      margin-top: -10px;
      &::before, &::after {
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

    &.position-bottom {
      margin-top: 10px;
      &::before, &::after {
        left: 10px;
      }
      &::before {
        border-bottom-color: #000;
        bottom: 100%;
      }
      &::after {
        border-bottom-color: #fff;
        bottom: calc(100% - 1px);
      }
    }

    &.position-left {
      transform: translateX(-100%);
      margin-left: -10px;
      &::before, &::after {
        top: 50%;
        transform: translateY(-50%);
      }
      &::before {
        left: 100%;
        border-left-color: #000;
      }
      &::after {
        left: calc(100% - 1px);
        border-left-color: #fff;
      }
    }

    &.position-right {
      margin-left: 10px;
      &::before, &::after {
        top: 50%;
        transform: translateY(-50%);
      }
      &::before {
        right: 100%;
        border-right-color: #000;
      }
      &::after {
        right: calc(100% - 1px);
        border-right-color: #fff;
      }
    }

  }
</style>