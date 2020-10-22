const mutations = {

    getSwipeData(state, data) {
        state.swipeData = data
    },
    getCategoryData(state, data) {
        state.categoryData = data
    },
    getCategoryRightData(state, data) {
        state.categoryRightData = data
    },
    getCartDatas(state, data) {
        let flag = true
        state.cartDatas.forEach(item => {
            if (item.goods_id == data.goods_id) {
                item.num++;
                localStorage['carts'] = JSON.stringify(state.cartDatas);
                flag = false
            }
        })
        if (flag && data.goods_id != undefined) {
            state.cartDatas.push(data)
            localStorage['carts'] = JSON.stringify(state.cartDatas)
        }

    },
    goodsIsSelest(state, gid) {
        state.cartDatas.forEach(item => {
            if (item.goods_id == gid) {
                item.isSelect = !item.isSelect
            }
        })
        localStorage['carts'] = JSON.stringify(state.cartDatas)
    },
    goodsIsSelestAll(state, checkAllFlag) {
        state.cartDatas.forEach(item => item.isSelect = !checkAllFlag)
        localStorage['carts'] = JSON.stringify(state.cartDatas)
    },
    addCart(state, gid) {
        state.cartDatas.forEach(item => {
            if (item.goods_id == gid) {
                item.num++
            }
        })
        localStorage['carts'] = JSON.stringify(state.cartDatas)
    },
    subCart(state, gid) {
        state.cartDatas.forEach(item => {
            if (item.goods_id == gid) {
                item.num--
                    if (item.num <= 1) {
                        item.num = 1
                    }
            }
        })
        localStorage['carts'] = JSON.stringify(state.cartDatas)
    },
    inputNum(state, inputObj) {
        let reg = /^0/g;
        state.cartDatas.forEach(item => {
            if (item.goods_id == inputObj.gid) {
                if (reg.test(inputObj.num) || inputObj.num <= 1) {
                    item.num = 1
                } else {
                    item.num = inputObj.num
                }
            }
        })
        localStorage['carts'] = JSON.stringify(state.cartDatas)
    },
    deleCart(state, index) {
        state.cartDatas.splice(index, 1)
        localStorage['carts'] = JSON.stringify(state.cartDatas)
    }

}

export default mutations