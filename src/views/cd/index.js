import Headers from '../../components/header'

export default {
  name: 'CD',
  components: {
    Headers
  },

  data () {
    return {
      id: this.$route.query.id
    }
  },

  computed: {

  },

  mounted () {

  },

  created () {
    this.$store.dispatch('getCdList', this.id).then((response) => {
      this.cd = response.data.cdlist[0]
      console.log(this.cd)
    })
  }
}
