#  PetStyle - Otimização de Performance Web

##  Objetivo
Colocar em prática os conhecimentos adquiridos sobre **performance web**, identificando gargalos e aplicando melhorias em um projeto front-end existente.  
O foco foi medir, analisar e otimizar com base em métricas concretas, utilizando o **Chrome DevTools (aba Performance e Lighthouse)** como principal recurso.  
Além da medição, foram aplicadas técnicas de boas práticas de otimização trabalhadas em aula, garantindo não apenas a melhoria nos números, mas também uma experiência de usuário mais rápida e estável.

---

##  Requisitos Atendidos

### 1️ Escolha do Projeto
- Projeto pessoal desenvolvido durante o curso: **PetStyle** (loja fictícia de produtos para pets).  
- Página construída com **HTML + Tailwind CSS**.

### 2️ Análise Inicial com Lighthouse
- Foi gerado um relatório inicial na aba **Lighthouse** do Chrome DevTools.  
- Prints foram registrados antes e depois das otimizações.  
- **Gargalo identificado:**  
  - Valor de **CLS = 0.13**, indicando deslocamentos visuais durante o carregamento das imagens.

### 3️ Otimizações Obrigatórias
** Imagens**
- Adicionados atributos `width` e `height` em todas as imagens.
- Aplicado `loading="lazy"` para carregamento sob demanda.
- Adicionados tamanhos mínimos com Tailwind (`min-h-[200px]`) para evitar layout shift.

** HTML/CSS/JS**
- Código revisado e simplificado.
- Mantida a estrutura sem scripts bloqueando a renderização.

** Código e Imports**
- Mantido o Tailwind CSS enxuto.
- Adicionado `font-display=swap` nas fontes externas (Google Fonts) para evitar deslocamentos de layout durante o carregamento.

### 4️ Reanálise e Comparação
Após aplicar as melhorias, foi gerado um novo relatório **Lighthouse** para comparar os resultados obtidos.

---

##  Resultados das Métricas

| Métrica | Antes | Depois | Avaliação Final |
|----------|--------|--------|----------------|
| **Largest Contentful Paint (LCP)** | 0.19 s | 0.10 s | 🟢 Excelente |
| **Cumulative Layout Shift (CLS)** | 0.13 | 0.05 | 🟢 Corrigido |
| **Interaction to Next Paint (INP)** | 8 ms | — | 🟢 Ótimo |

 **Resumo:**
- O **CLS** foi reduzido de `0.13` para `0.05`, o que representa uma melhoria de **~61%**.  
- O site agora carrega rapidamente e sem saltos visuais perceptíveis.

---

##  Comparativo Visual

| Situação | Print |
|-----------|-------|
| **Antes da Otimização** | ![Antes](coloque-aqui-o-print-anterior.png) |
| **Depois da Otimização** | ![Depois](coloque-aqui-o-print-novo.png) |

---

##  Técnicas que Trouxeram Maior Impacto
- Definição de dimensões fixas (`width`, `height`) em imagens.  
- Uso do atributo `loading="lazy"`.  
- Reserva de espaço com `min-h-[200px]`.  
- Aplicação de `font-display: swap` nas fontes.  
- Organização do código e eliminação de possíveis gargalos de renderização.

---

##  Entrega (conforme solicitado)
- ✅ Código-fonte otimizado do projeto.  
- ✅ Relatórios do Lighthouse **antes e depois** (em imagens/PDF).  
- ✅ README.md documentando todo o processo.  

---

##  Conclusão
Após as otimizações, o projeto **PetStyle** apresentou melhora significativa nas métricas de performance e estabilidade visual, atingindo excelentes resultados em todas as áreas avaliadas.  

O trabalho cumpriu integralmente os requisitos da atividade, demonstrando o uso prático das técnicas de otimização de performance web com foco em **experiência do usuário** e **eficiência de carregamento**.

---

###  Desenvolvido por:
**Natan**  
Atividade prática — *Performance Web / Front-End Optimization*
