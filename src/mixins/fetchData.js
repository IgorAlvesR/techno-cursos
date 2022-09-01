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
          //TRICK: utilizado setTimeout para simular uma requisição que demorou
          setTimeout(() => {
            this.api = r
            this.loading = false
          }, 1000)
        })
    }
  }
}
