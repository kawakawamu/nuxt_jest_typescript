import { mount } from '@vue/test-utils'
import App from '@/components/ButtonEvent.vue'

describe('App', () => {
  it('click button count up', async () => {
    const wrapper = mount(App)

    //DOM更新系は即座にDOMに反映されないのでasync awaitを使う
    await wrapper.get('button').trigger('click')
    await wrapper.get('button').trigger('click')

    //findからのtextでタグの中身をとってくる
    // const contain = wrapper.find('[data-cy="countCheck"]').text()

    //クラスでも取得できる
    const contain = wrapper.find('.count_paragh').text()

    console.log('ボタンを2回押したときは2が表示される', contain)

    //タグの中身確認
    expect(contain).toContain('Count is: 2')
  })
})
