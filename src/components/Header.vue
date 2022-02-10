<style scoped lang="scss">
.header{
  width: 100%;
  height: 100px;
  background: #FFFFFF;
  box-shadow: 0px 4px 8px 0px rgba(26, 86, 139, 0.1);
  position: relative;
  z-index: 4;
  &_box{
    width: 1200px;
    height: 100px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    h1{
      margin-right: 60px;
    }
    &_nav{
      display: flex;
      margin-right: 30px;
      .highlight{
        font-weight: bold;
        color: #FFFFFF;
        background: url('../assets/highlightbg.png') no-repeat center;
      }
      li{
        font-size: 20px;
        color: #212528;
        line-height: 100px;
        padding: 0 20px;
        &:hover{
          font-weight: bold;
          color: #FFFFFF;
          background: url('../assets/highlightbg.png') no-repeat center;
        }
      }
    }
    &_search{
      cursor: pointer;
      margin-right: 16px;
    }
    .division{
      width: 1px;
      height: 20px;
      background: #C7CCD2;
      margin-right: 15px;
    }
    &_app{
      cursor: pointer;
      display: flex;
      align-items: center;
      font-size: 20px;
      font-family: MicrosoftYaHei;
      color: #212528;
      line-height: 26px;
      img{
        margin-right: 10px;
      }
    }
  }
}
</style>
<template>
  <div class="header">
      <div class="header_box">
        <h1><router-link to="/"><img src="@/assets/logo.png" alt=""></router-link></h1>
        <ul class="header_box_nav">
          <router-link to="/"><li :class="routePath=='/'?'highlight':''">首页</li></router-link>
          <router-link :to="`/imgList/${SPECIAL}`"><li :class="routePath==`/imgList/${SPECIAL}`?'highlight':''">专题</li></router-link>
          <router-link :to="`/videoList/${VIDEO}`"><li :class="routePath==`/videoList/${VIDEO}`?'highlight':''">视频</li></router-link>
          <router-link :to="`/newsList/${DOMESTIC_NEWS}`"><li :class="routePath==`/newsList/${DOMESTIC_NEWS}`?'highlight':''">国内新闻</li></router-link>
          <router-link :to="`/newsList/${PROVINCE_NEWS}`"><li :class="routePath==`/newsList/${PROVINCE_NEWS}`?'highlight':''">省内新闻</li></router-link>
          <router-link :to="`/newsList/${AREA_NEWS}`"><li :class="routePath==`/newsList/${AREA_NEWS}`?'highlight':''">本地新闻</li></router-link>
        </ul>
        <div class="header_box_search">
          <router-link to="/search">
            <img src="@/assets/searchbtn.png" alt="">
          </router-link>
        </div>
        <div class="division"></div>
        <el-popover
          placement="bottom-start"
          style="display:flex;"
          popper-class="popverClass"
          trigger="hover">
          <img style="width:130px;height:130px;" src="@/assets/appqrcode.png" alt="">
          <div slot="reference" class="header_box_app">
            <img src="@/assets/applogo.png" alt="">
            缙云新闻APP
          </div>
        </el-popover>
        
      </div>
  </div>
</template>

<script>
import { SPECIAL , VIDEO , DOMESTIC_NEWS , PROVINCE_NEWS , AREA_NEWS } from '@/api/config'
export default {
  name: 'Header',
  data () {
    return {
      SPECIAL,
      VIDEO,
      DOMESTIC_NEWS,
      PROVINCE_NEWS,
      AREA_NEWS,
      routePath:'/'//当前路由
    }
  },
  watch: {
      '$route.path':function(newVal,oldVal){
        this.routePath = newVal
      }
  },
  created () {
  },
}
</script>

