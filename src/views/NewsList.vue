<style scoped lang="scss">
.newsList{
  display: flex;
  padding: 70px 0;
  .left{
    width: 800px;
    margin-right: 30px;
    overflow: hidden;
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
    }
    .list{
      text-align: left;
      margin-bottom: 100px;
      .li{
        width: 512px;
        height: 24px;
        font-size: 20px;
        font-family: MicrosoftYaHei;
        color: #4D5358;
        line-height: 24px;
        margin-bottom: 28px;
        cursor: pointer;
      }
    }
  }
  .right{
    width: 370px;
  }
}
</style>
<template>
  <div class="newsList center-wrap">
    <div class="left">
      <div class="title">{{pagetitle}}</div>
      <div class="list" v-loading="loading">
        <div @click="todetails(item)" class="li" v-for="(item,index) in dataList" :key="index">
          <div class="ellipsis">{{item.title}}</div> 
        </div>
      </div>
      <el-pagination
        class="elPagination"
        background
        layout="prev, pager, next"
        :page-size="10"
        @current-change="getList"
        :total="total">
      </el-pagination>
    </div>
    <div class="right">
      <Recommend />
    </div>
  </div>
</template>

<script>
import { getNewsList } from '@/api/manage.js'
import Recommend from '@/components/Recommend.vue'
export default {
  name: 'NewsList',
  data() {
      return {
        dataList:[],
        pagetitle:'',
        total:0,
        loading:true
      }
  },
  components:{
    Recommend
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
            limit:10
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

