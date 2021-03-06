const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/popover'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {

  it('存在.', () => {
    expect(Popover).to.be.exist
  })

  it('可以设置 position.', (done) => {
    Vue.component('g-popover', Popover)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <g-popover position="bottom" ref="a">
        <template slot="content">
          <div>popover 内容</div>
        </template>
        <button>click me</button>
      </g-popover>
    `
    const vm = new Vue({
      el: div
    })
    vm.$nextTick(() => {
      vm.$el.querySelector('button').click()
      vm.$nextTick(() => {
        const {contentWrapper} = vm.$refs.a.$refs
        expect(contentWrapper.classList.contains('position-bottom')).to.be.true
        done()
      })
    })
  })

  xit('可以设置 trigger', (done) => {
    Vue.component('g-popover', Popover)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <g-popover position="bottom" ref="a">
        <template slot="content">
          <div>popover 内容</div>
        </template>
        <button>click me</button>
      </g-popover>
    `
    const vm = new Vue({
      el: div
    })
    setTimeout(() => {
      let event = new Event('mouseenter')
      vm.$el.dispatchEvent(event)
      vm.$nextTick(() => {
        const {contentWrapper} = vm.$refs.a.$refs
        expect(contentWrapper).to.exist
        done()
      })
    }, 200)
  })

})