import { useRef, useEffect } from 'react'

const DrumKey = ({ item }) => {
  const audioRef = useRef()
  const divRef = useRef()
  const play = () => {
    audioRef.current.pause()
    audioRef.current.currentTime = 0
    audioRef.current.play()
    divRef.current.classList.toggle('active')
    setTimeout(() => {
      divRef.current.classList.toggle('active')
    }, 200)
  }
  const handleKeyDown = (e) => {
    if (e.key.toUpperCase() === item.keyTrigger) {
      play()
    }
    return
  }
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])
  return (
    <div
      id={item.id}
      ref={divRef}
      className="box"
      onClick={play}
      onKeyDown={handleKeyDown}
    >
      {item.keyTrigger}
      <audio ref={audioRef} src={item.url} />
    </div>
  )
}

export default DrumKey
