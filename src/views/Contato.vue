<template>
  <div>
    <PageLoading v-if="loading" />
    <transition>
      <div v-if="api">
        <h1>Contato</h1>
        {{ api }}
      </div>
    </transition>
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
