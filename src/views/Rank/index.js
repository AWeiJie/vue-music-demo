import Search from '../../components/search'
import SearchPage from '../../components/searchPage'

export default {
  name: 'rank',
  components: {
    Search,
    SearchPage
  },

  data () {
    return {
      rankList: [],
      showSearch: false
    }
  },

  methods: {
    showRank (id) {
      this.$router.push({
        name: 'RankDetail',
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

  mounted () {

  },

  created: function () {
    this.$store.dispatch('getRankList').then((response) => {
      this.rankList = response.data.data.topList
      console.log(this.rankList)
    })
  }
}
