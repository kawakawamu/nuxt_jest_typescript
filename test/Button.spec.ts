import { mount } from '@vue/test-utils'
import Button from '@/components/HelloButton.vue'

describe('HelloButton.vue', () => {
  it('snapshot', () => {
    const wrapper = mount(Button)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
