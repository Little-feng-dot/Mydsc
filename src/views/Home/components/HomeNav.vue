<!-- 首页导航 -->
<template>
<div class='homeNav'>
   <div class="list">
        <ly-tab
            v-model="selectedId"
            :items="items"
            :options="options"
            @change='changeFn'
            >
        </ly-tab>
   </div>
    <div class="toCategory"><i class="iconfont icon-fenlei"></i>分类</div>
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
        selectedId: 0,
      items: [
        {label: '首页'},
        {label: '家用电器'},
        {label: '男装女装'},
        {label: '鞋靴箱包'},
        {label: '手机数码'},
        {label: '电脑办公'},
        {label: '家居家纺'},
        {label: '个人化妆'},
      ],
      options: {
        activeColor: '#fff'
        // 可在这里指定labelKey为你数据里文字对应的字段名
      },
      routerLinkList:[
        '/Home/Index',
        '/Home/Electric',
        '/Home/Clothing',
        '/Home/Bags',
        '/Home/Phone',
        '/Home/Computer',
        '/Home/Furniture',
        '/Home/MakeUp',
        ]
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    changeFn(item,index){
        this.$router.push(this.routerLinkList[index])
    }
},
beforeCreate() {}, //生命周期 - 创建之前
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
beforeMount() {}, //生命周期 - 挂载之前
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='less'>
    .homeNav{
        width: 100%;
        height: 4rem;
        background-color: #f00;
        display: flex;
        justify-content: center;
        position: fixed;
        top: 5rem;
        left: 0;
        z-index: 999;
        .list{
            width: 80%;
            height: 4rem;
            overflow: hidden;
            .ly-tabbar{
                background-color:#f00;
                    padding: 0;
                    border: 0;
                    box-shadow: 0 0 0 #fff;
                    height: 4rem;
                    .ly-tab-list {
                        padding: 0;
                        .ly-tab-item {
                            margin-left: 6px;
                        }
                          a{
                            color: #fff;
                            }
                    }    
            }
        }
        .toCategory{
            width: 20%;
            height: 4rem;
            line-height: 4rem;
            color: #fff;
            position: relative;
            i{
                padding-left: 1rem;
                box-shadow: -6px 0 4px -4px rgba(0,0,0,.4);
            }
        }
    }
</style>