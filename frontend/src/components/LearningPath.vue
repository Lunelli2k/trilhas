<template>
  <div>
    <div class="header-actions">
      <button @click="$emit('new-search')" class="new-search-btn">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
        </svg>
        Nova Busca
      </button>
      
      <div class="current-topic">
        Tópico atual: <strong>{{ learningPathData.query }}</strong>
      </div>
    </div>

    <!-- Resto do código do LearningPath aqui -->
  </div>
</template>

<script>
// ... resto do script do LearningPath

export default {
  props: {
    learningPathData: {
      type: Object,
      required: true
    }
  },
  emits: ['new-search'], // Adicione esta linha
  // ... resto do componente
}
</script>

<style scoped>
.header-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.new-search-btn {
  display: flex;
  align-items: center;
  padding: 0.7rem 1.5rem;
  background: #42b883;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.new-search-btn:hover {
  background: #359268;
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(66, 184, 131, 0.3);
}

.current-topic {
  font-size: 1.1rem;
  color: #35495e;
}

/* ... resto do estilo */
</style>