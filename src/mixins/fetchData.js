export default {
  data: () => ({
    loading: null,
    api: null
  }),
  methods: {
    fetchData(endpoint) {
      this.loading = true
      this.api = null
      return fetch(`http://localhost:3000${endpoint}`)
        .then((r) => r.json())
        .then((r) => {
          this.api = r
          setTimeout(() => {
            this.loading = false
          }, 2000)
        })
    }
  }
}
