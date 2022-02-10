<style scoped lang="scss">
.details{
  display: flex;
  padding: 70px 0;
  & /deep/  video{
    width: 800px !important;
    margin: 5px 0;
  }
  .left{
    width: 800px;
    margin-right: 30px;
    overflow: hidden;
    & /deep/ img{
      max-width: 100%;
      margin: 5px 0;
    }
    .title{
      font-size: 30px;
      font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
      font-weight: bold;
      color: #4D5358;
      line-height: 45px;
    }
    .date{
      font-size: 16px;
      font-family: MicrosoftYaHei;
      color: #898D91;
      line-height: 30px;
      margin: 20px 0 30px 0;
    }
    .border{
      border-bottom: 2px dashed rgba(201,199,199,.6);
      margin-bottom: 30px;
    }
    .content{
      font-size: 16px;
      line-height: 28px;
      text-align: left;
    }
  }
  .imgbox{
    img{
      max-width: 100%;
      display: block;
      margin: 5px auto;
    }
  }
  .right{
    width: 370px;
  }
}
</style>
<template>
  <div class="details center-wrap">
    <div class="left">
      <div v-if="postflag">
        <div class="title">{{newsInfo.title}}</div>
        <div class="date" v-time="newsInfo.createdAt"></div>
        <div class="border"></div>
        <div class="videobox" v-if="newsInfo.type=='video'">
          <video controls :src="newsInfo.videoExtra.videoList[0].itemList[0].path"></video>
        </div>
        <div class="imgbox" v-if="newsInfo.type=='album'">
          <img v-for="(item,index) in newsInfo.thumbs" :key="index"  :src="item.path" :alt="item.intro">
        </div>
        <div class="content" v-html.async="newsInfo.content">
        </div>
      </div>
    </div>
    <div class="right">
      <Recommend />
    </div>
  </div>
</template>

<script>
import { getNewsInfo } from '@/api/manage'
import Recommend from '@/components/Recommend.vue' 

export default {
  name: 'Details',
  data() {
      return { 
        newsInfo:{},
        postflag:false
      }
  },
  watch: {
    '$route':function(to,from){
      this.getNewsInfo()
    }
  },
  computed:{
    newsId:function(){
      return this.$route.params.id
    }
  },
  components:{
    Recommend
  },
  async created () {
    await this.getNewsInfo()
    
  },
  methods:{
    // 获取详情
    getNewsInfo(){
      this.postflag = false;
      return new Promise((resolve, reject)=>{
        getNewsInfo(
          {
            newsId:this.newsId
          }
        ).then(res => {
          this.newsInfo = res.data||{}
          this.postflag = true
          document.title = `${this.newsInfo.title}-${this.title}`;
          resolve(this.newsInfo)
        })
      })
    },
  }
}
</script>