# ✏️ Guia Completo do Editor - Tototion

Domine todas as ferramentas de formatação e edição do Tototion para criar documentos profissionais e bem estruturados.

## 📋 Índice

- [🎯 Visão Geral do Editor](#-visão-geral-do-editor)
- [🔤 Estrutura e Títulos](#-estrutura-e-títulos)
- [✨ Formatação de Texto](#-formatação-de-texto)
- [📝 Listas e Organização](#-listas-e-organização)
- [💬 Citações e Destaques](#-citações-e-destaques)
- [⚡ Comandos Rápidos](#-comandos-rápidos)
- [⌨️ Atalhos de Teclado](#️-atalhos-de-teclado)
- [🎨 Dicas de Estilo](#-dicas-de-estilo)
- [🚀 Fluxo de Trabalho Avançado](#-fluxo-de-trabalho-avançado)

## 🎯 Visão Geral do Editor

O editor do Tototion é baseado no **TipTap**, uma biblioteca moderna que oferece:

- ✅ **Formatação em tempo real** - Veja as mudanças instantaneamente
- ✅ **Interface intuitiva** - Barra de ferramentas sempre visível
- ✅ **Comandos rápidos** - Digite "/" para acessar funções
- ✅ **Atalhos de teclado** - Produtividade máxima
- ✅ **Salvamento automático** - Nunca perca seu trabalho

### Anatomia da Barra de Ferramentas

```
┌─────────────────────────────────────────────────────────────────┐
│ H1 H2 H3 P │ B I U S </> 🎨 │ • 1. " │                        │
└─────────────────────────────────────────────────────────────────┘
   Estrutura    Formatação      Listas
```

## 🔤 Estrutura e Títulos

### Hierarquia de Títulos

Use títulos para organizar seu conteúdo de forma clara e navegável:

#### 📌 Título 1 (H1)
- **Quando usar**: Título principal do documento
- **Atalho**: Clique no botão **H1** ou digite `/h1`
- **Aparência**: Texto grande, negrito, com linha inferior
- **Exemplo**:

# Este é um Título Principal

#### 📌 Título 2 (H2)
- **Quando usar**: Seções principais do documento
- **Atalho**: Clique no botão **H2** ou digite `/h2`
- **Aparência**: Texto médio-grande, negrito
- **Exemplo**:

## Esta é uma Seção Principal

#### 📌 Título 3 (H3)
- **Quando usar**: Subsecções dentro de uma seção
- **Atalho**: Clique no botão **H3** ou digite `/h3`
- **Aparência**: Texto médio, negrito
- **Exemplo**:

### Esta é uma Subsecção

#### 📌 Parágrafo Normal
- **Quando usar**: Texto corrido, conteúdo principal
- **Atalho**: Clique no botão **P** ou pressione Enter duas vezes
- **Aparência**: Texto normal, sem formatação especial

### Boas Práticas para Títulos

1. **Use apenas um H1** por documento (título principal)
2. **Mantenha hierarquia lógica**: H1 → H2 → H3
3. **Títulos descritivos**: Deixe claro o que cada seção contém
4. **Seja consistente**: Use o mesmo padrão em todo o documento

**Exemplo de estrutura bem organizada:**

```
# Relatório Mensal de Vendas          ← H1 (título principal)

## Resumo Executivo                   ← H2 (seção principal)
### Principais Resultados            ← H3 (subsecção)
### Desafios Encontrados             ← H3 (subsecção)

## Análise Detalhada                 ← H2 (seção principal)
### Vendas por Região                ← H3 (subsecção)
### Comparação com Mês Anterior      ← H3 (subsecção)
```

## ✨ Formatação de Texto

### Formatações Básicas

#### **Negrito**
- **Quando usar**: Destacar palavras ou frases importantes
- **Como aplicar**: 
  - Selecione o texto e clique no botão **B**
  - Ou use o atalho **Ctrl+B**
- **Exemplo**: Este texto está em **negrito**

#### *Itálico*
- **Quando usar**: Ênfase sutil, termos técnicos, palavras estrangeiras
- **Como aplicar**: 
  - Selecione o texto e clique no botão **I**
  - Ou use o atalho **Ctrl+I**
- **Exemplo**: Este texto está em *itálico*

#### <u>Sublinhado</u>
- **Quando usar**: Destacar informações importantes (use com moderação)
- **Como aplicar**: 
  - Selecione o texto e clique no botão **U**
  - Ou use o atalho **Ctrl+U**
- **Exemplo**: Este texto está <u>sublinhado</u>

#### ~~Riscado~~
- **Quando usar**: Mostrar texto removido ou cancelado
- **Como aplicar**: Selecione o texto e clique no botão **S**
- **Exemplo**: Este texto está ~~riscado~~

#### `Código`
- **Quando usar**: Comandos, código, nomes de arquivos
- **Como aplicar**: Selecione o texto e clique no botão **</>**
- **Exemplo**: Use o comando `npm install` para instalar

#### 🎨 Destaque
- **Quando usar**: Destacar informações muito importantes
- **Como aplicar**: Selecione o texto e clique no botão **🎨**
- **Aparência**: Texto com fundo colorido

### Combinando Formatações

Você pode combinar diferentes formatações:

- **_Negrito e itálico_**
- **<u>Negrito e sublinhado</u>**
- ***~~Itálico e riscado~~***
- **`Negrito e código`**

### Dicas de Formatação

1. **Use negrito com moderação** - Muito negrito perde o impacto
2. **Itálico para ênfase sutil** - Melhor que sublinhado na maioria dos casos
3. **Código para termos técnicos** - Facilita a identificação
4. **Destaque apenas para informações críticas** - Use raramente

## 📝 Listas e Organização

### Lista com Marcadores

Ideal para itens sem ordem específica:

- **Como criar**: Clique no botão **•** ou digite `/lista`
- **Como usar**: Pressione Enter para novo item, Tab para indentar
- **Exemplo**:

• Primeiro item da lista
• Segundo item da lista
• Terceiro item da lista
  • Item indentado (sub-item)
  • Outro sub-item

### Lista Numerada

Ideal para passos, instruções ou itens com ordem:

- **Como criar**: Clique no botão **1.** ou digite `/numero`
- **Como usar**: Pressione Enter para novo item, Tab para indentar
- **Exemplo**:

1. Primeiro passo
2. Segundo passo
3. Terceiro passo
   1. Sub-passo A
   2. Sub-passo B

### Listas Aninhadas

Você pode criar listas dentro de listas:

1. **Planejamento**
   • Definir objetivos
   • Estabelecer cronograma
   • Alocar recursos

2. **Execução**
   • Implementar plano
   • Monitorar progresso
   • Fazer ajustes

3. **Avaliação**
   • Medir resultados
   • Identificar melhorias
   • Documentar aprendizados

### Dicas para Listas Eficazes

1. **Seja consistente** no estilo de cada item
2. **Use listas numeradas** para sequências e processos
3. **Use listas com marcadores** para características e benefícios
4. **Mantenha itens paralelos** em estrutura e tamanho
5. **Não exagere na indentação** - máximo 2-3 níveis

## 💬 Citações e Destaques

### Citações (Blockquotes)

Use citações para destacar informações importantes ou citar outras fontes:

- **Como criar**: Clique no botão **"** ou digite `/citacao`
- **Quando usar**: 
  - Citações de outras pessoas
  - Informações importantes
  - Resumos de seções
  - Avisos e alertas

**Exemplo**:

> Esta é uma citação importante que merece destaque especial no documento. Use citações para informações que precisam se destacar do texto normal.

### Tipos de Citações

**Citação Simples:**
> Informação importante que merece destaque.

**Citação com Atribuição:**
> "A simplicidade é a sofisticação suprema."
> — Leonardo da Vinci

**Citação para Avisos:**
> ⚠️ **Atenção**: Esta operação não pode ser desfeita. Certifique-se de fazer backup antes de prosseguir.

**Citação para Dicas:**
> 💡 **Dica**: Use atalhos de teclado para acelerar seu fluxo de trabalho e aumentar a produtividade.

### Boas Práticas para Citações

1. **Use para informações realmente importantes** - Não abuse das citações
2. **Seja claro sobre a fonte** quando citar outras pessoas
3. **Use emojis** para categorizar diferentes tipos de citações
4. **Mantenha citações concisas** - Textos longos perdem impacto

## ⚡ Comandos Rápidos

O sistema de comandos rápidos do Tototion permite acesso instantâneo a todas as funcionalidades:

### Como Usar Comandos Rápidos

1. **Digite "/" em qualquer lugar** do texto
2. **Veja o menu de comandos** aparecer
3. **Digite o comando** ou use as setas para navegar
4. **Pressione Enter** para aplicar

### Lista Completa de Comandos

| Comando | Função | Resultado |
|---------|--------|-----------|
| `/h1` | Título 1 | # Título Principal |
| `/h2` | Título 2 | ## Seção |
| `/h3` | Título 3 | ### Subsecção |
| `/p` | Parágrafo | Texto normal |
| `/lista` | Lista com marcadores | • Item |
| `/numero` | Lista numerada | 1. Item |
| `/citacao` | Citação | > Texto citado |
| `/codigo` | Bloco de código | ```código``` |

### Dicas para Comandos Rápidos

- **Digite apenas as primeiras letras** - `/h` mostra todos os títulos
- **Use Tab** para autocompletar comandos
- **Esc** cancela o menu de comandos
- **Comandos funcionam no meio do texto** - não precisa estar no início da linha

## ⌨️ Atalhos de Teclado

### Atalhos de Formatação

| Atalho | Função | Descrição |
|--------|--------|-----------|
| **Ctrl+B** | Negrito | Aplica/remove negrito |
| **Ctrl+I** | Itálico | Aplica/remove itálico |
| **Ctrl+U** | Sublinhado | Aplica/remove sublinhado |
| **Ctrl+Shift+X** | Riscado | Aplica/remove riscado |
| **Ctrl+E** | Código | Formata como código |

### Atalhos de Estrutura

| Atalho | Função | Descrição |
|--------|--------|-----------|
| **Ctrl+1** | Título H1 | Converte para título 1 |
| **Ctrl+2** | Título H2 | Converte para título 2 |
| **Ctrl+3** | Título H3 | Converte para título 3 |
| **Ctrl+0** | Parágrafo | Converte para texto normal |

### Atalhos de Lista

| Atalho | Função | Descrição |
|--------|--------|-----------|
| **Ctrl+Shift+8** | Lista marcadores | Cria/converte para lista |
| **Ctrl+Shift+7** | Lista numerada | Cria/converte para lista numerada |
| **Tab** | Indentar | Aumenta nível da lista |
| **Shift+Tab** | Desindentar | Diminui nível da lista |

### Atalhos de Navegação

| Atalho | Função | Descrição |
|--------|--------|-----------|
| **Ctrl+F** | Buscar | Busca no documento atual |
| **Ctrl+A** | Selecionar tudo | Seleciona todo o texto |
| **Ctrl+Z** | Desfazer | Desfaz última ação |
| **Ctrl+Y** | Refazer | Refaz ação desfeita |

## 🎨 Dicas de Estilo

### Criando Documentos Profissionais

1. **Comece com um título claro** (H1)
2. **Use hierarquia de títulos** para organizar
3. **Quebre textos longos** em parágrafos menores
4. **Use listas** para informações em tópicos
5. **Destaque informações importantes** com formatação

### Exemplo de Documento Bem Estruturado

```markdown
# Proposta de Projeto - Sistema de Vendas

## Resumo Executivo

Este documento apresenta a proposta para desenvolvimento de um **sistema de vendas** 
integrado que irá revolucionar nosso processo comercial.

### Objetivos Principais

1. **Automatizar processo de vendas**
2. **Integrar com sistemas existentes**
3. **Melhorar experiência do cliente**

## Escopo do Projeto

### Funcionalidades Incluídas

• Dashboard de vendas em tempo real
• Gestão de leads e oportunidades
• Relatórios automatizados
• Integração com CRM existente

### Tecnologias Utilizadas

O sistema será desenvolvido utilizando:

- **Frontend**: React + TypeScript
- **Backend**: Node.js + Express
- **Banco de Dados**: PostgreSQL
- **Cloud**: AWS

> 💡 **Importante**: Todas as tecnologias escolhidas são modernas e amplamente suportadas no mercado.

## Cronograma

1. **Fase 1 - Planejamento** (2 semanas)
2. **Fase 2 - Desenvolvimento** (8 semanas)
3. **Fase 3 - Testes** (2 semanas)
4. **Fase 4 - Deploy** (1 semana)

## Investimento

> 📊 **Orçamento Total**: R$ 150.000,00
```

### Diretrizes de Estilo

**Para Títulos:**
- Use títulos descritivos e específicos
- Evite títulos muito longos
- Mantenha consistência no estilo

**Para Parágrafos:**
- Máximo 3-4 frases por parágrafo
- Uma ideia principal por parágrafo
- Use conectivos para fluidez

**Para Listas:**
- Máximo 7 itens por lista
- Itens paralelos em estrutura
- Use sub-listas quando necessário

**Para Formatação:**
- **Negrito** para conceitos importantes
- *Itálico* para ênfase sutil
- `Código` para termos técnicos
- > Citações para informações críticas

## 🚀 Fluxo de Trabalho Avançado

### Técnica de Escrita Eficiente

1. **Escreva primeiro, formate depois**
   - Foque no conteúdo inicialmente
   - Adicione formatação na revisão

2. **Use a estrutura de títulos**
   - Crie o esqueleto com títulos
   - Preencha o conteúdo seção por seção

3. **Revise em etapas**
   - 1ª revisão: Conteúdo e estrutura
   - 2ª revisão: Formatação e estilo
   - 3ª revisão: Ortografia e gramática

### Modelos de Documento

**Relatório:**
```
# Título do Relatório
## Resumo Executivo
## Metodologia
## Resultados
### Resultado 1
### Resultado 2
## Conclusões
## Recomendações
```

**Proposta:**
```
# Proposta - [Nome do Projeto]
## Contexto
## Objetivos
## Escopo
### Incluído
### Não Incluído
## Cronograma
## Investimento
## Próximos Passos
```

**Manual:**
```
# Manual do [Sistema/Processo]
## Introdução
## Pré-requisitos
## Passo a Passo
### Passo 1
### Passo 2
## Solução de Problemas
## FAQ
```

### Dicas de Produtividade

1. **Use comandos rápidos** (/) para formatação instantânea
2. **Aprenda os atalhos** mais usados (Ctrl+B, Ctrl+I)
3. **Crie templates** para documentos recorrentes
4. **Use a busca** para encontrar informações rapidamente
5. **Revise regularmente** documentos importantes

---

## 🎯 Próximos Passos

Agora que você domina o editor, explore:

- 📖 **[Guia do Usuário](user-guide.md)** - Funcionalidades gerais do aplicativo
- ⌨️ **[Atalhos de Teclado](keyboard-shortcuts.md)** - Referência completa
- ❓ **[FAQ](troubleshooting.md)** - Soluções para problemas comuns

**Continue praticando e descobrindo novas formas de usar o Tototion!** ✨

---

<div align="center">
  <sub>Dúvidas sobre o editor? <a href="troubleshooting.md">Consulte nosso FAQ</a> ou <a href="https://github.com/AntonioMesquit/tototion/issues">reporte um problema</a>.</sub>
</div>