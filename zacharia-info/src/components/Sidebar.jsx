// src/components/Sidebar.jsx
function Sidebar() {
  return (
    <aside className="sidebar">
      <img src="/IMG_20230807_185534[6].jpg" alt="Zacharia Ndinguri" />
      <h2>Zacharia Ndinguri</h2>
      <p><strong>Data Scientist / Web Developer</strong></p>
      <p>📍 Based in Nairobi, Kenya</p>

      <div className="sidebar-section">
        <h3>Links</h3>
        <ul>
          <li><a href="https://www.linkedin.com/in/zacharia-ndinguri-a61211310/" target="_blank" rel="noreferrer">LinkedIn</a></li>
          <li><a href="https://github.com/zacthuku">Github</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>

      

      <div className="sidebar-section">
        <h3>Skills</h3>
        <ul className="skills">
          <li>Python</li>
          <li>SQL</li>
          <li>Flask</li>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>React</li>
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
