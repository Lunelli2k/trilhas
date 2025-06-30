export default {
  saveLearningPath(data) {
    // Normaliza os dados antes de salvar
    const normalizedData = this.normalizeData(data);
    localStorage.setItem('learningPath', JSON.stringify(normalizedData));
    localStorage.setItem('lastQuery', normalizedData.query);
  },

  getLearningPath() {
    const data = localStorage.getItem('learningPath');
    if (!data) return null;
    
    const parsed = JSON.parse(data);
    return this.normalizeData(parsed);
  },

  getLastQuery() {
    return localStorage.getItem('lastQuery') || '';
  },

  clearStorage() {
    localStorage.removeItem('learningPath');
    localStorage.removeItem('lastQuery');
  },

  saveProgress(progress) {
    localStorage.setItem('progress', JSON.stringify(progress));
  },

  getProgress() {
    return JSON.parse(localStorage.getItem('progress') || '{}');
  },

  normalizeData(data) {
    // Adiciona query se não existir
    if (!data.query) {
      data.query = "Desenvolvimento de Jogos Metroidvania";
    }
    
    // Corrige o nome da propriedade de progressão
    if (data.prograssao && !data.progressao) {
      data.progressao = data.prograssao;
      delete data.prograssao;
    }
    
    // Normaliza as chaves dos módulos
    for (let i = 1; i <= 7; i++) {
      const oldKey = `modulo ${i.toString().padStart(2, '0')}`;
      const newKey = `modulo ${i}`;
      
      if (data[oldKey] && !data[newKey]) {
        data[newKey] = data[oldKey];
        delete data[oldKey];
      }
    }
    
    return data;
  }
};