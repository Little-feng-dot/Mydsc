import { swipeData } from '@/api/index'
import { categoryData } from '@/api/index'

const actions = {

    async actGetSwipeData(context) {
        let result = []
        result = await swipeData()
        context.commit('getSwipeData', result.data)
    },
    async actGetCategoryData(context) {
        if (context.state.categoryData == '') {
            let result = []
            result = await categoryData()
            context.commit('getCategoryData', result.data)
        }
    },


}

export default actions