import { useState, useEffect } from "react"

/**
 * Shared hook for dark mode state management.
 * Reads initial state from the DOM (set by _document.js inline script),
 * persists changes to localStorage, and toggles the `dark` class on <html>.
 */
export default function useDarkMode() {
    const [darkMode, setDarkMode] = useState(true)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        const isDark = document.documentElement.classList.contains("dark")
        setDarkMode(isDark)
    }, [])

    useEffect(() => {
        if (!mounted) return

        if (darkMode) {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
        try {
            localStorage.setItem("darkMode", String(darkMode))
        } catch (e) {
            // localStorage may be unavailable in private browsing
        }
    }, [darkMode, mounted])

    return { darkMode, setDarkMode, mounted }
}
