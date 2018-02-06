
import { Swipe, SwipeItem } from 'mint-ui'
import SearchPage from '../../components/searchPage'
import Search from '../../components/search'

export default {
  name: 'hello',
  data () {
    return {
      swipeData: null,    // 轮播图数据
      hotList: [],      // 热门歌单
      mvList: [],        // 热门MV
      types: {            // 轮播图跳转页面类型
        ALBUM: 10002,
        CD: 10014,
        JUMP: 3002
      },
      showSearch: false

    }
  },

  components: {
    SearchPage,
    Swipe,
    Search,
    SwipeItem
  },

  methods: {
    // 轮播图点击跳转
    jump (id, type) {
      console.log(id)
      switch (type) {
        case 10002:
          this.$router.push({
            name: 'Album',
            query: {
              id: id
            }
          })
          break
        case 10014:
          console.log('CD')
          break
        case 3002:
          location.href = id
          break
      }
    },

    // 热门歌单点击
    goCd (id) {
      this.$router.push({
        name: 'CD',
        query: {
          id: id
        }
      })
    },

    // 显示搜索页面
    showSearchPage () {
      this.showSearch = true
    },

    hiddenSearchPage () {
      this.showSearch = false
      const search = this.$refs.search
      search.searchData = null
    },

    setKeyWord (data) {
      const search = this.$refs.search
      search.search(data)
    }

  },

  created () {
    this.$store.dispatch('getRecommands').then((response) => {
      this.swipeData = response.data.data.focus
      this.hotList = response.data.data.hotdiss.list
      console.log(this.hotList)
      this.mvList = response.data.data.shoubomv.all
    })
  }
}
