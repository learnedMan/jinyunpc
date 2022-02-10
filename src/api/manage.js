import request from './request'
import { NEW_LIST_URL , NEW_INFO_URL , SEARCH_URL } from './config'

/* 获取列表数据 */
export function getNewsList(params) {
    return request({
        url: NEW_LIST_URL,
        method: 'get',
        params
    })
}

/* 获取稿件详情 */
export function getNewsInfo(params) {
    return request({
        url: NEW_INFO_URL,
        method: 'get',
        params
    })
}

/* 获取搜索列表 */
export function getSearchList(params) {
    return request({
        url: SEARCH_URL,
        method: 'get',
        params
    })
}