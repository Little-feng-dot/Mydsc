<!-- 首页头部 -->
<template>
<div class='homeHeader'>
    <header>
        <form>
        <input type="text" placeholder="搜索商品名称" @click='search'>
        <i class="iconfont icon-sousuo"></i>
        </form>
        <i class="iconfont icon-xiaoxi-"></i>
    </header>
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

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    search(){
        this.$router.push({name:'Search'})
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
    .homeHeader{
        width: 100%;
        height: 5rem;
        background-color: #f00;
        position: fixed;
        top:0;
        left:0;
        z-index: 999;
        header{
            display: flex;
            justify-content:center;
            align-items: center;
            height: 5rem;
            form{
                width: 85%;
                height: 3rem;
                position: relative;
                    input{
                    width: 100%;
                    height: 3rem;
                    border-radius: 1.5rem;
                    margin-left: 1rem;
                    color: #999;
                    text-indent: 1.5rem;
                }
                i{
                    position: absolute;
                    right: 0.2rem;
                    top: -1rem;
                     display: block;
                     width: 10%;
                     height: 10%;
                     color: #ccc;
                }
            }
           
            i{
                display: block;
                width: 15%;
                height: 5rem;
                text-align: center;
                line-height: 5rem;
                color: #fff;
                font-size: 2.4rem;
            }
        }
    }
</style>