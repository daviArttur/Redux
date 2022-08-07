import "@testing-library/jest-dom"

// Api function
import getPhotos from "./getPhotos";

type dogsType = {
  id: number
  author: string,
  acessos: string,
  src: string
}

test('should return data from dogs', async () => {
  const dataDogs: dogsType[] = await getPhotos(1)

  dataDogs.forEach(({ id, author, acessos, src }) => {
    expect(id).toBeTruthy()
    expect(author).toBeTruthy()
    expect(acessos).toBeTruthy()
    expect(src).toBeTruthy()
  })
})