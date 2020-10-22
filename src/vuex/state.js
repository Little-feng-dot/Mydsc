const state = {
    // categoryDate: [], //分类数据
    swipeData: [], //首页轮播图数据
    categoryData: [], //分类数据
    cartDatas: localStorage['carts'] ? JSON.parse(localStorage['carts']) : []
}

export default state