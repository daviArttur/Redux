import React from 'react'

// Api
import getPhotos from '../../api/getPhotos'

// Styles
import styles from './Feed.module.css'
import stylesLoading from '../../styles/loadingPhotos.module.css'

interface photoObjectValuesInterface {
  title: string,
  author: string
  src: string
  id: string
  acessos: string
}

type Props = {
  index: number
}

function Feed({ index }: Props) {
  const [ loading, setLoading ] = React.useState<boolean>(false)
  const [ photos, setPhotos ] = React.useState<photoObjectValuesInterface[] | null>(null);

  React.useEffect(() => {
    const awaitPhotos = async () => {
      setLoading(true)
      const newPhotos = await getPhotos(index)
      setPhotos([...newPhotos])
      setLoading(false)
    }
    awaitPhotos()
  }, [index])


  if (loading) return (
  <div className={stylesLoading.load}>
    <hr/><hr/><hr/><hr/>
  </div>
  )

  return (
    <section className={styles.container} style={{display: 'flex', flexWrap: 'wrap'}}>
     {photos && photos.map((photo) => {
      return (
        <div key={photo.id} className={styles.photoContainer}>
          <img className={styles.img} src={photo.src} alt={`Foto do ${photo.title}`}/>
          <div className={styles.bio}>
            <strong data-testid="photoTitle">{photo.title}</strong>
            <p data-testid="photoViews">{photo.acessos}</p>
          </div>
        </div>
      )
    })}
    </section>
  )
  
}

export default Feed