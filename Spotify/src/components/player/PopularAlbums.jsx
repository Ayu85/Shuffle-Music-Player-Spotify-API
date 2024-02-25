/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux'
const PopularAlbums = () => {
  const albums = useSelector(store => store.albums.value)
  return (
    <div className=''>
      <AlbumCard {...albums[0]} />
    </div>
  )
}
const AlbumCard = ({ images, label, name, release_date }) => {
  return <div className='w-44 aspect-square bg-[#00000089] flex flex-col justify-center text-white'>
    <img src={images[1]?.url} alt="logo" />
    <h1>{name}</h1>
    <h1>{label}</h1>
    <h1>{release_date}</h1>
  </div>
}
export default PopularAlbums
