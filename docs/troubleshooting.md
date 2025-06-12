# ❓ FAQ e Solução de Problemas - Tototion

Respostas para as dúvidas mais comuns e soluções para problemas que você pode encontrar ao usar o Tototion.

## 📋 Índice

- [🚀 Problemas de Instalação](#-problemas-de-instalação)
- [💾 Problemas com Documentos](#-problemas-com-documentos)
- [⚡ Problemas de Performance](#-problemas-de-performance)
- [🎨 Problemas de Interface](#-problemas-de-interface)
- [🔧 Problemas Técnicos](#-problemas-técnicos)
- [💽 Backup e Recuperação](#-backup-e-recuperação)
- [❓ Perguntas Frequentes](#-perguntas-frequentes)
- [🆘 Suporte Técnico](#-suporte-técnico)

## 🚀 Problemas de Instalação

### O aplicativo não inicia após a instalação

**Sintomas:**
- Clico no ícone mas nada acontece
- Aplicativo fecha imediatamente
- Erro de "aplicativo não pode ser executado"

**Soluções:**

1. **Verifique os requisitos do sistema:**
   - Windows 10 ou superior
   - macOS 10.15 ou superior
   - Linux com suporte a Electron

2. **Execute como administrador (Windows):**
   - Clique com botão direito no ícone
   - Selecione "Executar como administrador"

3. **Verifique permissões (macOS):**
   - Vá em Preferências do Sistema > Segurança e Privacidade
   - Permita aplicativos de desenvolvedores identificados

4. **Reinstale o aplicativo:**
   - Desinstale completamente o Tototion
   - Baixe novamente do site oficial
   - Instale em local diferente

### Erro "Aplicativo danificado" (macOS)

**Solução:**
```bash
# Abra o Terminal e execute:
sudo xattr -rd com.apple.quarantine /Applications/Tototion.app
```

### Antivírus bloqueia a instalação (Windows)

**Soluções:**
1. Adicione exceção no antivírus para a pasta do Tototion
2. Desative temporariamente o antivírus durante a instalação
3. Baixe de fonte confiável (site oficial)

## 💾 Problemas com Documentos

### Meus documentos desapareceram

**Possíveis causas:**
- Mudança de usuário no sistema
- Reinstalação do aplicativo
- Corrupção de dados

**Soluções:**

1. **Verifique a pasta de dados:**
   - **Windows**: `%APPDATA%/tototion/`
   - **macOS**: `~/Library/Application Support/tototion/`
   - **Linux**: `~/.config/tototion/`

2. **Procure por backups automáticos:**
   - Verifique se há arquivos `.bak` na pasta de dados
   - Restaure o backup mais recente

3. **Verifique outros usuários:**
   - Se você mudou de usuário, os dados podem estar em outro perfil
   - Copie os dados do usuário anterior

### Documento não salva automaticamente

**Sintomas:**
- Alterações são perdidas ao fechar o aplicativo
- Documento volta ao estado anterior

**Soluções:**

1. **Verifique permissões de escrita:**
   - Certifique-se que o aplicativo tem permissão para escrever na pasta de dados
   - Execute como administrador se necessário

2. **Espaço em disco:**
   - Verifique se há espaço suficiente no disco
   - Libere espaço se necessário

3. **Antivírus interferindo:**
   - Adicione exceção para a pasta de dados do Tototion
   - Desative proteção em tempo real temporariamente

### Documento corrompido ou não abre

**Sintomas:**
- Documento aparece na lista mas não carrega
- Conteúdo aparece como caracteres estranhos
- Erro ao tentar abrir

**Soluções:**

1. **Restaurar de backup:**
   - Procure por arquivos `.bak` na pasta de dados
   - Substitua o arquivo corrompido pelo backup

2. **Verificar integridade dos dados:**
   - Abra o arquivo de dados em editor de texto
   - Verifique se o JSON está bem formado

3. **Recriar documento:**
   - Se o backup não funcionar, recrie o documento
   - Use qualquer backup manual que você tenha

## ⚡ Problemas de Performance

### Aplicativo está lento

**Sintomas:**
- Demora para abrir documentos
- Digitação com atraso
- Interface travando

**Soluções:**

1. **Feche outros aplicativos:**
   - Libere memória RAM fechando programas desnecessários
   - Verifique se há processos consumindo muitos recursos

2. **Reinicie o aplicativo:**
   - Feche completamente o Tototion
   - Abra novamente

3. **Reinicie o computador:**
   - Limpa a memória e processos em segundo plano

4. **Verifique recursos do sistema:**
   - **RAM mínima**: 4GB (recomendado 8GB)
   - **Espaço em disco**: Pelo menos 1GB livre

### Muitos documentos deixam o app lento

**Soluções:**

1. **Organize documentos:**
   - Exclua documentos desnecessários
   - Faça backup de documentos antigos

2. **Limite de documentos:**
   - Mantenha no máximo 100-200 documentos ativos
   - Archive documentos antigos

3. **Otimize conteúdo:**
   - Evite documentos extremamente longos
   - Divida documentos grandes em partes menores

### Alto uso de CPU

**Soluções:**

1. **Verifique extensões do sistema:**
   - Desative extensões desnecessárias
   - Atualize drivers gráficos

2. **Modo de economia de energia:**
   - Ative modo de economia de energia no laptop
   - Reduza qualidade gráfica se possível

## 🎨 Problemas de Interface

### Texto muito pequeno ou muito grande

**Soluções:**

1. **Zoom do sistema:**
   - **Windows**: Configurações > Sistema > Tela > Escala
   - **macOS**: Preferências > Telas > Resolução
   - **Linux**: Configurações de tela

2. **Zoom do aplicativo:**
   - Use **Ctrl + +** para aumentar
   - Use **Ctrl + -** para diminuir
   - Use **Ctrl + 0** para resetar

### Interface cortada ou elementos fora da tela

**Soluções:**

1. **Redimensione a janela:**
   - Arraste as bordas da janela
   - Use o botão maximizar

2. **Resolução mínima:**
   - Certifique-se que a resolução é pelo menos 1024x768
   - Ajuste a resolução se necessário

3. **Escala do sistema:**
   - Reduza a escala do sistema se estiver muito alta
   - Recomendado: 100% a 125%

### Tema escuro muito escuro

**Soluções:**

1. **Ajuste brilho do monitor:**
   - Aumente o brilho da tela
   - Ajuste contraste se necessário

2. **Configurações de acessibilidade:**
   - **Windows**: Configurações > Facilidade de Acesso > Alto Contraste
   - **macOS**: Preferências > Acessibilidade > Tela

## 🔧 Problemas Técnicos

### Atalhos de teclado não funcionam

**Soluções:**

1. **Verifique conflitos:**
   - Outros aplicativos podem estar usando os mesmos atalhos
   - Feche aplicativos que possam interferir

2. **Layout do teclado:**
   - Certifique-se que está usando layout correto (ABNT2 para português)
   - Teste com teclado diferente

3. **Reinicie o aplicativo:**
   - Feche e abra o Tototion novamente

### Busca não encontra documentos

**Soluções:**

1. **Verifique a digitação:**
   - Certifique-se que não há erros de digitação
   - Tente termos mais simples

2. **Reindexe os documentos:**
   - Feche e abra o aplicativo
   - Aguarde alguns segundos para reindexação

3. **Caracteres especiais:**
   - Evite acentos na busca inicialmente
   - Teste com palavras sem acentuação

### Formatação não aparece corretamente

**Soluções:**

1. **Atualize a visualização:**
   - Clique fora do texto e volte
   - Pressione F5 para atualizar

2. **Verifique seleção:**
   - Certifique-se que o texto está selecionado
   - Tente aplicar formatação novamente

## 💽 Backup e Recuperação

### Como fazer backup dos documentos

**Método Manual:**

1. **Localize a pasta de dados:**
   - **Windows**: `%APPDATA%/tototion/`
   - **macOS**: `~/Library/Application Support/tototion/`
   - **Linux**: `~/.config/tototion/`

2. **Copie toda a pasta:**
   - Faça uma cópia da pasta inteira
   - Salve em local seguro (nuvem, HD externo)

3. **Automatize com script:**
   ```bash
   # Windows (PowerShell)
   Copy-Item "$env:APPDATA\tototion" "C:\Backup\tototion-$(Get-Date -Format 'yyyy-MM-dd')" -Recurse
   
   # macOS/Linux
   cp -r "~/Library/Application Support/tototion" "~/Backup/tototion-$(date +%Y-%m-%d)"
   ```

**Backup Automático:**

1. **Use serviços de nuvem:**
   - Configure Google Drive, Dropbox ou OneDrive
   - Sincronize a pasta de dados

2. **Backup agendado:**
   - Configure backup automático do sistema
   - Inclua a pasta do Tototion

### Como restaurar backup

1. **Feche o Tototion** completamente
2. **Substitua a pasta de dados** pelo backup
3. **Abra o aplicativo** novamente
4. **Verifique se os documentos** foram restaurados

### Recuperar documentos excluídos

**Opções disponíveis:**

1. **Lixeira do sistema:**
   - Verifique se os arquivos estão na lixeira
   - Restaure se encontrados

2. **Backup automático:**
   - Procure por arquivos `.bak` na pasta de dados
   - Renomeie para `.json` e teste

3. **Versões anteriores (Windows):**
   - Clique com botão direito na pasta
   - Selecione "Restaurar versões anteriores"

4. **Time Machine (macOS):**
   - Use Time Machine para restaurar versão anterior

## ❓ Perguntas Frequentes

### Posso usar o Tototion offline?

**Resposta:** Sim! O Tototion funciona completamente offline. Todos os seus documentos são salvos localmente no seu computador.

### Quantos documentos posso criar?

**Resposta:** Não há limite técnico, mas recomendamos manter até 200 documentos para melhor performance.

### Posso exportar meus documentos?

**Resposta:** Atualmente, os documentos são salvos em formato JSON. Você pode copiar o conteúdo e colar em outros editores.

### O Tototion sincroniza entre dispositivos?

**Resposta:** Não nativamente. Você pode usar serviços de nuvem para sincronizar a pasta de dados entre computadores.

### Posso mudar o tema para claro?

**Resposta:** Atualmente, apenas o tema escuro está disponível. Temas adicionais podem ser adicionados em versões futuras.

### Como atualizar o aplicativo?

**Resposta:** 
1. Baixe a versão mais recente do site oficial
2. Desinstale a versão antiga
3. Instale a nova versão
4. Seus documentos serão preservados

### Posso usar em múltiplos computadores?

**Resposta:** Sim! Instale em cada computador e use backup/restauração para sincronizar documentos.

### O aplicativo coleta meus dados?

**Resposta:** Não! Todos os dados ficam localmente no seu computador. Nenhuma informação é enviada para servidores externos.

## 🆘 Suporte Técnico

### Antes de Reportar um Problema

1. **Tente as soluções acima**
2. **Reinicie o aplicativo**
3. **Verifique se há atualizações**
4. **Teste em modo seguro** (sem outros aplicativos)

### Como Reportar um Bug

1. **Acesse**: [GitHub Issues](https://github.com/AntonioMesquit/tototion/issues)

2. **Inclua as seguintes informações:**
   - Sistema operacional e versão
   - Versão do Tototion
   - Passos para reproduzir o problema
   - Screenshots (se aplicável)
   - Mensagens de erro

3. **Exemplo de relatório:**
   ```
   **Sistema:** Windows 11 22H2
   **Versão do Tototion:** 1.0.0
   **Problema:** Aplicativo trava ao criar nova lista
   
   **Passos para reproduzir:**
   1. Abrir documento existente
   2. Pressionar Ctrl+Shift+8
   3. Aplicativo trava
   
   **Erro:** [Cole aqui qualquer mensagem de erro]
   ```

### Logs de Erro

Para problemas técnicos, os logs podem ajudar:

**Windows:**
```
%APPDATA%/tototion/logs/
```

**macOS:**
```
~/Library/Logs/tototion/
```

**Linux:**
```
~/.config/tototion/logs/
```

### Comunidade

- **GitHub Discussions**: Para dúvidas gerais
- **Issues**: Para bugs e problemas técnicos
- **Email**: [Contato do desenvolvedor]

### Tempo de Resposta

- **Bugs críticos**: 24-48 horas
- **Problemas gerais**: 3-5 dias úteis
- **Sugestões**: Conforme disponibilidade

---

## 🎯 Recursos Adicionais

- 📖 **[Guia do Usuário](user-guide.md)** - Aprenda a usar o Tototion
- ✏️ **[Guia do Editor](editor-guide.md)** - Domine as ferramentas de formatação
- ⌨️ **[Atalhos de Teclado](keyboard-shortcuts.md)** - Referência completa

**Não encontrou a solução? [Abra uma issue](https://github.com/AntonioMesquit/tototion/issues) e teremos prazer em ajudar!** 🚀

---

<div align="center">
  <sub>Esta documentação é atualizada regularmente. <a href="https://github.com/AntonioMesquit/tototion">Verifique a versão mais recente</a>.</sub>
</div>