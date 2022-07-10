import React from 'react'
import { useSelector } from 'react-redux'
import { RootStateType } from '../../store/configureStore'

// Api
import getPhotos from '../../api/getPhotos'

// Components
import Loading from '../Loading'

// Styles
import styles from './Feed.module.css'

interface photoObjectValuesInterface {
  title: string,
  author: string
  src: string
  id: string
  acessos: string
}

function Feed() {

  const [photos, setPhotos] = React.useState<photoObjectValuesInterface[] | null>(null);
  const [countPagePhotos, setCountPagePhotos] = React.useState<number>(1)
  const state = useSelector((state: RootStateType) => state)

  function handleClick() {
    setCountPagePhotos(countPagePhotos + 1)
  }

  React.useEffect(() => {

    const awaitPhotos = async () => {
      const newPhotos = await getPhotos(countPagePhotos)

      if (!photos) {
        setPhotos([...newPhotos])
         
      } else {
        setPhotos([...photos, ...newPhotos])
      }
    }
    awaitPhotos()
  }, [countPagePhotos])


  if (state.loading.loading) return <Loading/>

  return (
    <section className={styles.container} style={{display: 'flex', flexWrap: 'wrap'}}>
     {photos && photos.map((photo) => {
      return (
        <div key={photo.id} className={styles.photoContainer}>
          <img className={styles.img} src={photo.src} alt={`Foto do ${photo.title}`}/>
          <div className={styles.bio}>
            <strong>{photo.title}</strong>
            <p>{photo.acessos}</p>
          </div>
        </div>
      )
    })}

    <button className={styles.buttonFetch} onClick={handleClick}>+</button>
    </section>
  )
  
}

export default Feed