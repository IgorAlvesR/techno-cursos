<template>
  <div>
    <h1>Contato</h1>
    <div v-if="loading">Carregando...</div>
    <pre v-else>
      {{ api }}
    </pre>
  </div>
</template>

<script>
import fetchData from '@/mixins/fetchData.js';

export default {
  name: 'Contato',
  mixins: [fetchData],
  created() {
    this.fetchData('/contato');
  },
};
</script>
