import React, { createContext, useCallback, useEffect } from 'react'

interface ScrollValue {
    scrollY: number
}

export const ScrollContext = createContext<ScrollValue>({
    scrollY: 0
})

function ScrollObserver({children}: {children: React.ReactNode}) {
    const [scrollY, set_scrollY] = React.useState(0)
    const handleScroll = useCallback(
      () => {
        set_scrollY(window.scrollY)
      },
      [],
    )
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
            }, [,handleScroll])
  return (
    <ScrollContext.Provider value={{ scrollY }}>
        <>
        {children}
        </>
    </ScrollContext.Provider>
  )
}

export default ScrollObserver