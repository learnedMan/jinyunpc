<style scoped lang="scss">
.footer{
  width: 1200px;
  margin: 0 auto;
  padding: 0 0 30px 0;
  &_outlink{
    padding: 20px 0;
    border-top: 2px dashed rgba(201,199,199,.6);
    border-bottom: 2px dashed rgba(201,199,199,.6);
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 28px;
    font-size: 16px;
    font-family: MicrosoftYaHei;
    color: #232428;
    line-height: 28px;
    &_left{
      flex: 1;
      .outlinkbox{
        display: flex;
        .tit{
          width: 50px;
        }
        .sec{
          display: flex;
          flex: 1;
          flex-wrap: wrap;
        }
        .sec>div{
          margin: 0 12px;
          cursor: pointer;
        }
      }
    }
    &_right{
      display: flex;
      width: 150px;
      justify-content: flex-end;
      align-items: center;
      cursor: pointer;
      font-size: 16px;
      font-family: MicrosoftYaHei;
      color: #232428;
      line-height: 28px;
      img{
        margin-left: 4px;
      }
    }
  }
  &_info{
    .wxb{
      display: flex;
      justify-content: center;
      margin-bottom: 23px;
      .txt{
        font-size: 16px;
        font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
        font-weight: bold;
        color: #232428;
        line-height: 21px;
      }
      img{
        margin-right: 45px;
      }
    }
    .maininfo{
      font-size: 14px;
      font-family: MicrosoftYaHei;
      color: #232428;
      line-height: 22px;
      margin-bottom: 10px;
    }
    .xkz,.bah{
      font-size: 14px;
      font-family: MicrosoftYaHei;
      color: #232428;
      line-height: 24px;
      margin: 10px 0;
    }
  }
}
</style>
<template>
<div class="foot" :style="$route.path=='/'?'background:#F7F7F9;':''">
  <div class="footer">
    <div class="footer_outlink">
      <div class="footer_outlink_left">
        <div class="outlinkbox">
          <div class="tit">本地:</div>
          <div class="sec">
            <div @click="todetails(item)" v-for="item in areaList" :key="item.id">
              {{item.title}}
            </div>
          </div>
        </div>
        <div class="outlinkbox">
          <div class="tit">省内:</div>
          <div class="sec">
            <div @click="todetails(item)" v-for="item in inprovinceList" :key="item.id">
              {{item.title}}
            </div>
          </div>
        </div>
        <div class="outlinkbox">
          <div class="tit">省外:</div>
          <div class="sec">
            <div @click="todetails(item)" v-for="item in outprovinceList" :key="item.id">
              {{item.title}}
            </div>
          </div>
        </div>
      </div>
      <div class="footer_outlink_right">
        <router-link :to="`/newsList/${HISTORY_NEWS}`">
          历史新闻<img src="../assets/tobtn.png" alt="">
        </router-link>
        
      </div>
    </div>

    <div class="footer_info">
        <div class="wxb">
          <img src="../assets/wxbimg.png" alt="">
          <div class="txt">
            <div>违法和不良信息举报电话</div>
            <div>涉未成年人有害信息举报电话：0578-3315584</div>
            <div>邮箱：136198974@qq.com</div>
          </div>  
        </div>
        <div class="maininfo">
          <div>缙云县融媒体中心主办 中国缙云新闻网版权所有．保留所有权利</div>
          <div>增值电信业务经营许可证：浙B2-20080242 | 广告经营许可证号：</div>  
          <div>3300008000006 | 浙新办[2004]52号 | 浙ICP备05056324号</div> 
        </div>
        <div class="xkz">信息网络传播视听节目许可证:1105110</div>
        <div class="bah">浙公网安备 33112202000066号</div>
        <img src="../assets/companyimg.png" alt="">
    </div>

  </div>
</div>
</template>

<script>
import { FRIEND_AREA , FRIEND_INPROVINCE , FRIEND_OUTPROVINCE , HISTORY_NEWS } from '@/api/config'
import { getNewsList } from '@/api/manage'
export default {
  name: 'Footer',
  data () {
    return {
      HISTORY_NEWS,
      areaList:[],
      inprovinceList:[],
      outprovinceList:[]
    }
  },
  created () {
    this.getList(FRIEND_AREA,'areaList');
    this.getList(FRIEND_INPROVINCE,'inprovinceList');
    this.getList(FRIEND_OUTPROVINCE,'outprovinceList');
  },
  methods:{
    getList(channelId,ele){
      getNewsList(
        {
          channelId:channelId,
          page:1,
          limit:99
        }
      ).then(res => {
        this[ele] = res.data.list;
      })
    }
  }
}
</script>