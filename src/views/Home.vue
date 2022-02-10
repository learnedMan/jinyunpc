<style scoped lang="scss">
.home{
  background: #F7F7F9;
  padding-top: 60px;
  padding-bottom: 40px;
  .top_hot_news{
    box-sizing: border-box;
    padding: 0 30px;
    margin-bottom: 40px;
    .maintit{
      font-size: 46px;
      font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
      font-weight: bold;
      color: #212528;
      line-height: 56px;
      margin-bottom: 30px;
      cursor: pointer;
    }
    .subtit_box{
      display: flex;
      justify-content: center;
      font-size: 18px;
      font-family: MicrosoftYaHei;
      color: #212528;
      line-height: 24px;
      .subtit{
        display: flex;
      }
      .subtit>div{
        max-width: 500px;
        cursor: pointer;
      }
      .subtit>span{
        margin: 0 20px;
      }
    }
  }
  .swiperbox{
    width: 1200px;
    height: 440px;
    position: relative;
    cursor: pointer;
    .swiper{
      position: absolute;
      z-index: 4;
      width: 1200px;
      height: 440px;
      .img{
        width: 1200px;
        height: 440px;
      }
    }
    .paginationlist{
      z-index: 5;
      position: absolute;
      right: 0;
      width: 346px;
      height: 440px;
      .paginationli{
        width: 346px;
        height: 88px;
        box-sizing: border-box;
        background: url(../assets/swiperbg.png) no-repeat center;
        padding: 16px 20px;
        text-align: left;
        &>div{
          font-size: 18px;
          font-family: MicrosoftYaHei;
          color: #FFFFFF;
          line-height: 28px;
          height: 56px;
        }
      }
      .highlightpagination{
        background: url(../assets/swiperhightlightbg.png) no-repeat center;
        background-size: 100% 100%;
      }
    }
  }
  .ad1box{
    width: 1200px;
    height: 120px;
    margin: 30px auto;
    img{
      width: 1200px;
      height: 120px;
      cursor: pointer;
    }
  }
  .mianbox{
    height: 634px;
    display: flex;
    overflow: hidden;
    margin-bottom: 30px;
    .recommendbox{
      height: 634px;
      width: 839px;
      overflow: hidden;
      margin-right: 15px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .recommendLi{
        width: 270px;
        height: 302px;
        background: #FFFFFF;
        margin-bottom: 30px;
        cursor: pointer;
        .top{
          img{
            width: 270px;
            height: 152px;
          }
        }
        .bot{
          width: 270px;
          height: 150px;
          box-sizing: border-box;
          padding: 16px 16px 0 16px;
          .tit{
            height: 48px;
            font-size: 16px;
            font-family: MicrosoftYaHei;
            color: #212528;
            line-height: 24px;
            text-align: left;
            margin-bottom: 48px;
          }
          .info{
            font-size: 14px;
            font-family: MicrosoftYaHei;
            color: #8F969F;
            line-height: 21px;
            display: flex;
            align-items: center;
            .author{
              width: 100px;
              margin-right: 10px;
            }
            .time{
              width: 80px;
              text-align: left;
            }
            .tag{
              margin-left:8px ;
              width: 40px;
              height: 19px;
              font-size: 12px;
              text-align: center;
              font-family: MicrosoftYaHei;
              color: #FFFFFF;
              line-height: 19px;
              background: url(../assets/tagbg.png) no-repeat center;
            }
          }
        }
      }
    }
    .viewpointbox{
      height: 634px;
      width: 346px;
      background: url(../assets/viewpointbg.png) no-repeat top;
      .top{
        width: 346px;
        box-sizing: border-box;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 8px 0 20px;
        background: url(../assets/viewpointtopbg.png) no-repeat top;
        .tit{
          font-size: 20px;
          font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
          font-weight: bold;
          color: #212528;
          line-height: 26px;
        }
        .more{
          font-size: 18px;
          font-family: MicrosoftYaHei;
          color: #52555A;
          line-height: 24px;
          cursor: pointer;
        }
      }
      .list{
        padding-top: 20px;
        .li{
          display: flex;
          align-items: center;
          font-size: 18px;
          font-family: MicrosoftYaHei;
          color: #212528;
          line-height: 24px;
          margin-bottom: 18px ;
          cursor: pointer;
          &>div{
            width: 300px;
            text-align: left;
          }
          img{
            margin: 0 11px 0 21px;
          }
        }
      }
    }
  }
  .specialbox{
    margin-bottom: 30px;
    .top{
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 18px;
      .tit{
        font-size: 20px;
        font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
        font-weight: bold;
        color: #212528;
        line-height: 26px;
      }
      .more{
        font-size: 18px;
        font-family: MicrosoftYaHei;
        color: #52555A;
        line-height: 24px;
        cursor: pointer;
      }
    }
    .bot{
      display: flex;
      justify-content: space-between;
      .l{
        img{
          cursor: pointer;
          width: 839px;
          height: 359px;
        }
      }
      .r{
        img{
          cursor: pointer;
          display: flex;
          flex-wrap: wrap;
          width: 353px;
          height: 114px;
          margin-bottom: 8px;
        }
      }
    }
  }
  .videobox{
    .top{
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 18px;
      .tit{
        font-size: 20px;
        font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
        font-weight: bold;
        color: #212528;
        line-height: 26px;
      }
      .more{
        font-size: 18px;
        font-family: MicrosoftYaHei;
        color: #52555A;
        line-height: 24px;
        cursor: pointer;
      }
    }
    .botswiper{
      width: 1200px;
      height: 232px;
      .img{
        width: 394px;
        height: 232px;
        cursor: pointer;
      }
      .swiper-button-prev, .swiper-button-next{
        color: #FFFFFF;
      }
      .swiper-button-prev.swiper-button-disabled, .swiper-button-next.swiper-button-disabled{
        pointer-events: auto;
      }
      .swiper-button-prev:after, .swiper-button-next:after{
        font-size: 30px;
      }
    }
  }
}
.fixedbox{
  width: 270px;
  top: 200px;
  position: fixed;
  z-index: 5;
  right: 40px;
  .network_politics{
    width: 270px;
    height: 106px;
    margin-bottom: 40px;
    cursor: pointer;
  }
  .ad_news2_list{
    .ad_news2_li{
      width: 270px;
      height: 150px;
      position: relative;
      margin-bottom:20px ;
    }
    .close{
      width: 28px;
      height: 28px;
      position: absolute;
      right: 6px;
      top:6px;
      z-index: 1;
      cursor: pointer;
    }
    .img{
      width: 270px;
      height: 150px;
      margin-bottom: 20px;
      cursor: pointer;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 0;
    }
  }
}
</style>
<template>
  <div class="home">
    
    <div class="fixedbox">
      <img @click="todetails(item)" class="network_politics" v-for="(item,index) in network_politics_list" :key="index" :src="item.cover[0].path" alt="">
      <div class="ad_news2_list">
        <div class="ad_news2_li" v-for="(item,index) in ad_news2_list" :key="index">
          <img @click="closead(index)" class="close" src="../assets/close.png" alt="">
          <img @click="todetails(item)" class="img" :src="item.cover[0].path" alt="">
        </div>
      </div>
    </div>

    <div class="top_hot_news center-wrap">
      <div v-if="index==0" class="maintit" @click="todetails(item)" v-for="(item,index) in top_hot_news_list" :key="item.id">
        {{item.title}}
      </div>
      <div class="subtit_box">
        <div class="subtit" v-if="index!=0" v-for="(item,index) in top_hot_news_list" :key="item.id">
          <div @click="todetails(item)" class="ellipsis">{{item.title}}</div> <span v-if="index==1">|</span>
        </div>
      </div>
    </div>
    <div class="swiperbox center-wrap" @mouseenter="topSwiperenter()" @mouseleave="topSwiperleave()">
      <swiper ref="topSwiper" class="swiper" :options="swiperOption">
        <swiper-slide v-for="(item,index) in swiper_news_list" :key="index">
          <img @click="todetails(item)" class="img" :src="item.cover[0].path" alt="">
        </swiper-slide>
      </swiper>

      <div class="paginationlist">
        <div @click.stop="todetails(item)" @mouseenter="paginationenter(index)" :class="paginationIndex==index?'highlightpagination':''" class="paginationli" v-for="(item,index) in swiper_news_list" :key="index" >
          <div class="ellipsis-Two">{{item.title}}</div>
        </div>
      </div>
    </div>
    <div class="ad1box center-wrap">
      <img @click="todetails(item)" v-for="(item,index) in ad_news1_list" :src="item.cover[0].path" alt="">
    </div>
    <div class="mianbox center-wrap">
      <div class="recommendbox">
        <div @click="todetails(item)" class="recommendLi" v-for="(item,index) in recommend_news_list">
            <div class="top">
              <img :src="item.cover[0].path" alt="">
            </div>
            <div class="bot">
              <div class="tit ellipsis-Two">
                {{item.title}}
              </div>
              <div class="info">
                <div class="author ellipsis">{{item.source}}</div>
                <div v-time="item.createdAt" class="time" ></div>
                <div class="tag" v-if="item.tags">{{item.tags.split(',')[0]}}</div>
              </div>
            </div>
        </div>
      </div>
      <div class="viewpointbox">
        <div class="top">
          <div class="tit">
            视点新闻
          </div>
          <div class="more">
            <router-link :to="`/newsList/${VIEWPOINT_NEWS}`">
              更多》
            </router-link>
            
          </div>
        </div>
        <div class="list">
          <div @click="todetails(item)" class="li" v-for="(item,index) in viewpointer_news_list" :key="index">
            <img src="../assets/liimg.png" alt="">
            <div class="ellipsis">{{item.title}}</div> 
          </div>
          
        </div>
      </div>
    </div>
    <div class="specialbox center-wrap">
        <div class="top">
          <div class="tit">
            专题
          </div>
          <div class="more">
            <router-link :to="`/imgList/${SPECIAL}`">
              更多》
            </router-link>
          </div>
        </div>
        <div class="bot">
          <div class="l">
            <img @click="todetails(item)" v-if="index==0" :src="item.cover[0].path" alt="" v-for="(item,index) in special_list">
          </div>
          <div class="r">
            <img @click="todetails(item)" v-if="index!=0" :src="item.cover[0].path" alt="" v-for="(item,index) in special_list">
          </div>
        </div>
        
    </div> 
    <div class="videobox center-wrap">
      <div class="top">
          <div class="tit">
            特别推荐
          </div>
          <div class="more">
            <router-link :to="`/videoList/${VIDEO}`">
              更多》
            </router-link>
          </div>
      </div>
      <swiper ref="botSwiper" class="botswiper" :options="botswiperOption">
        <swiper-slide v-for="(item,index) in video_list" :key="index">
          <img @click="todetails(item)" class="img" :src="item.cover[0].path" alt="">
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
  </div>
</template>
<script>

import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import { getNewsList } from '@/api/manage'
import { TOP_HOT_NEWS , SWIPER_NEWS , RECOMMEND_NEWS , VIEWPOINT_NEWS , AD_NEWS1 ,
 AD_NEWS2 , NETWORK_POLITICS , SPECIAL , VIDEO  } from '@/api/config'
let vm = null
export default {
  name: 'Home',
  data() {
    return {
      VIEWPOINT_NEWS,
      SPECIAL,
      VIDEO,
      top_hot_news_list:[],
      swiper_news_list:[],
      recommend_news_list:[],
      viewpointer_news_list:[],
      ad_news1_list:[],
      ad_news2_list:[],
      network_politics_list:[],
      special_list:[],
      video_list:[],
      swiperOption: {
        observer:true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        on: {
          slideChange () {
            vm.paginationIndex = this.realIndex;
          }
        },
      },
      paginationIndex:0,
      botswiperOption:{
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
    }
  },
  computed: {
    // 定义swiper，在下面就可以引用这个swiper了；
    top_swiper: function () {
      return this.$refs.topSwiper.$swiper
    },
  },
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  async created () {
    document.title = this.title
    vm = this;
    this.getList(TOP_HOT_NEWS      ,3 ,'top_hot_news_list');
    this.getList(SWIPER_NEWS       ,5 ,'swiper_news_list');
    this.getList(RECOMMEND_NEWS    ,6 ,'recommend_news_list');
    this.getList(VIEWPOINT_NEWS    ,13,'viewpointer_news_list');
    this.getList(AD_NEWS1          ,1 ,'ad_news1_list');
    this.getList(AD_NEWS2          ,3 ,'ad_news2_list');
    this.getList(NETWORK_POLITICS  ,1 ,'network_politics_list');
    this.getList(SPECIAL           ,4 ,'special_list');
    this.getList(VIDEO             ,9 ,'video_list');
    // await this.getList(RADFLY      ,1 ,'radfly_list');
    // if(this.radflyflag){
    //   window.document.body.style.paddingTop="150px";
    // }
  },
  methods:{
    // 关闭当前广告
    closead(index){
      this.ad_news2_list.splice(index,1)
    },
    // 获取列表
    getList(channelId,limit,ele){
      return new Promise((resolve, reject)=>{
        getNewsList(
          {
            channelId:channelId,
            page:1,
            limit:limit
          }
        ).then(res => {
          this[ele] = res.data.list;
          resolve(this[ele])
        })
      })
    },
    // 头部轮播图开始
    paginationenter(index){
      this.top_swiper.slideTo(index)
    },
    topSwiperenter(){
      this.top_swiper.autoplay.stop();
    },
    topSwiperleave(){
      this.top_swiper.autoplay.start();
    }
    // 头部轮播图结束
  }
}
</script>