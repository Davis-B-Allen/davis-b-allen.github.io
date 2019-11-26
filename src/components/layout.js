import React from "react"
import Header from "./header"
import styles from "./layout.module.scss"
export default ({ headerPath, children }) => (
  <>
    <Header headerPath={headerPath} />
    <div className={styles.mainContainer}>
      {children}
    </div>
  </>
)
