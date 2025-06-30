<template>
  <div class="home-view">
    <div class="hero-section">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">Jornada de Data Science</h1>
          <p class="hero-subtitle">Domine os princípios e técnicas essenciais para análise de dados e machine learning</p>
        </div>
        
        <div class="search-container">
          <input
            v-model="query"
            type="text"
            placeholder="Ex: Machine Learning, Análise de Dados"
            class="search-input"
            @keyup.enter="fetchLearningPath"
          />
          <button class="search-btn" @click="fetchLearningPath">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Iniciar Jornada
          </button>
        </div>
      </div>
      
      <div class="hero-graphic">
        <div class="graphic-element"></div>
        <div class="graphic-element"></div>
        <div class="graphic-element"></div>
      </div>
    </div>

    <div v-if="isLoading" class="loading-state">
      <div class="loader"></div>
      <p>Construindo seu plano de aprendizado...</p>
    </div>
    
    <div v-else-if="error" class="error-state">
      <svg xmlns="http://www.w3.org/2000/svg" class="icon-xl" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
      <h3>Ocorreu um erro</h3>
      <p>{{ error }}</p>
      <button @click="retryFetch" class="btn btn-primary mt-4">Tentar novamente</button>
    </div>
    
    <div v-else-if="!learningPathData" class="empty-state">
      <div class="empty-content">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon-xl" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
        <h3 class="empty-title">Comece sua jornada em Data Science</h3>
        <p class="empty-description">Digite um tópico acima para gerar seu plano personalizado de aprendizado</p>
        <div class="featured-topics">
          <span class="topic-tag">Machine Learning</span>
          <span class="topic-tag">Deep Learning</span>
          <span class="topic-tag">Data Visualization</span>
          <span class="topic-tag">Big Data</span>
        </div>
      </div>
    </div>

    <LearningPath 
      v-else
      :learningPathData="learningPathData" 
      @new-search="handleNewSearch"
    />
  </div>
</template>

<script>
import LearningPath from '@/components/LearningPath.vue'
import storage from '@/storage/storage'
import api from '@/services/api'

export default {
  components: {
    LearningPath
  },
  data() {
    return {
      query: '',
      isLoading: false,
      learningPathData: null,
      error: null
    }
  },
  mounted() {
    const cachedData = storage.getLearningPath();
    if (cachedData) {
      this.learningPathData = cachedData;
      this.query = storage.getLastQuery();
    }
  },
  methods: {
    async fetchLearningPath() {
      if (!this.query.trim()) {
        this.error = "Por favor, digite um tema para pesquisa";
        return;
      }
      
      this.isLoading = true;
      this.error = null;
      this.learningPathData = null;
      
      try {
        // Em produção, substitua pelo chamado real à API
        // const apiData = await api.getLearningPath(this.query);
        
        // Para demonstração, usando dados locais
        const apiData = this.getLocalData();
        this.learningPathData = this.processApiResponse(apiData);
        storage.saveLearningPath(this.learningPathData);
      } catch (err) {
        console.error('Erro ao buscar dados:', err);
        this.error = err.message || "Erro ao carregar dados";
      } finally {
        this.isLoading = false;
      }
    },
    
    getLocalData() {
      // Retorna o JSON que você forneceu
      return {
        "modulos": {
          "modulo 01": "Fundamentos da Arquitetura de Software",
          "modulo 02": "Princípios de Design e Padrões Arquiteturais",
          "modulo 03": "Estilos Arquiteturais Comuns",
          "modulo 04": "Arquitetura de Microsserviços",
          "modulo 05": "Arquitetura Orientada a Eventos (Event-Driven Architecture - EDA)",
          "modulo 06": "Arquitetura de Nuvem e DevOps",
          "modulo 07": "Qualidade e Testabilidade em Arquitetura",
          "modulo 08": "Tópicos Avançados e Evolução da Arquitetura"
        },
        "modulo 01": {
          "título": "Fundamentos da Arquitetura de Software",
          "descrição": "Este módulo cobre os conceitos básicos da arquitetura de software, preparando o terreno para tópicos mais avançados.",
          "tópicos": [
            "O que é arquitetura de software? Definições, objetivos e importância.",
            "Papéis e responsabilidades do arquiteto de software.",
            "Atributos de qualidade (não funcionais): desempenho, escalabilidade, segurança, usabilidade, manutenibilidade, etc.",
            "Restrições e tradeoffs na arquitetura.",
            "Visões arquiteturais (4+1 View Model de Kruchten, C4 Model).",
            "Conceitos de alto nível como componentes, conectores e configuração."
          ],
          "obras": [
            "Software Architecture in Practice (3rd Edition) - Len Bass, Paul Clements, Rick Kazman",
            "Fundamentals of Software Architecture - Mark Richards, Neal Ford"
          ]
        },
        "prograssao": {
          "praticar": [
            "Explorar novas tecnologias e arquiteturas.",
            "Participar de conferências e workshops sobre arquitetura.",
            "Contribuir para projetos de código aberto.",
            "Mentorear outros arquitetos de software.",
            "Liderar iniciativas de evolução da arquitetura em projetos.",
            "Ler artigos de pesquisa e acompanhar as tendências do mercado."
          ]
        },
        "proximo modulo": "Tópicos Avançados e Evolução da Arquitetura",
        // ... (todos os outros módulos)
      };
    },
    
    processApiResponse(data) {
      return { ...data, query: this.query };
    },
    
    retryFetch() {
      this.error = null;
      this.fetchLearningPath();
    },
    
    handleNewSearch() {
      storage.clearStorage();
      this.learningPathData = null;
      this.query = '';
      this.error = null;
    }
  }
}
</script>

<style scoped>
.home-view {
  @apply max-w-6xl mx-auto;
}

.hero-section {
  @apply flex flex-col lg:flex-row items-center gap-10 py-12 mb-16;
}

.hero-content {
  @apply flex-1;
}

.hero-text {
  @apply mb-10;
}

.hero-title {
  @apply text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent;
  background-image: linear-gradient(to right, #10B981, #34D399);
  line-height: 1.2;
}

.hero-subtitle {
  @apply text-xl text-gray-300 max-w-2xl;
}

.search-container {
  @apply flex flex-col sm:flex-row gap-3 max-w-2xl;
}

.search-input {
  @apply flex-1 px-5 py-4 bg-slate-800 border border-slate-700 rounded-xl text-white;
  @apply focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent;
  transition: all 0.3s ease;
}

.search-btn {
  @apply btn btn-primary px-6 py-4 text-slate-900 font-semibold;
}

.hero-graphic {
  @apply flex-1 flex justify-center items-center gap-4;
  min-height: 300px;
}

.graphic-element {
  @apply w-24 h-64 rounded-2xl bg-gradient-to-b from-emerald-700 to-emerald-900;
  transform: skewY(-10deg);
  box-shadow: 0 10px 25px rgba(6, 78, 59, 0.5);
  
  &:nth-child(2) {
    height: 80%;
    transform: skewY(5deg);
    background: linear-gradient(to bottom, #0d9488, #115e59);
  }
  
  &:nth-child(3) {
    height: 60%;
    transform: skewY(-5deg);
    background: linear-gradient(to bottom, #047857, #064e3b);
  }
}

.loading-state, .error-state, .empty-state {
  @apply flex flex-col items-center justify-center py-20;
}

.loader {
  @apply w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full mb-6;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.icon-xl {
  @apply w-16 h-16 text-emerald-500 mb-6;
}

.error-state h3 {
  @apply text-2xl font-bold mb-2;
}

.error-state p {
  @apply text-gray-400 mb-6;
}

.empty-content {
  @apply text-center max-w-md;
}

.empty-title {
  @apply text-2xl font-bold mb-2;
}

.empty-description {
  @apply text-gray-400 mb-8;
}

.featured-topics {
  @apply flex flex-wrap justify-center gap-3;
}

.topic-tag {
  @apply px-4 py-2 bg-emerald-900/50 text-emerald-300 rounded-full text-sm;
}

@media (max-width: 1024px) {
  .hero-section {
    @apply flex-col;
  }
  
  .hero-graphic {
    @apply w-full;
  }
}
</style>