<style scoped lang="scss">
.recommend{
    width: 370px;
    height: 648px;
    background: #F4F4F4;
    padding: 25px 20px 0 20px;
    box-sizing: border-box;
    .top{
        display: flex;
        font-size: 18px;
        font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
        font-weight: bold;
        color: #1A568B;
        img{
            vertical-align: middle;
            margin-right: 8px;
        }
        div{
            line-height: 24px;
        }
    }
    .list{
        .li{
            font-size: 16px;
            font-family: MicrosoftYaHei;
            color: #212528;
            line-height: 21px;
            margin-top: 18px;
            text-align: left;
            cursor: pointer;
        }
    }
}
</style>
<template>
  <div class="recommend">
    <div class="top">
        <img src="@/assets/recommend_tit_icon.png" alt="">
        <div>精彩推荐</div> 
    </div>
    <div class="list">
        <div @click="todetails(item)" class="li" v-for="(item,index) in dataList" :key="index">
        <div class="ellipsis">{{item.title}}</div> 
        </div>
    </div>
  </div>
</template>

<script>
import { getNewsList } from '@/api/manage.js'
import { RECOMMEND } from '@/api/config.js'
export default {
  name: 'Recommend',
  data () {
      return {
          dataList:[]
      }
  },
  created () {
      this.getList(RECOMMEND,15)
  },
  methods:{
    // 获取列表
    getList(channelId,limit){
      return new Promise((resolve, reject)=>{
        getNewsList(
          {
            channelId:channelId,
            page:1,
            limit
          }
        ).then(res => {
            this.dataList = res.data.list;
            resolve(this.dataList)
        })
      })
    },
  }
}
</script>