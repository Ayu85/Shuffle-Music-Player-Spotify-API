/* eslint-disable react/prop-types */
import { BiSolidAlbum } from "react-icons/bi";

import { useSelector } from 'react-redux'
const PopularAlbums = () => {
  const albums = useSelector(store => store.albums.value)
  return (
    <div className='flex flex-col '>
      <h1 className='text-2xl flex items-center gap-1 font-[joy] pl-7 font-semibold text-zinc-900
       tracking-wide'>Popular Albums<BiSolidAlbum />
      </h1>
      <div className='flex gap-4 pl-6 pt-4'>
        {albums?.map((alb, key) => {
          return <AlbumCard {...alb} key={key} />
        })}
      </div>
    </div>
  )
}
const AlbumCard = ({ images, label, name, release_date }) => {
  return <div className='w-44 cursor-pointer hover:bg-[#00000074] transition-all aspect-square bg-[#00000026] px-3 py-2  flex flex-col justify-center text-white'>
    <img src={images[1]?.url} alt="logo" className='h-32 ' />
    <h1 className='text-md font-[joy] line-clamp-1'>{name}</h1>
    <h1 className='text-sm line-clamp-1'>{label}</h1>
    <h1 className='text-sm'>{release_date}</h1>
  </div>
}
export default PopularAlbums
