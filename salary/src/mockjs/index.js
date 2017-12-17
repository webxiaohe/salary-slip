import MockApater from 'axios-mock-adapter'
import axios from 'axios'
// import navList from './data/barlist'
import stafflist from './data/staffRecord'
export default {
  bootStrap () {
    const mock = new MockApater(axios)
    // mock.onGet('/api/barList').reply(config => {
    //   return new Promise((resolve, reject) => {
    //     resolve([200, navList])
    //   })
    // })
    mock.onGet('/stafflist').reply((config) => {
      return [200, stafflist]
      // return new Promise((resolve, reject) => {
      //   resolve([200, stafflist])
      // })
    })
  }
}
