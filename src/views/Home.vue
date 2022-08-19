<template>
  <div>
    <h1>Home</h1>
    <PageLoading v-if="loading" />
    <div v-else>
      {{ api }}
    </div>
  </div>
</template>

<script>
import fetchData from '@/mixins/fetchData.js'

export default {
  name: 'Home',
  mixins: [fetchData],
  data: () => ({
    cursos: null,
    loading: false
  }),
  created() {
    this.fetchData('/home')
  }
}
</script>
