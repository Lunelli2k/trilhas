import axios from 'axios';

// Crie uma instância do axios com configurações padrão
const apiClient = axios.create({
  baseURL: 'api/sendContent', // Usando o proxy configurado no vite.config.js
  withCredentials: false,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 10000
});

export default {
  async getLearningPath(query) {
    try {
      const response = await apiClient.post('/sendContent', {
        theme: query
      });
      
      return response.data;
    } catch (error) {
      console.error('API Error:', error);
      
      // Tratamento detalhado de erros
      let errorMessage = 'Erro desconhecido';
      if (error.response) {
        errorMessage = `Servidor respondeu com erro: ${error.response.status}`;
      } else if (error.request) {
        errorMessage = 'Sem resposta do servidor';
      } else {
        errorMessage = error.message;
      }
      
      throw new Error(errorMessage);
    }
  }
};