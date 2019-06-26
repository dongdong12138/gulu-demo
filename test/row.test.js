const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {

  it('存在.', () => {
    expect(Row).to.be.exist
  })

  it('接受 gutter 属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const RowConstructor = Vue.extend(Row)
    const row = new RowConstructor({
      propsData: {
        gutter: 10
      }
    })
    const ColConstructor = Vue.extend(Col)
    const col = new ColConstructor()
    col.$mount(row)
    console.log(row.$el.outerHTML)
    expect(1).to.eq(1)
    row.$destroy()
  })
})