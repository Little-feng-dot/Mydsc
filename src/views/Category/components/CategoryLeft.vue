<!-- 左边 -->
<template>
  <div class="categroy-left">
    <ul class="categroy-list">
      <li v-for="item in this.$store.state.categoryData" :key="item.cat_id">
        <router-link :to="'/Category/' + item.cat_id">{{
          item.cat_name
        }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      oIndex: 0,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.$store.dispatch("actGetCategoryData");
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='less'>
.categroy-left {
  width: 8.4rem;
  border-right: 1px solid #f1f1f1;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: #fff;
  img {
    position: fixed;
    top: 50%;
    left: 11%;
    transform: translate(-50%, -50%);
    width: 16%;
    height: 8%;
  }
  .categroy-list {
    width: 100%;
    li {
      width: 100%;
      height: 3.8rem;
      text-align: center;
      color: #999;
      border-top: 1px solid transparent;
      a {
        width: 100%;
        display: block;
        height: 1.6rem;
        line-height: 1.6rem;
        margin: 1.1rem 0;
        font-size: 1.4rem;
      }
    }
    .router-link-active {
      border-left: 0.25rem solid #f23030;
      color: #f23030;
    }
  }
}
</style>