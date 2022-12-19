import styles from './Navbar.module.css'
export function Navbar () {
  return (
    <nav className={styles.navbar}>
      <div className={`${styles.content} container`}>
        <h1>Where in the world?</h1>
        <button className='btn-dark-mode btn-toggle'>
          <i className='fa-regular fa-moon' />
          Dark Mode
        </button>
      </div>
    </nav>
  )
}
