import styles from './Header.css'

function Header() {
  return (
    <>
      <div className={styles['grid-two-cols']}>
        <div>
          <h1 className={styles.connecting}>
            Connecting <br /> Believers <br /> Strengthening <br /> Faith
          </h1>
        </div>

        <div className={styles['header-img']}>
          <div className={styles.headerimg2}>
            <div className={styles['headerimg1-sub']}>
              <div className={styles['']}>
                <img src="img/dark guy.png" alt="" />
              </div>
              <div className={styles['']}>
                <img src="img/darkman.png" alt="" />
              </div>
            </div>
          </div>

          <div className={styles.headerimg2}>
            <div className={styles['headerimg2-sub']}>
              <div className={styles['']}>
                <img src="img/darkwoman.png" alt="" />
              </div>
              <div className={styles['']}>
                <img src="img/braidman.png" alt="" />
              </div>
            </div>
          </div>

          <div className={styles.headerimg2}>
            <div className={styles['headerimg3-sub']}>
              <div className={styles['']}>
                <img src="img/glassman.png" alt="" />
              </div>
              <div className={styles['']}>
                <img src="img/green.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
