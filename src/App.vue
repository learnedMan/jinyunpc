<template>
  <div id="app" :class="radflyflag?'radfly':''">
    <!-- 飘红&飘灰 -->
    <div v-if="radflyflag" class="radflybox">
      <img v-for="(item,index) in radfly_list" :key="index" :src="item.cover[0].path" alt="">
    </div> 
    <Header :class="radflyflag?'radflyhead':''"/>
    <keep-alive :include="whiteList" :exclude="blackList">
      <router-view style="min-height:500px;" :class="radflyflag?'radflyhome':''"/>
    </keep-alive>
    <Footer :class="radflyflag?'radflyfoot':''"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { RADFLY } from '@/api/config'
import { getNewsList } from '@/api/manage'
export default {
  name:'App',
  data () {
    return {
      radfly_list:[],
      whiteList:['Search'],
      blackList:[]
    }
  },
  computed: {
    radflyflag:function(){
      if(this.radfly_list&&this.radfly_list.length!=0&&this.$route.name=='Home')
      return true
      else
      return false
    }
  },
  components:{
    Header,
    Footer
  },
  async created(){
    await this.getList(RADFLY      ,1 ,'radfly_list');
    // console.log(this.radflyflag)
  },
  methods:{
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
  }
}
</script>

<style>

</style>
<style lang="scss">
.popverClass{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 130px !important;
  height: 130px !important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.radfly{
  padding-top: 150px;
}
.radflyhead{
  width: 1200px !important;
  margin: 0 auto;
}
.radflybox{
  width: 100%;
  position: absolute;
  top: 0;
  overflow: hidden;
  img{
    width: 1920px;
  }
}
.radflyhome{
  width: 1200px;
  margin: 0 auto;
  position: relative;
  background: #fff !important;
}
.radflyfoot{
  background: #fff !important;
}
</style>
