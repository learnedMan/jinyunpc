<style scoped lang="scss">
.imgList{
  padding: 70px 0;
  width: 1250px;
  .title{
    width: 140px;
    height: 48px;
    background: url('../assets/newslist_tit.png') no-repeat center;
    font-size: 24px;
    font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
    font-weight: bold;
    color: #FFFFFF;
    line-height: 48px;
    margin-bottom: 44px;
    margin-left: 25px;
  }
  .list{
    display: flex;
    flex-wrap: wrap;
    .li{
      height: 170px;
      width: 200px;
      margin: 0 25px 30px 25px;
      cursor: pointer;
      .img{
        width: 200px;
        height: 112px;
        margin-bottom: 10px;
      }
      .tit{
        font-size: 16px;
        font-family: MicrosoftYaHei;
        color: #232428;
        line-height: 24px;
      }
    }
  }
}
</style>
<template>
  <div class="imgList center-wrap">
    <div class="title">{{pagetitle}}</div>

    <div class="list" v-loading="loading">
        <div @click="todetails(item)" class="li" v-for="(item,index) in dataList" :key="index">
          <img class="img" :src="item.cover[0].path" alt="">
          <div class="tit ellipsis-Two">{{item.title}}</div> 
        </div>
    </div>
    <el-pagination
        class="elPagination"
        background
        layout="prev, pager, next"
        :page-size="15"
        @current-change="getList"
        :total="total">
      </el-pagination>
  </div>
</template>

<script>
import { getNewsList } from '@/api/manage.js'
export default {
  name: 'ImgList',
  data() {
      return {
        dataList:[],
        pagetitle:'',
        total:0,
        loading:true
      }
  },
  watch: {
    '$route':function(to,from){
      this.getList(1)
    }
  },
  created () {
    this.getList(1)
  },
  computed: {
    channelId:function(){
      return this.$route.params.id;
    }
  },
  methods:{
    // 获取列表
    getList(page){
      this.loading = true;
      return new Promise((resolve, reject)=>{
        getNewsList(
          {
            channelId:this.channelId,
            page:page,
            limit:15
          }
        ).then(res => {
            this.loading = false;
            this.dataList = res.data.list;
            this.pagetitle = res.data.name;
            this.total = res.data.count;
            document.title = `${this.pagetitle}-${this.title}`;
            resolve(this.dataList)
        })
      })
    }
  }
}
</script>

