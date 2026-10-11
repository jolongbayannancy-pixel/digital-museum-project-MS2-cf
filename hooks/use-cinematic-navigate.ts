'use client'

import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useRef, useState } from 'react'
import type { MouseEvent } from 'react'

export function useCinematicNavigate(href: string, delayMs = 950) {
  const router = useRouter()
  const [isTransitioning, setIsTransitioning] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    router.prefetch(href)
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [href, router])

  const onClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return
      event.preventDefault()
      if (isTransitioning) return

      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (reduceMotion) {
        router.push(href)
        return
      }
      setIsTransitioning(true)
      timeoutRef.current = setTimeout(() => router.push(href), delayMs)
    },
    [delayMs, href, isTransitioning, router],
  )

  return { isTransitioning, onClick }
}
