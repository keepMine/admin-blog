import request from '@/utils/request'

// 获取文章列表
export function list(data) {
  return request({
    url: '/article/list',
    method: 'post',
    data
  })
}
// 创建文章
export function create(data) {
  return request({
    url: '/article/create',
    method: 'post',
    data
  })
}
// 获取文章详情
export function detail(data) {
  return request({
    url: '/article/' + data.id,
    method: 'get',
    data
  })
}

// 更新文章
export function update(data) {
  return request({
    url: '/article/' + data.id,
    method: 'put',
    data
  })
}

// 删除文章
export function detele(data) {
  return request({
    url: '/article/' + data.id,
    method: 'delete',
    data
  })
}
