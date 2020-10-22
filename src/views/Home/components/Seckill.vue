<!-- 秒杀 -->
<template>
  <div class="seckill">
    <div class="header">
      <div class="seckill-log">
        <img
          src="https://x.dscmall.cn/storage/data/gallery_album/177/original_img/177_P_1597978468241.png"
          alt=""
        />
      </div>
      <div class="seckill-time">
        距结束还剩
        <p>
          <span class="hour">{{ time.hour }}</span
          >: <span class="min">{{ time.min }}</span
          >:
          <span class="sec">{{ time.sec }}</span>
        </p>
      </div>
    </div>
    <div class="tab">
      <ul class="tab-items">
        <li
          v-for="(item, index) in tabTime"
          :key="index"
          @click="tabClick(index)"
          :class="activeIndex == index ? 'active' : ''"
        >
          <p>{{ item.time }}</p>
          <p>{{ item.seckillState }}</p>
        </li>
      </ul>
      <ul
        class="tab-con"
        v-for="(item, index) in tabTime"
        :key="index"
        v-show="activeIndex == index"
      >
        <li v-for="item in tabCon" :key="item.id">
          <img :src="item.imgSrc" alt="" />
          <p>{{ item.title }}</p>
        </li>
      </ul>
    </div>
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
      timerId: "",
      time: {
        hour: "00",
        min: "00",
        sec: "00",
      },
      index: 0,
      activeIndex: 0,
      tabTime: [
        {
          time: "20:00",
          seckillState: "即将开始",
        },
        {
          time: "21:00",
          seckillState: "即将开始",
        },
        {
          time: "22:00",
          seckillState: "即将开始",
        },
        {
          time: "23:00",
          seckillState: "即将开始",
        },
        {
          time: "24:00",
          seckillState: "即将开始",
        },
      ],
      tabCon: [
        {
          id: "1",
          imgSrc:
            "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489106749091.jpg",
          title: "实木衣柜1",
        },
        {
          id: "2",
          imgSrc:
            "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489106749091.jpg",
          title: "实木衣柜2",
        },
        {
          id: "3",
          imgSrc:
            "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489106749091.jpg",
          title: "实木衣柜3",
        },
        {
          id: "4",
          imgSrc:
            "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489106749091.jpg",
          title: "实木衣柜4",
        },
        {
          id: "5",
          imgSrc:
            "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489106749091.jpg",
          title: "实木衣柜5",
        },
      ],
      tabCon2: [
        {
          id: "1",
          imgSrc:
            "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489106314732.jpg",
          title: "丹麦1",
        },
        {
          id: "2",
          imgSrc:
            "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489106314732.jpg",
          title: "丹麦2",
        },
        {
          id: "3",
          imgSrc:
            "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489106314732.jpg",
          title: "丹麦3",
        },
        {
          id: "4",
          imgSrc:
            "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489106314732.jpg",
          title: "丹麦4",
        },
        {
          id: "5",
          imgSrc:
            "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489106314732.jpg",
          title: "丹麦5",
        },
      ],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    seckill() {
      let newTime = new Date().getTime();
      let year = new Date().getFullYear();
      let month = new Date().getMonth() + 1;
      let day = new Date().getDate();
      let date = `${year}-${month}-${day}`;
      let seckillTime = date + " " + this.tabTime[this.index].time;
      let targetTime = new Date(seckillTime).getTime();
      let subTime = targetTime - newTime;
      if (subTime > 0) {
        let hour = Math.floor((subTime / 1000 / 60 / 60) % 24);
        let min = Math.floor((subTime / 1000 / 60) % 60);
        let sec = Math.floor((subTime / 1000) % 60);
        hour = hour >= 10 ? hour : "0" + hour;
        min = min >= 10 ? min : "0" + min;
        sec = sec >= 10 ? sec : "0" + sec;
        let time = {
          hour,
          min,
          sec,
        };
        this.time = time;
      } else {
        this.tabTime[this.index].seckillState = "抢购结束";
        this.index += 1;
        this.tabTime[this.index].seckillState = "正在抢购";
      }
    },
    tabClick(index) {
      this.activeIndex = index;
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.timerId = setInterval(this.seckill, 1000);
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
.seckill {
  width: 90%;
  height: 37rem;
  background-color: #fff;
  margin: 10px auto;
  padding: 20px 10px;
  border-radius: 10px;
  .header {
    height: 3.5rem;
    display: flex;
    justify-content: space-between;
    .seckill-log {
      width: 10rem;
      height: 2.2rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .seckill-time {
      color: #333333;
      p {
        color: #f00;
        display: inline-block;
        font-size: 1.4rem;
        span {
          color: #fff;
          background-color: #f00;
          padding: 4px 8px;
          border-radius: 10px;
          margin: 0 5px;
          font-size: 1.2rem;
        }
      }
    }
  }
  .tab {
    height: 33.5rem;
    .tab-items {
      width: 100%;
      height: 5rem;
      display: flex;
      li {
        flex: 1;
        line-height: 2rem;
        p {
          text-align: center;
          font-size: 1.2rem;
          color: #999999;
        }
      }
      .active {
        border-bottom: 2px solid #f20d28;
        p {
          color: #f20d28;
          transform: scale(1.2);
        }
      }
    }
    .tab-con {
      width: 100%;
      overflow: scroll;
      display: flex;
      margin: 20px 0 10px;
      li {
        width: 10.8rem;
        height: 15rem;
        margin: 0 5px;
        text-align: center;
        p {
          margin-top: 5px;
        }
        img {
          width: 10.8rem;
          height: 10.8rem;
        }
      }
    }
  }
}
</style>