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
  return <div className='w-44 aspect-square bg-[#00000026] px-3 py-2  flex flex-col justify-center text-white'>
    <img src={images[1]?.url} alt="logo" className='h-32 ' />
    <h1 className='text-md font-[joy] line-clamp-1'>{name}</h1>
    <h1 className='text-sm'>{label}</h1>
    <h1 className='text-sm'>{release_date}</h1>
  </div>
}
export default PopularAlbums
