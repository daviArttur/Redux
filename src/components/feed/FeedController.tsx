import React from 'react'
import Feed from './Feed'

// Styles
import styles from './FeedController.module.css'

const FeedController = () => {

  const [countPagePhotos, setCountPagePhotos] = React.useState<number[]>([1])

  function handleClick() {
    setCountPagePhotos([...countPagePhotos, countPagePhotos.length + 1])
  }

  return (
    <main className={styles.main} style={ { marginTop: "90px" }}>
      {countPagePhotos && countPagePhotos.map((index, key) => (
        <Feed index={index} key={key}/>
      ))}
      <button onClick={handleClick} className={styles.buttonFetch}>+</button>
    </main>
  )
}

export default FeedController