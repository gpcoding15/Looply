import './index.css'

const SRC = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'

export const VideoPlayer = () => {
  return (
    <video className='video' src={SRC} controls={false} />
  )
}
