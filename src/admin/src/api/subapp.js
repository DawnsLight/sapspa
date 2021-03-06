import request from '@/utils/request'

export function fetchSubappList(query) {
  return request({
    url: '/subapps',
    method: 'get',
    params: query
  })
}

export function fetchSubapp(subappid) {
  return request({
    url: `/subapps/${subappid}`,
    method: 'get'
  })
}

export function fetchSubappStatus(subappid) {
  return request({
    url: `/subapps/${subappid}/status`,
    method: 'get'
  })
}

export function startSubapp(subappid) {
  return request({
    url: `/subapps/${subappid}/status`,
    method: 'post'
  })
}

export function stopSubapp(subappid) {
  return request({
    url: `/subapps/${subappid}/status`,
    method: 'delete'
  })
}

export function createSubapp(data) {
  return request({
    url: '/subapps',
    method: 'post',
    data
  })
}

export function updateSubapp(subappid, data) {
  return request({
    url: `/subapps/${subappid}`,
    method: 'put',
    data
  })
}

export function deleteSubapp(subappid) {
  return request({
    url: `/subapps/${subappid}`,
    method: 'delete'
  })
}

export function fetchSubappListInApp(appid, query) {
  return request({
    url: `/apps/${appid}/subapps`,
    method: 'get',
    params: query
  })
}
