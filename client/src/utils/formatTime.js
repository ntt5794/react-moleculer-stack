import moment from 'moment'

export default function (time) {
    return moment(time).format('H:m:s D/M/YY Z')
}
