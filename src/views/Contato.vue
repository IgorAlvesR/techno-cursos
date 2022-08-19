<template>
  <div>
    <h1>Contato</h1>
    <PageLoading v-if="loading" />
    <div v-else>
      {{ api }}
    </div>
  </div>
</template>

<script>
import fetchData from '@/mixins/fetchData.js'

export default {
  name: 'Contato',
  mixins: [fetchData],
  created() {
    this.fetchData('/contato')
  }
}
</script>
