import { ArrowLeft, ArrowRight, GalleryContainer } from "./styles";

const images = [
  {
    id: 1,
    src: '/images/image 1.jpg',
    name: "Imagem 1"
  },
  {
    id: 2,
    src: '/images/image 2.jpg',
    name: "Imagem 2"
  },
  {
    id: 3,
    src: '/images/image 3.jpg',
    name: "Imagem 3"
  },
  {
    id: 4,
    src: '/images/image 1.jpg',
    name: "Imagem 1"
  },
  {
    id: 5,
    src: '/images/image 2.jpg',
    name: "Imagem 2"
  },
  {
    id: 6,
    src: '/images/image 3.jpg',
    name: "Imagem 3"
  },
  {
    id: 7,
    src: '/images/image 1.jpg',
    name: "Imagem 1"
  },  
]

function Gallery() {
  return (
    <>
      <GalleryContainer>
        <ArrowLeft />
        {images.map(image => (<img src={image.src} key={image.id} alt={image.name} />))}
        <ArrowRight />
      </GalleryContainer>
    </>
  );
}

export default Gallery;
