<!-- 购物车 -->
<template>
  <div class="cart">
    <header>
      <div class="location">
        <i class="iconfont icon-location"></i
        ><span>北京市 北京市 东城区 东华门街道</span>
      </div>
      <div class="compile">编辑商品</div>
    </header>
    <div class="cart-content">
      <ul class="goodsList">
        <li v-for="(item, index) in cartDatas" :key="item.goods_id">
          <div class="check" @click="changeSelect(item.goods_id)">
            <i
              class="iconfont icon-danxuanxuanzhong"
              v-if="item.isSelect"
              style="color: red"
            ></i>
            <i class="iconfont icon-danxuan-moren" v-else></i>
          </div>
          <div class="good">
            <img :src="item.img_url" alt="" @click="toDetail(item.goods_id)" />
            <div class="goodsInfo">
              <div class="title" @click="toDetail(item.goods_id)">
                {{ item.goods_name }}
              </div>
              <div class="ouder">
                <div class="price">{{ item.shop_price }}</div>
                <div class="goodsNum">
                  <a href="javascript:;" @click="subCart(item.goods_id)">-</a>
                  <input
                    type="number"
                    value="1"
                    v-model="item.num"
                    ref="goodNum"
                    @input="inputNum(item.goods_id, index)"
                  />
                  <a href="javascript:;" @click="addCart(item.goods_id)">+</a>
                </div>
                <div class="collect">
                  <i class="iconfont icon-shoucang"></i>
                </div>
                <div class="dele" @click="deleCart(index)">
                  <i class="iconfont icon-shanchu"></i>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="cart-footer">
      <div class="checkAll" @click="changeCheckAll">
        <i
          class="iconfont icon-danxuanxuanzhong"
          v-if="checkAll"
          style="color: red"
        ></i>
        <i class="iconfont icon-danxuan-moren" v-else></i>
        <span>全选</span>
      </div>
      <div class="total">
        <div class="totalPrice">
          合计: <span>{{ total.totalPrice }}</span>
        </div>
        <div class="save">(不含运费，以节省 <span>0.00</span> )</div>
      </div>
      <div
        class="topay"
        :style="{ backgroundColor: total.totalNum == 0 ? 'ccc' : 'f44' }"
      >
        去结算({{ total.totalNum }})
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

import Footer from "@/components/Footer.vue";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Footer,
  },
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {
    cartDatas() {
      return this.$store.state.cartDatas;
    },
    checkAll() {
      return this.$store.state.cartDatas.every((item) => item.isSelect == true);
    },
    total() {
      let totalPrice = 0;
      let totalNum = 0;
      this.$store.state.cartDatas.forEach((item) => {
        if (item.isSelect) {
          totalPrice += item.shop_price * item.num;
          totalNum += Number(item.num);
        }
      });
      return {
        totalPrice,
        totalNum,
      };
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    changeSelect(gid) {
      this.$store.commit("goodsIsSelest", gid);
    },
    changeCheckAll() {
      this.$store.commit("goodsIsSelestAll", this.checkAll);
    },
    addCart(gid) {
      this.$store.commit("addCart", gid);
    },
    subCart(gid) {
      this.$store.commit("subCart", gid);
    },
    inputNum(gid, index) {
      let val = this.$refs.goodNum[index].value;
      let inputObj = {
        gid: gid,
        num: val,
      };
      this.$store.commit("inputNum", inputObj);
    },
    deleCart(index) {
      this.$store.commit("deleCart", index);
    },
    toDetail(did) {
      this.$router.push("/Detail/" + did);
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='less'>
.cart {
  header {
    margin: 1rem;
    display: flex;
    font-size: 1.4rem;
    color: #777777;
    justify-content: space-between;
    .compile {
      color: #f44;
    }
  }
  .cart-content {
    width: 100%;
    height: 10rem;
    .goodsList {
      margin-bottom: 11rem;
      li {
        height: 10rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 0.5rem 1rem 0;
        .check {
          width: 10%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .good {
          width: 90%;
          height: 10rem;
          display: flex;
          justify-content: space-around;
          align-items: center;
          background-color: #fff;
          border-bottom-left-radius: 1rem;
          border-bottom-right-radius: 1rem;
          img {
            width: 20%;
          }
          .goodsInfo {
            width: 70%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-content: space-between;
            .title {
              height: 4rem;
              line-height: 2rem;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              color: #232326;
            }
            .ouder {
              display: flex;
              justify-content: space-between;
              height: 3rem;
              line-height: 3rem;
              margin-top: 0.5rem;
              .price {
                width: 50%;
                color: #f20e28;
                font-weight: bolder;
                font-size: 1.4rem;
                &::before {
                  content: "￥";
                  font-size: 1.2rem;
                }
              }
              .goodsNum {
                display: flex;
                border: 1px solid #f1f1f1;
                border-radius: 0.5rem;
                margin: 0 0.5rem;
                a {
                  display: block;
                  width: 3rem;
                  text-align: center;
                  line-height: 3rem;
                  font-size: 1.8rem;
                }
                input {
                  width: 3rem;
                  text-align: center;
                  line-height: 3rem;
                  border-left: 1px solid #f1f1f1;
                  border-right: 1px solid #f1f1f1;
                }
              }
              .collect,
              .dele {
                line-height: 3rem;
                color: #666;
                margin: 0 0.2rem;
              }
            }
          }
        }
      }
    }
  }
  .cart-footer {
    width: 100%;
    height: 5rem;
    position: fixed;
    bottom: 5rem;
    left: 0;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .checkAll {
      width: 20%;
      font-size: 1.4rem;
      i {
        margin: 1rem;
      }
    }
    .total {
      display: flex;
      flex-direction: column;
      text-align: right;
      .totalPrice {
        font-size: 1.4rem;
        span {
          color: #f44;
          font-size: 1.4rem;
          font-weight: bolder;
          &::before {
            content: "￥";
            font-size: 1.2rem;
          }
        }
      }
      .save {
        color: #999999;
        span {
          font-size: 1.4rem;
          font-weight: bolder;
          &::before {
            content: "￥";
            font-size: 1.2rem;
          }
        }
      }
    }
    .topay {
      width: 30%;
      background-color: #f44;
      height: 5rem;
      line-height: 5rem;
      text-align: center;
      color: #fff;
      font-size: 1.4rem;
    }
  }
}
</style>