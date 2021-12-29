// import axios from 'axios'

// describe('axios.get spyOn の例', () => {
//   it("axios.getをモックしてfetchUserDataを呼び出すと、戻り値`{title: 'mock title'}`を返すように設定", async () => {
//     // axios.getをモック
//     jest.spyOn(axios, 'get')

//     // モックしたaxios.getの戻り値を指定
//     const dummyResp = { data: { title: 'mock title' } }
//     axios.get.mockResolvedValue(dummyResp)

//     const res = await fetchUserData(1)

//     expect(res.title).toBe('mock title')
//   })
// })
