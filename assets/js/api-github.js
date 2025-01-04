// URL da API do GitHub (usuário ou organização)
const GITHUB_API = 'https://api.github.com/users/SergioDevSousa/repos'; // Substitua {USERNAME}

// Seletores do DOM
const repoName = document.getElementById('repo-name');
const repoUrl = document.getElementById('repo-url');

// Evento para abrir o acordeão e buscar os dados
// triggerButton.addEventListener('click', async () => {
//     contentDiv.classList.toggle('open');

async function fetchGitHubRepos() {
  try {
    // Fazendo a requisição para a API
    const response = await fetch(GITHUB_API);
    if (!response.ok) throw new Error('Erro ao buscar os dados da API');
    // Convertendo a resposta para JSON
    const repos = await response.json();
    
    // Verificando se há repositórios disponíveis
    if (repos.length > 0) {
      // Pegando o primeiro repositório
      const Repo = repos[0];
      
      // Atualizando o DOM com os dados do repositório
      repoName.textContent = firstRepo.name; // Nome do repositório
      repoUrl.innerHTML = `<a href="${Repo.html_url}" target="_blank" rel="noopener noreferrer">${Repo.html_url}</a>`; // URL
    } else {
      // Mensagem se nenhum repositório for encontrado
      repoName.textContent = 'Nenhum repositório encontrado.';
      repoUrl.innerHTML = '';
    }
  
  } catch (error) {
    // Tratamento de erro
    repoName.textContent = 'Erro ao carregar os dados.';
    repoUrl.innerHTML = '';
    console.error('Erro:', error);
  }
}

// Chamar a função ao carregar a página
fetchGitHubRepos();
