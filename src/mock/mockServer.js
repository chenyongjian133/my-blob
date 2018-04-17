import Mock from 'mockjs'
import data from './data'
const baseUrl = '/api'
Mock.mock( baseUrl +'/heroCarousal', {
    code: 0,
    data: data.heroCarousal
})
Mock.mock(baseUrl +'/oyoPromises', {
    code: 0,
    data: data.oyoPromises
})