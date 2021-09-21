import { mount } from '@vue/test-utils'
import Header from '@/components/Header.vue'

describe('Header', () => {
  it('メニュー画面が消えてないか', () => {
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
    const contain = wrapper.find('.block')

    // クラス名.block切り替わっているか
    expect(contain.exists()).toBe(true)

    // もう一度押す（閉じる)
    await wrapper.get('.header__btn').trigger('click')
    const Closecontain = wrapper.find('.block')

    // クラス名.blockは消えているか
    expect(Closecontain.exists()).toBe(false)
  })
})
