<!-- 首页-首页 -->
<template>
  <div class="home-index">
    <div class="bg"></div>
    <Swipe :indexSwipe="indexSwipeData" />
    <SwipeWraper />
    <News />
    <div class="separat">
      <img
        src="https://x.dscmall.cn/storage/data/gallery_album/original_img/CPvH5WHHbF0EoG9XjRQbbT3knMVCeEt9DlYGQhJM.png"
        alt=""
      />
    </div>
    <Seckill />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Swipe from "../components/Swipe";
import SwipeWraper from "../components/SwipeWraper";
import News from "../components/News";
import Seckill from "../components/Seckill";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Swipe,
    SwipeWraper,
    News,
    Seckill,
  },
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {
    indexSwipeData() {
      return this.$store.state.swipeData;
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
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
.home-index {
  position: relative;
  margin-top: 9rem;
  .bg {
    width: 100%;
    height: 4rem;
    background-color: #f00;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

  .separat {
    width: 35.5rem;
    height: 17.5rem;
    margin: 1rem auto 0;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>