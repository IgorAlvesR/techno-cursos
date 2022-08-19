<template>
  <div>
    <PageLoading v-if="loading" />
    <transition>
      <div v-if="api">
        <h1>Cursos</h1>
        {{ api }}
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from '@/mixins/fetchData.js'

export default {
  name: 'Cursos',
  mixins: [fetchData],
  created() {
    this.fetchData('/cursos')
  }
}
</script>
