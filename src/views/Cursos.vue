<template>
  <div>
    <h1>Cursos</h1>
    <div v-if="loading">Carregando...</div>
    <pre v-else>
      {{ api }}
    </pre>
  </div>
</template>

<script>
import fetchData from '@/mixins/fetchData.js';

export default {
  name: 'Cursos',
  mixins: [fetchData],
  created() {
    this.fetchData('/cursos');
  },
};
</script>
