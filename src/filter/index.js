import moment from 'moment'

export default {
  formatTime: time => {
    return moment(time).format('mm:ss')
  },
  formatName: arr => {
    return arr.map(item => item.name).join('&')
  }
}
