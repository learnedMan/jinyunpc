// 请求配置
export const BASE_URL = 'https://proxy.cztvcloud.com/api/fusion/pc'; //域名地址
export const APPID = 1027; //当前appid
export const NEW_LIST_URL = `/news/list?appId=${APPID}`; //获取列表
export const CHANNELS_INFO_URL = `/getChannelsInfo?appId=${APPID}`; //查询子栏目
export const NEW_INFO_URL = `/getNewsInfo?appId=${APPID}`; //稿件详情
export const SEARCH_URL = `/es/articles/search?appId=${APPID}`; //搜索

// 栏目ID
export const TOP_HOT_NEWS        = '2289'; //顶部热点
export const SWIPER_NEWS         = '2290'; //轮播海报
export const RECOMMEND_NEWS      = '2291'; //推荐新闻
export const VIEWPOINT_NEWS      = '2292'; //视点新闻
export const AD_NEWS1            = '2293'; //广告位1
export const AD_NEWS2            = '2295'; //广告位2
export const HISTORY_NEWS        = '2298'; //历史新闻
export const FRIEND_LINKS        = '2299'; //友情链接
export const FRIEND_AREA         = '2303'; //友情链接-本地
export const FRIEND_INPROVINCE   = '2304'; //友情链接-省内
export const FRIEND_OUTPROVINCE  = '2305'; //友情链接-省外
export const NETWORK_POLITICS    = '2300'; //网络问政
export const SPECIAL             = '2284'; //专题
export const VIDEO               = '2285'; //视频
export const DOMESTIC_NEWS       = '2286'; //国内新闻
export const PROVINCE_NEWS       = '2287'; //省内新闻
export const AREA_NEWS           = '2288'; //本地新闻
export const RADFLY              = '2311'; //飘红飘灰
export const RECOMMEND           = '2323'; //精彩推荐