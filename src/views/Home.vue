<template>
  <div>
    <h1>Home</h1>
    <div v-if="loading">Carregando...</div>
    <pre v-else>
      {{ api }}
    </pre>
  </div>
</template>

<script>
import fetchData from '@/mixins/fetchData.js';

export default {
  name: 'Home',
  mixins: [fetchData],
  data: () => ({
    cursos: null,
    loading: false,
  }),
  created() {
    this.fetchData('/home');
  },
};
</script>
