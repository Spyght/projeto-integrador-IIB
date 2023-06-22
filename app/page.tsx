'use client'
import { Gallery } from 'next-gallery'

const images = [
  { src: 'https://picsum.photos/id/1018/1920/1080/', aspect_ratio: 16 / 9 },
  { src: 'https://picsum.photos/id/1015/1920/1080/', aspect_ratio: 16 / 9 },
  { src: 'https://picsum.photos/id/1019/1440/1080/', aspect_ratio: 4 / 3 },
  { src: 'https://picsum.photos/id/1011/1080/1920/', aspect_ratio: 9 / 16 },
  { src: 'https://picsum.photos/id/1012/1920/1080/', aspect_ratio: 16 / 9 },
  { src: 'https://picsum.photos/id/13/1920/1080/', aspect_ratio: 16 / 9 },
  { src: 'https://picsum.photos/id/28/1920/1080/', aspect_ratio: 16 / 9 },
  { src: 'https://picsum.photos/id/1016/1920/1080/', aspect_ratio: 16 / 9 },
  { src: 'https://picsum.photos/id/1020/1920/1080/', aspect_ratio: 16 / 9 },
  { src: 'https://picsum.photos/id/1021/1920/1080/', aspect_ratio: 16 / 9 },
  { src: 'https://picsum.photos/id/1022/1920/1080/', aspect_ratio: 16 / 9 },
  { src: 'https://picsum.photos/id/1023/1920/1080/', aspect_ratio: 16 / 9 },
  { src: 'https://picsum.photos/id/1024/1920/1080/', aspect_ratio: 16 / 9 },
  { src: 'https://picsum.photos/id/1025/1920/1080/', aspect_ratio: 16 / 9 },
  { src: 'https://picsum.photos/id/112/1920/1080/', aspect_ratio: 16 / 9 },
  { src: 'https://picsum.photos/id/46/1920/1080/', aspect_ratio: 16 / 9 },
  { src: 'https://picsum.photos/id/1028/1920/1080/', aspect_ratio: 16 / 9 },
  { src: 'https://picsum.photos/id/1029/1920/1080/', aspect_ratio: 16 / 9 },
]

const widths = [500, 1000, 1600]
const ratios = [2.2, 4, 6, 8]

export default function Home() {
  return (
    <main>
      <h1 className='mt-8 text-5xl font-semibold text-center'>Projeto Integrador</h1>
      <h2 className='mt-4 text-green-600 font-medium text-lg text-center'>Natureza</h2>
      <div className='mt-8'>
        <Gallery initState={false} images={images} widths={widths} ratios={ratios} />
      </div>
    </main>
  )
}
