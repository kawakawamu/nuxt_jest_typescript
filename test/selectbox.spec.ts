import { shallowMount } from '@vue/test-utils'
import selectbox from '~/components/SelectBox.vue'

describe('selectbox', () => {
  it('セレクトボックスの確認', done => {
    const wrapper = shallowMount(selectbox)

    //大項目のセレクトボックス
    const options = wrapper.find('[data-cy="select"]').findAll('option')

    // セレクトボックスの2つ目(=1)の項目を選択する
    options.at(1).setSelected()

    const contain = wrapper.find('option:checked').text()
    expect(contain).toContain('やさい')

    //詳細項目のセレクトボックス
    setTimeout(() => {
      const detailSelecter = wrapper
        .find('[data-cy="detailselect"]')
        .findAll('option')

      // 3番目のものを取得
      detailSelecter.at(2).setSelected()

      // 詳細を取得するのでfindをつなげて指定する
      const Detailcontain = wrapper
        .find('[data-cy="detailselect"]')
        .find('option:checked')
        .text()

      expect(Detailcontain).toContain('大根')
      done()
    })
  })
})
