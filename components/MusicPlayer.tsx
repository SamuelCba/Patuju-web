'use client'

import { useState, useRef, useEffect } from 'react'
import { Play, Pause, Volume2, Volume1, VolumeX } from 'lucide-react'
import { motion } from 'framer-motion'

interface MusicPlayerProps {
  title: string
  artist: string
  duration?: number
  accentColor?: string
}

export default function MusicPlayer({ title, artist, duration = 300, accentColor = '#0f7d3f' }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [volume, setVolume] = useState(1)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateTime = () => setCurrentTime(audio.currentTime)
    const handleEnd = () => setIsPlaying(false)

    audio.addEventListener('timeupdate', updateTime)
    audio.addEventListener('ended', handleEnd)

    return () => {
      audio.removeEventListener('timeupdate', updateTime)
      audio.removeEventListener('ended', handleEnd)
    }
  }, [])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch(() => {
          console.log('[v0] Audio playback failed - file may not exist')
        })
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value)
    if (audioRef.current) {
      audioRef.current.currentTime = newTime
      setCurrentTime(newTime)
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume
    }
  }

  const formatTime = (seconds: number) => {
    if (!isFinite(seconds)) return '0:00'
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const progress = (currentTime / duration) * 100

  return (
    <div className="w-full">
      <audio ref={audioRef} src="/hymn.mp3" />
      
      {/* Player Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative rounded-3xl overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${accentColor}15 0%, ${accentColor}08 100%)`,
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        }}
      >
        {/* Background Gradient Blur */}
        <div
          className="absolute inset-0 -z-10 blur-3xl"
          style={{
            background: `linear-gradient(135deg, ${accentColor}20 0%, transparent 100%)`,
          }}
        />

        <div className="p-8 sm:p-10">
          {/* Album Art Placeholder */}
          <motion.div
            animate={{ scale: isPlaying ? 1.02 : 1 }}
            transition={{ duration: 0.5, repeat: isPlaying ? Infinity : 0, repeatType: 'reverse' }}
            className="relative mx-auto mb-8 w-40 h-40 sm:w-56 sm:h-56 rounded-2xl overflow-hidden shadow-2xl"
            style={{
              background: `linear-gradient(135deg, ${accentColor} 0%, ${accentColor}cc 100%)`,
            }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/30" />
            
            {/* Music Note Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ rotate: isPlaying ? 360 : 0 }}
                transition={{ duration: 3, repeat: isPlaying ? Infinity : 0, ease: 'linear' }}
                className="text-white/80"
              >
                <svg className="w-20 h-20 sm:w-28 sm:h-28" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3v9.28c-0.47-0.98-1.45-1.66-2.59-1.66-1.61 0-2.92 1.31-2.92 2.92s1.31 2.92 2.92 2.92c1.14 0 2.12-0.68 2.59-1.66V21h5V3h-4z" />
                </svg>
              </motion.div>
            </div>

            {/* Playing Indicator */}
            {isPlaying && (
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-white/40"
                animate={{ boxShadow: '0 0 30px rgba(255, 255, 255, 0.2)' }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            )}
          </motion.div>

          {/* Title and Artist */}
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-foreground text-balance">{title}</h2>
            <p className="text-base sm:text-lg text-secondary">{artist}</p>
          </div>

          {/* Progress Bar */}
          <div className="mb-4">
            <input
              type="range"
              min="0"
              max={duration}
              value={currentTime}
              onChange={handleProgressChange}
              className="w-full h-1.5 bg-tertiary rounded-full appearance-none cursor-pointer accent-accent"
              style={{
                background: `linear-gradient(to right, ${accentColor} 0%, ${accentColor} ${progress}%, var(--tertiary) ${progress}%, var(--tertiary) 100%)`,
              }}
            />
          </div>

          {/* Time Display */}
          <div className="flex justify-between items-center text-xs sm:text-sm text-secondary mb-8">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>

          {/* Play Controls */}
          <div className="flex items-center justify-center gap-4 mb-8">
            {/* Previous Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full bg-tertiary hover:bg-accent/20 flex items-center justify-center transition-colors text-secondary hover:text-accent"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
              </svg>
            </motion.button>

            {/* Play/Pause Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={togglePlay}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center transition-all shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${accentColor} 0%, ${accentColor}cc 100%)`,
                boxShadow: isPlaying ? `0 10px 40px ${accentColor}40` : `0 5px 20px ${accentColor}30`,
              }}
            >
              <motion.div
                animate={isPlaying ? 'playing' : 'paused'}
                variants={{
                  playing: { scale: 1 },
                  paused: { scale: 1 },
                }}
                className="text-white"
              >
                {isPlaying ? (
                  <Pause size={32} className="sm:w-8 sm:h-8" fill="white" />
                ) : (
                  <Play size={32} className="sm:w-8 sm:h-8 ml-1" fill="white" />
                )}
              </motion.div>
            </motion.button>

            {/* Next Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full bg-tertiary hover:bg-accent/20 flex items-center justify-center transition-colors text-secondary hover:text-accent"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 18h2V6h-2zm-11-7l8.5-6v12z" />
              </svg>
            </motion.button>
          </div>

          {/* Volume Control */}
          <div className="flex items-center gap-3 justify-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="text-secondary hover:text-accent transition-colors"
            >
              {volume === 0 ? (
                <VolumeX size={20} />
              ) : volume < 0.5 ? (
                <Volume1 size={20} />
              ) : (
                <Volume2 size={20} />
              )}
            </motion.button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="w-24 h-1.5 bg-tertiary rounded-full appearance-none cursor-pointer accent-accent"
              style={{
                background: `linear-gradient(to right, ${accentColor} 0%, ${accentColor} ${volume * 100}%, var(--tertiary) ${volume * 100}%, var(--tertiary) 100%)`,
              }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}
