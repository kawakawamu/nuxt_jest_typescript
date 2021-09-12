import { mount } from '@vue/test-utils'
import Header from '@/components/Header.vue'

describe('Header', () => {
  it('メニュー画面が出てくるか', () => {
    const wrapper = mount(Header)
    // クラス名を取得
    const title = wrapper.find('.menu__code2')
    expect(title.text()).toBe('項目2')
  })
})

describe('Header', () => {
  it('クリックしたときにクラス名が変わっているか', async () => {
    const wrapper = mount(Header)

    // DOM更新系は即座にDOMに反映されないのでasync awaitを使う
    await wrapper.get('.header__btn').trigger('click')

    // クラス名で取得する
    const contain = wrapper.find('.show__menu')

    // クラス名show__menuがあるか
    expect(contain.exists()).toBe(true)
  })
})
