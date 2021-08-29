import { mount } from '@vue/test-utils'
import HogeButton from '@/components/HelloButton.vue'

describe('HogeButton', () => {
  const wrapper = mount(HogeButton)

  it('renders hoge', () => {
    expect(wrapper.html()).toContain('<p>hoge</p>')
  })
})
