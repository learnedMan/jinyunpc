<style scoped lang="scss">
.highlight{
  color: #DB7522 !important;
}
.search{
  padding: 70px 0;
  .search__input{
    margin: 0 auto 30px;
    width: 800px;
    height: 44px;
    display: flex;
    border-radius: 8px;
    overflow: hidden;
    box-sizing: border-box;
    .input__textbox{
      display: flex;
      align-items: center;
      box-sizing: border-box;
      text-align: left;
      width: 720px;
      height: 44px;
      border: 1px solid #DADDE1;
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
      border-right: 0;
      .el-icon-search{
        margin: 0 15px;
      }
    }
    .input__text{
      width: 673px;
      height: 42px;
      font-size: 18px;
      font-family: MicrosoftYaHei;
      color: #232428;
      line-height: 42px;
      border: none;
      outline: none;
    }
    .input__btn{
      width: 80px;
      height: 44px;
      background: linear-gradient(90deg, #16336E 0%, #34ABE3 100%);
      border-radius: 0px 8px 8px 0px;
      font-size: 18px;
      font-family: MicrosoftYaHei;
      color: #FFFFFF;
      line-height: 44px;
      cursor: pointer;
    }
  }
  .search_info{
    font-size: 16px;
    font-family: MicrosoftYaHei;
    color: #898D91;
    line-height: 21px;
    text-align: left;
    margin-bottom: 50px;
  }
  .list{
    margin-bottom: 50px;
    & /deep/ .highlight{
      color: #DB7522 !important;
    }
    .li{
      font-size: 20px;
      font-family: MicrosoftYaHei;
      color: #4D5358;
      line-height: 24px;
      text-align: left;
      cursor: pointer;
      margin-bottom: 28px;
      .txt{
        display: flex;
        & div{
          max-width: 800px;
        }
      }
      .date{
        margin-left:5px ;
      }
    }
  }
}
</style>
<template>
  <div class="search center-wrap">
    <div class="search__input">
      <div class="input__textbox">
        <i class="el-icon-search"></i>
        <input
          type="tetx"
          class="input__text"
          placeholder="请输入搜索内容"
          v-model.trim="searchStr"
          @keydown.enter="searchBtnClick"
        />
      </div>
      
      <div
        class="input__btn"
        @click="searchBtnClick"
      >搜索</div>
    </div>
    <div v-loading="loading">
      <div class="search_info" v-if="searchflg">
        搜索“<span class="highlight">{{showsearchtxt}}</span>”，共找到<span class="highlight">{{total}}</span>个相关新闻
      </div>
      <div class="list">
          <div @click="todetails(item)" class="li" v-for="(item,index) in dataList" :key="index">
            <div class="txt"><div v-html="item.title" class="ellipsis"></div><span class="date">({{item.published_at.split(' ')[0]}})</span></div> 
          </div>
      </div>
    </div>
    <el-pagination
        v-if="searchflg"
        class="elPagination"
        background
        layout="prev, pager, next"
        :page-size="10"
        @current-change="getList"
        :total="total">
      </el-pagination>
  </div>
</template>

<script>
import { getSearchList } from '@/api/manage.js'
export default {
  name: 'Search',
  data() {
      return {
        searchStr:'',
        showsearchtxt:'',
        dataList:[],
        loading:false,
        total:0,
        searchflg:false
      }
  },
  created () {
    document.title = `搜索页-${this.title}`;
  },
  methods:{
    searchBtnClick(){
      this.getList(1)
    },
    // 获取列表
    getList(page){
      if(!this.searchStr){
        this.$message({
          type:'warning',
          message:'请输入关键字'
        })
        return
      }
      this.loading = true;
      return new Promise((resolve, reject)=>{
        getSearchList(
          {
            keywords:this.searchStr,
            page:page,
            pageSize:10
          }
        ).then(res => {
            this.dataList = res.data.data;
            for (let item of this.dataList) {
              // 全局搜索是否包含 搜索字段  把搜索关键字替换颜色
              item.title = item.title.replace(new RegExp(this.searchStr, "g"), `<span class="highlight">${this.searchStr}</span>`);
            }


            this.total = res.data.total;
            this.loading = false;
            this.searchflg = true;
            this.showsearchtxt = this.searchStr;
            resolve(this.dataList)
        })
      })
    },
  }
}
</script>

