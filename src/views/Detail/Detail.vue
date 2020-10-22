<!-- 商品详情页 -->
<template>
  <div class="detail">
    <header>
      <div class="goback" onClick="window.history.back()">
        <i class="iconfont icon-zuojiantou"></i>
      </div>
      <div class="tab-warp">
        <ul>
          <li class="active">商品</li>
          <li>详情</li>
          <li>评论</li>
        </ul>
      </div>
      <div class="share">
        <i class="iconfont icon-fenxiang_2"></i>
      </div>
    </header>
    <div class="swipe">
      <!-- :auto="2000"   间隔时间
      :show-indicators="true"   是否显示指示点
      :default-index="1"    初始化索引
      :continuous="true"   是否循环播放
    @change="handleChange"   绑定一个事件，参数index可以获取索引-->

      <mt-swipe
        :auto="2000"
        :show-indicators="true"
        :default-index="0"
        :continuous="true"
        style="touch-action: none"
      >
        <mt-swipe-item
          v-for="item in detailData.gallery_list"
          :key="item.img_id"
        >
          <img :src="item.img_url" alt />
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="goodinfo">
      <div class="price">
        <p>
          {{ detailData.shop_price }}<del>{{ detailData.marketPrice }}</del>
        </p>
      </div>
      <div class="VIP">
        <img src="https://x.dscmall.cn/static/dist/img/icon-vip.png" alt="" />
        <span>高级VIP享超值优惠价</span>
        <span class="price-VIP">{{
          detailData.membership_card_discount_price
        }}</span>
        <router-link to="/Mine"
          >立即开通<i class="iconfont icon-youjiantou1"></i
        ></router-link>
      </div>
      <div class="title">
        {{ detailData.goods_name }}
      </div>
      <div class="outer">
        <p>
          累计销量<span>{{ detailData.sales_volume }}</span>
        </p>
        <p>
          库存<span>{{ detailData.goods_number }}</span>
        </p>
        <p>上海市 上海市</p>
      </div>
    </div>
    <div class="desc" v-html="detailData.goods_desc"></div>
    <footer>
      <div class="kefu">
        <i class="iconfont icon-kefu"></i><span>客服</span>
      </div>
      <div class="collection">
        <i class="iconfont icon-shoucang"></i><span>收藏</span>
      </div>
      <div class="cart" @click="toCart">
        <i class="iconfont icon-gouwuchekong"></i><span>购物车</span>
        <span class="cartNum">{{ cartNum }}</span>
        <span :class="flag ? 'addOne' : ''" v-show="flag">+1</span>
      </div>
      <div class="addCart" @click="addCart(detailData)">加入购物车</div>
      <div class="buy">立即购买</div>
    </footer>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { detail } from "@/api/index";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      detailData: [],
      flag: false,
    };
  },
  //监听属性 类似于data概念
  computed: {
    cartNum() {
      let totalNum = 0;
      this.$store.state.cartDatas.forEach((item) => {
        totalNum += item.num;
      });
      return totalNum;
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    async getDetailData() {
      let did = this.$route.params.did;

      let result = await detail({ goods_id: did });
      this.detailData = result.data;
    },
    addCart(carts) {
      this.flag = true;
      setTimeout(() => {
        this.flag = false;
      }, 1000);
      let cartDatas = {
        goods_id: carts.goods_id,
        goods_name: carts.goods_name,
        img_url: carts.goods_thumb,
        shop_price: carts.shop_price,
        num: 1,
        isSelect: true,
      };
      this.$store.commit("getCartDatas", cartDatas);
    },
    toCart() {
      this.$router.push("/Cart");
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.getDetailData();
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='less'>
.detail {
  margin-bottom: 5rem;
  header {
    width: 100%;
    height: 4rem;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    color: #555555;
    z-index: 999;
    .active {
      color: #f92028;
      border-bottom: 2px solid #f92028;
    }
    .goback {
      width: 15%;
      line-height: 4rem;
      text-align: center;
      i {
        font-size: 2.6rem;
      }
    }
    .tab-warp {
      width: 64%;
      ul {
        display: flex;
        justify-content: center;
        li {
          width: 33%;
          text-align: center;
          line-height: 4rem;
          height: 3.8rem;
          font-size: 1.5rem;
        }
      }
    }
    .share {
      width: 15%;
      line-height: 4rem;
      text-align: center;
      i {
        font-size: 1.6rem;
      }
    }
  }
  .swipe {
    width: 100%;
    height: 50vh;
    margin-top: 4rem;
    div {
      border-radius: 0;
    }
    .mint-swipe-indicator {
      border-radius: 50%;
      color: #666;
    }
    .is-active {
      background-color: #ff976a;
    }
  }
  .goodinfo {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    background-color: #fff;
    .price {
      p {
        font-size: 2.4rem;
        color: #f20e28;
        font-weight: bolder;
        del {
          font-size: 1.4rem;
          margin-left: 1rem;
          color: #999999;
          font-weight: normal;
          &::before {
            font-size: 1.4rem;
            content: "￥";
          }
        }
        &::before {
          font-size: 1.4rem;
          content: "￥";
        }
      }
    }
    .VIP {
      background-color: #f7f8fc;
      padding: 1rem;
      border-radius: 2.5rem;
      color: #333333;
      font-size: 1.4rem;
      img {
        width: 2rem;
        height: 2rem;
        vertical-align: middle;
        margin-right: 0.5rem;
      }
      a {
        float: right;
        background-color: #000;
        color: #e3c49e;
        border-radius: 1rem;
        padding: 0.2rem 1rem;
      }
      .price-VIP {
        font-weight: bolder;
        &::before {
          font-size: 1.2rem;
          content: "￥";
        }
      }
    }
    .title {
      height: 4rem;
      line-height: 2rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      font-size: 1.4rem;
      color: #333333;
    }
    .outer {
      display: flex;
      justify-content: space-between;
      font-size: 1.4rem;
      color: #999999;
      margin: 1rem 0;
    }
  }
  .desc {
    width: 100%;
    div {
      width: 100%;
    }
    a {
      display: block;
    }
    img,
    p,
    a {
      width: 100%;
    }
  }
  footer {
    width: 100%;
    height: 5rem;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    div {
      color: #666;
      height: 100%;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    i {
      font-size: 2rem;
    }
    .cart {
      position: relative;
      .cartNum {
        min-width: 2rem;
        line-height: 2rem;
        text-align: center;
        background-color: #f44;
        border-radius: 50%;
        font-size: 1.2rem;
        color: #fff;
        position: absolute;
        top: 0;
        right: 0.6rem;
      }
      .addOne {
        position: absolute;
        top: 0.5rem;
        left: 35%;
        font-size: 1.6rem;
        font-weight: bolder;
        color: #f44;
        opacity: 0;
        animation: moveup 1.5s linear;
      }
      @keyframes moveup {
        0% {
          top: 0.5rem;
        }
        50% {
          top: -3.5rem;
          opacity: 1;
        }
        100% {
          top: -3.5rem;
          opacity: 0;
        }
      }
    }
    .addCart {
      flex: 2;
      color: #fff;
      background-color: #f44;
      font-size: 1.6rem;
    }
    .buy {
      flex: 2;
      color: #fff;
      font-size: 1.6rem;
      background-color: #ff976a;
    }
  }
}
</style>