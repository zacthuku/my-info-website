import useGithubRepos from '../hooks/useGithubRepos'



function Home() {
  const { repos, loading, error } = useGithubRepos('zacthuku') // Your GitHub username

  return (
    <div className="home">
      <h1 className="home-title">Projects</h1>

      {loading && <p>Loading projects...</p>}
      {error && <p>Error: {error}</p>}

      <div className="card-grid">
        {repos.slice(0, 6).map(repo => (
          <div className="card" key={repo.id}>
            <h2>{repo.name}</h2>
            <p>{repo.description || 'No description provided.'}</p>
            <a href={repo.html_url} className="read-more" target="_blank" rel="noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>

      <h1 className="home-title">Education</h1>
      <div className="card-grid">
        <div className="card">
          <h2>2019 - 2023</h2>
          <p className="tech">Mechanical Engineering</p>
          <p>Studied mechanics and design with AutoCAD at Kirinyaga University.</p>
        </div>
        <div className="card">
          <h2>2025 - Ongoing</h2>
          <p className="tech">Data Science</p>
          <p>Currently enrolled at ALX Africa, focusing on real-world data science skills through hands-on projects.</p>
        </div>
      </div>
    </div>
  )
}

export default Home
