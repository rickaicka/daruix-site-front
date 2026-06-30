Daruix Site Front
Front-end do site institucional da Daruix Engenharia. O projeto é responsável pela apresentação pública da empresa, serviços, clientes, projetos e canais de contato.
Visão geral
Este repositório contém uma aplicação Angular para o site institucional. A aplicação consome APIs do backend do site Daruix e renderiza páginas públicas como serviços, empresa, clientes/projetos e contato.
Stack principal
Angular
TypeScript
SCSS
Angular Router
API REST
Instalação
```bash
npm install
```
Servidor de desenvolvimento
```bash
npm start
```
ou:
```bash
ng serve
```
A aplicação normalmente fica disponível em:
```txt
http://localhost:4200
```
Build
```bash
npm run build
```
Os artefatos de build são gerados na pasta `dist/`.
Testes
```bash
npm test
```
Estrutura esperada
```txt
src/
├─ app/
│  ├─ pages/          # Páginas públicas
│  ├─ core/           # Serviços, guards, configurações e integrações
│  └─ shared/         # Componentes compartilhados
├─ assets/            # Imagens, fontes e arquivos estáticos
└─ styles.scss        # Estilos globais
```
Integração com backend
O front consome os endpoints do backend institucional da Daruix. Exemplos de recursos esperados:
```txt
/api/servicos
/api/clientes
/api/projetos
/api/empresa
/api/contatos
```
Configure a URL da API conforme o ambiente local, homologação ou produção.
Deploy
O deploy pode ser feito em ambiente estático, como GitHub Pages, Nginx ou outro servidor web. Antes do deploy, gere o build de produção:
```bash
npm run build
```
Convenções
Usar componentes standalone sempre que possível.
Manter SCSS organizado por página/componente.
Evitar regras visuais duplicadas que já existam no Design System.
Usar assets otimizados para web.
Repositórios relacionados
`daruix-site-api`
`daruix-ds`
`daruix-hub-shell`
