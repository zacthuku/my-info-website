import { useEffect, useState } from 'react'

function useGithubRepos(username) {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${username}/repos`)
        if (!res.ok) throw new Error('Failed to fetch GitHub repos')
        const data = await res.json()

        const filtered = data
          .filter(repo => !repo.fork && !repo.private)
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))

        setRepos(filtered)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [username])

  return { repos, loading, error }
}

export default useGithubRepos
