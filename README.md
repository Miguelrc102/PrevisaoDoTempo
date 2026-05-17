# Previsão do Tempo - Brasília
##  Link do Projeto
O deploy da aplicação foi realizado e pode ser acessado em tempo real através do link abaixo:
 [Previsão do Tempo - Brasília/Gama](https://previsao-do-tempo-rose.vercel.app/)

##  O que foi implementado

- **Interface Responsiva:** Estrutura HTML5 e estilização CSS3 moderna com suporte nativo a modo escuro automatizado.
- **Integração Assíncrona:** Consumo de dados climáticos via `fetch` à API Open-Meteo para obter temperatura e umidade relativa do ar instantâneas.
- **Testes de Integração:** Implementação de testes automatizados com **Jest** para validar o contrato e a estabilidade da resposta da API externa.
- **Integração Contínua (CI):** Configuração de pipeline via **GitHub Actions** (`ci.yml`) rodando em ambiente isolado (Node.js 20) a cada push ou Pull Request, garantindo a execução dos testes.
- **Implantação Contínua (CD):** Deploy automatizado integrado à plataforma **Vercel**, atualizando o ambiente de produção a cada merge na branch principal.
