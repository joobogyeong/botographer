import PhotoGallery from './components/PhotoGallery'
import './App.css'

export default function App() {
  const images = [
    'https://source.unsplash.com/random/800x600?sig=1',
    'https://source.unsplash.com/random/800x600?sig=2',
    'https://source.unsplash.com/random/800x600?sig=3',
  ]

  return (
    <>
      <h1>My Photo Gallery</h1>
      <PhotoGallery images={images} />
    </>
  )
}
