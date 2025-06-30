<template>
  <div class="app-container">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

:root {
  --primary: #10B981;
  --primary-dark: #059669;
  --primary-light: #34D399;
  --background: #0F172A;
  --surface: #1E293B;
  --surface-light: #334155;
  --text-primary: #F1F5F9;
  --text-secondary: #94A3B8;
  --border: #334155;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background-color: var(--background);
  color: var(--text-primary);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.6;
}

.app-container {
  min-height: 100vh;
  padding: 2rem;
  max-width: 1600px;
  margin: 0 auto;
}

/* Estilos globais para botões */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  font-weight: 500;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  font-size: 1rem;
}

.btn-primary {
  background: var(--primary);
  color: #0F172A;
}

.btn-primary:hover {
  background: var(--primary-light);
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
}

.btn-secondary {
  background: var(--surface-light);
  color: var(--text-primary);
}

.btn-secondary:hover {
  background: #3c4b66;
}

/* Estilos para cards */
.card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 1rem;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

/* Estilos para ícones */
.icon {
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
}

.text-primary {
  color: var(--primary);
}

.text-secondary {
  color: var(--text-secondary);
}
</style>