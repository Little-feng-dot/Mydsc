<!-- 商品列表 -->
<template>
  <div class="goodlist">
    <header>
      <a href="javascript:;" @click="goback"
        ><i class="iconfont icon-zuojiantou"></i
      ></a>
      <form>
        <input
          type="search"
          placeholder="搜索商品"
          v-model="this.$route.params.keywords"
          @click="toSearch"
        />
        <i class="iconfont icon-sousuo"></i>
      </form>
      <p @click="arrange">
        <i class="iconfont icon-pailie" v-if="arrangeFlag"></i>
        <i class="iconfont icon-tubiao_liebiaopailie" v-else></i>
      </p>
    </header>

    <nav>
      <div class="list">
        <ul ref="list">
          <li @click="allFn" class="active">
            综合<i class="iconfont icon-xiajiantou" v-if="allFlag"></i
            ><i class="iconfont icon-shishangjiantou-" v-else></i>
          </li>
          <li>新品</li>
          <li>销量</li>
          <li @click="priceFn">
            价格<i class="iconfont icon-xiajiantou" v-if="priceFlag"></i
            ><i class="iconfont icon-shishangjiantou-" v-else></i>
          </li>
          <li><i class="iconfont icon-shaixuan"></i>筛选</li>
        </ul>
      </div>
    </nav>
    <img
      class="loading"
      v-if="goodList == ''"
      src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=32913934,4292271124&fm=26&gp=0.jpg"
      alt=""
    />
    <div class="goodlist-con" v-else>
      <ul ref="goodslist">
        <li
          v-for="item in goodList"
          :key="item.goods_id"
          :class="arrangeFlag ? '' : 'goods'"
          @click="toDetail(item.goods_id)"
        >
          <img :src="item.goods_img" alt="" />
          <div class="goodinfo">
            <h4>
              {{ item.goods_name }}
            </h4>
            <p class="price"><i>￥</i>{{ item.cost_price }}</p>
            <div class="outer">
              <a href>进店</a><span>{{ item.sale }}人已购买</span>
              <i class="tocart iconfont icon-gouwuchekong"></i>
            </div>
          </div>
        </li>
      </ul>
      <p v-if="isend">我也是有底线滴~</p>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Axios from "axios";
// import Login from "../Login/Login.vue";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      arrangeFlag: true,
      allFlag: true,
      priceFlag: true,
      goodList: [],
      page: 1,
      reqflag: true,
    };
  },
  //监听属性 类似于data概念
  computed: {
    isend() {
      return this.goodList.length / 10 < this.page ? true : false;
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    toDetail(did) {
      this.$router.push("/Detail/" + did);
    },
    goback() {
      this.$router.push("/Category/858");
    },
    arrange() {
      this.arrangeFlag = !this.arrangeFlag;
    },
    toSearch() {
      this.$router.push("/Search");
    },
    allFn() {
      this.allFlag = !this.allFlag;
    },
    priceFn() {
      this.priceFlag = !this.priceFlag;
    },
    getGoodListData() {
      let params = {
        keywords: this.$route.params.keywords,
        page: this.page,
        size: 10,
      };
      Axios.post("/api/catalog/goodslist", params).then((res) => {
        if (res.status == 200) {
          this.goodList.push(...res.data.data);
          this.reqflag = true;
        }
      });
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.getGoodListData();
    let oUl = this.$refs.list;
    let oLis = oUl.getElementsByTagName("li");
    oLis.forEach((item) => {
      item.onclick = function () {
        oLis.forEach((value) => {
          value.className = "";
        });
        this.className = "active";
      };
    });

    document.onscroll = () => {
      if (this.$refs.goodslist) {
        let body = document.body;

        if (
          // this.$refs.goodslist
          document.documentElement.scrollTop + body.clientHeight >=
            body.scrollHeight &&
          this.reqflag
        ) {
          this.reqflag = false;
          this.page++;
          this.getGoodListData();
        }
      }
    };
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='less'>
.goodlist {
  .loading {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20rem;
    height: 14rem;
  }
  header {
    width: 100%;
    display: flex;
    background-color: #fff;
    a {
      display: block;
      width: 10%;
      height: 4.4rem;
      line-height: 4.4rem;
      text-align: center;
      i {
        text-align: center;
        font-size: 2.6rem;
        color: #999;
      }
    }
    form {
      width: 80%;
      position: relative;
      margin-top: 0.7rem;
      input {
        width: 100%;
        height: 3rem;
        border: 1px solid #ccc;
        border-radius: 1.5rem;
        text-indent: 1rem;
      }
      i {
        position: absolute;
        width: 4.4rem;
        height: 3rem;
        line-height: 3rem;
        text-align: center;
        right: 0;
        top: 0;
        font-size: 2.4rem;
        color: #ccc;
      }
    }
    p {
      width: 10%;
      text-align: center;
      line-height: 4.4rem;
      font-size: 1.6rem;
      color: #232326;
    }
  }
  nav {
    .list {
      width: 100%;
      border-top: 1px solid #f1f1f1;
      background-color: #fff;
      ul {
        width: 90%;
        display: flex;
        font-size: 1.4rem;
        justify-content: space-between;
        margin: 0 auto;
        height: 3.6rem;
        line-height: 3.6rem;
        li {
          color: #333333;
        }
        li.active {
          color: #f00;
        }
      }
    }
  }
  .goodlist-con {
    width: 100%;
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      .goods {
        width: 100%;
        display: flex;
        flex-direction: row;
        img {
          width: 10rem;
          height: 10rem;
          margin: 1rem;
        }
        p {
          text-align: start;
        }
      }
      li {
        width: 47%;
        margin: 0.5rem;
        display: flex;
        flex-direction: column;
        background-color: #fff;
        img {
          width: 100%;
          display: block;
        }
        .goodinfo {
          margin: 1rem;
          color: #555;
          font-size: 1.6rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          h4 {
            font-size: 1.4rem;
            width: 100%;
            height: 3.8rem;
            line-height: 1.9rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          p {
            font-size: 16px;
            font-weight: 700;
            color: rgb(242, 14, 40);
            margin: 0.5rem 0;
            text-align: start;
            i {
              font-size: 1.2rem;
              font-style: normal;
            }
          }
          .outer {
            display: flex;
            justify-content: space-between;
            margin: 1rem 0 0;
            a {
              display: block;
              width: 20%;
              background-color: pink;
              color: #f92028;
              padding: 0 0.5rem;
              font-size: 1.2rem;
              text-align: center;
            }
            span {
              display: block;
              width: 60%;
              color: #999999;
              padding: 0 1rem;
              font-size: 1.2rem;
            }
            .tocart {
              color: #f92028;
            }
          }
        }
      }
    }
    p {
      font-size: 1.8rem;
      color: #ccc;
      text-align: center;
      margin: 1rem 0;
    }
  }
}
</style>