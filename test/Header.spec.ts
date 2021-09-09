import { mount } from '@vue/test-utils'
import Header from '@/components/Header.vue'

describe('Header', () => {
  it('タイトル名があって、変更されていないか', () => {
    const wrapper = mount(Header)
    // クラス名を取得
    const title = wrapper.find('.header__title')
    expect(title.text()).toBe('Nuxt.jsでjest')
  })
})
