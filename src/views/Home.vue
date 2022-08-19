<template>
  <div>
    <PageLoading v-if="loading" />
    <transition>
      <div v-if="api">
        <h1>Home</h1>
        {{ api }}
      </div>
    </transition>
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
