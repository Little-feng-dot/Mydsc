<!-- 右边 -->
<template>
  <div class="categroy-right">
    <img
      class="loading"
      v-if="categoryData == ''"
      src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=32913934,4292271124&fm=26&gp=0.jpg"
      alt=""
    />
    <div class="categroy-ad" v-else>
      <img :src="adSrc" alt="" />
    </div>
    <div class="con-list" v-for="item in categoryData" :key="item.cat_id">
      <div class="title">-{{ item.cat_name }}-</div>
      <ul class="con-item">
        <li
          v-for="list in item.child"
          :key="list.cat_id"
          @click="toGoodList(list.cat_id)"
        >
          <img :src="list.touch_icon" alt="" />
          <p>{{ list.cat_name }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Axios from "axios";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      categoryData: "",
      arr: "",
    };
  },
  //监听属性 类似于data概念
  computed: {
    adSrc() {
      return this.arr != "" ? this.arr[0].touch_catads : "";
    },
  },
  //监控data中的数据变化
  watch: {
    $route(to) {
      this.categoryData = "";
      let cid = to.params.cid;
      this.getCategoryRightData(cid);
    },
  },
  //方法集合
  methods: {
    getCategoryRightData(cid) {
      Axios.get("api/catalog/list/" + cid).then((res) => {
        this.categoryData = res.data.data;
        if (this.$store.state.categoryData) {
          this.arr = this.$store.state.categoryData.filter(
            (item) => item.cat_id == cid
          );
        }
      });
    },
    toGoodList(gid) {
      this.$router.push("/GoodList/" + gid);
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.getCategoryRightData("858");
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='less'>
.categroy-right {
  width: calc(100% - 8.4rem);
  background-color: #fff;
  overflow-y: scroll;
  .loading {
    position: fixed;
    top: 50%;
    left: 63%;
    transform: translate(-50%, -50%);
    width: 20rem;
    height: 14rem;
  }
  .categroy-ad {
    width: 26.8rem;
    height: 9.6rem;
    margin: 1.1rem 1.1rem 0;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .con-list {
    width: 100%;
    font-size: 1.4rem;
    color: #333;
    .title {
      height: 2.5rem;
      line-height: 2.5rem;
      text-align: center;
      margin: 1.1rem 0;
    }
    .con-item {
      width: 100%;
      display: flex;
      font-size: 1.2rem;
      color: #777;
      flex-wrap: wrap;
      li {
        width: 33%;
        margin: 1rem 0;
        img {
          display: block;
          width: 5.2rem;
          height: 5.2rem;
          margin: 0 auto;
        }
        p {
          text-align: center;
          margin: 1rem 0 0;
        }
      }
    }
  }
}
</style>