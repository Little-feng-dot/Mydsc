<!-- 新闻 -->
<template>
  <div class="swipe-list">
    <div class="img">
      <img
        src="https://x.dscmall.cn/storage/data/gallery_album/177/original_img/177_P_1597978466633.png"
        alt=""
      />
    </div>
    <div :class="{ list: true, tran: flag }" ref="news">
      <ul>
        <li v-for="item in news" :key="item.id">{{ item.title }}</li>
      </ul>
    </div>
    <div class="more">&gt;</div>
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
      news: [
        {
          id: 1,
          title: "新闻001",
        },
        {
          id: 2,
          title: "新闻002",
        },
        {
          id: 3,
          title: "新闻003",
        },
        {
          id: 4,
          title: "新闻004",
        },
      ],
      flag: false,
      timerId: "",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    moveList() {
      let oUl = this.$refs.news;
      oUl.style.marginTop = "-3.2rem";
      this.flag = !this.flag;
      setTimeout(() => {
        this.news.push(this.news[0]);
        this.news.shift();
        oUl.style.marginTop = "0rem";
        this.flag = !this.flag;
      }, 500);
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.timerId = setInterval(this.moveList, 2000);
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {
    clearInterval(this.timerId);
  }, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='less'>
.swipe-list {
  width: 95%;
  margin: 1rem auto 0;
  height: 3rem;
  padding: 1rem 0;
  display: flex;
  border-top: 1px solid #ccc;
  overflow: hidden;
  justify-content: space-between;
  .img {
    width: 7rem;
    height: 3rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .tran {
    transition: all 0.5s;
  }
  ul {
    width: 24rem;
    margin-left: 1rem;
    li {
      height: 3.2rem;
      font-size: 1.4rem;
      line-height: 3.2rem;
    }
  }
  .more {
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;
    border: 1px solid #f00;
    margin: auto 0;
    text-align: center;
    line-height: 1.8rem;
    color: #f00;
    font-size: 1.4rem;
  }
}
</style>