import './PhotoGallery.css'

export interface PhotoGalleryProps {
  images: string[]
}

export default function PhotoGallery({ images }: PhotoGalleryProps) {
  return (
    <div className="photo-gallery">
      {images.map((src, idx) => (
        <img key={idx} src={src} alt={`Photo ${idx + 1}`} className="photo" />
      ))}
    </div>
  )
}
