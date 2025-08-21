import React, { useRef, useMemo, useEffect, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Line, Text } from "@react-three/drei"
import * as THREE from "three"

// Direct theme colors - no CSS variable resolution needed
const themeColors = {
    light: {
        primary: 'hsl(330.9554, 64.0816%, 51.9608%)',
        secondary: 'hsl(175.4622, 58.6207%, 39.8039%)',
        accent: 'hsl(17.5691, 80.4444%, 44.1176%)',
        muted: 'hsl(180, 6.9307%, 60.3922%)',
        border: 'hsl(186.3158, 8.2969%, 55.0980%)',
        foreground: 'hsl(192.2034, 80.8219%, 14.3137%)',
        background: 'hsl(43.8462, 86.6667%, 94.1176%)'
    },
    dark: {
        primary: 'hsl(330.9554, 64.0816%, 51.9608%)',
        secondary: 'hsl(175.4622, 58.6207%, 39.8039%)',
        accent: 'hsl(17.5691, 80.4444%, 44.1176%)',
        muted: 'hsl(194.4828, 14.1463%, 40.1961%)',
        border: 'hsl(194.4828, 14.1463%, 40.1961%)',
        foreground: 'hsl(180, 6.9307%, 60.3922%)',
        background: 'hsl(192.2222, 100.0000%, 10.5882%)'
    }
}

// Convert HSL to hex for Three.js
const hslToHex = (hsl) => {
    // Extract h, s, l values
    const match = hsl.match(/hsl\(([^,]+),\s*([^,]+)%,\s*([^)]+)%\)/)
    if (!match) return hsl

    const h = parseFloat(match[1]) / 360
    const s = parseFloat(match[2]) / 100
    const l = parseFloat(match[3]) / 100

    const hue2rgb = (p, q, t) => {
        if (t < 0) t += 1
        if (t > 1) t -= 1
        if (t < 1/6) return p + (q - p) * 6 * t
        if (t < 1/2) return q
        if (t < 2/3) return p + (q - p) * (2/3 - t) * 6
        return p
    }

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s
    const p = 2 * l - q
    const r = Math.round(hue2rgb(p, q, h + 1/3) * 255)
    const g = Math.round(hue2rgb(p, q, h) * 255)
    const b = Math.round(hue2rgb(p, q, h - 1/3) * 255)

    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`
}

// Simple theme detection
const getCurrentTheme = () => {
    if (typeof window === "undefined") return 'light'

    // Check localStorage first
    const stored = localStorage.getItem('darkMode')
    if (stored !== null) {
        return stored === 'true' ? 'dark' : 'light'
    }

    // Check DOM for dark class
    const hasDarkClass = document.documentElement.classList.contains('dark') ||
                        document.body.classList.contains('dark') ||
                        document.querySelector('.dark') !== null

    return hasDarkClass ? 'dark' : 'light'
}

// Get theme color directly
const getThemeColor = (colorName) => {
    const theme = getCurrentTheme()
    const colorMap = {
        'hsl(var(--primary))': 'primary',
        'hsl(var(--secondary))': 'secondary',
        'hsl(var(--accent))': 'accent',
        'hsl(var(--muted))': 'muted',
        'hsl(var(--border))': 'border',
        'hsl(var(--foreground))': 'foreground',
        'hsl(var(--background))': 'background'
    }

    const mappedColor = colorMap[colorName]
    if (mappedColor && themeColors[theme][mappedColor]) {
        const hslColor = themeColors[theme][mappedColor]
        return hslToHex(hslColor)
    }

    return colorName
}

// Hook that returns the correct color for current theme
const useResolvedColor = (cssColor) => {
    const [resolvedColor, setResolvedColor] = useState(() => getThemeColor(cssColor))

    useEffect(() => {
        // Update color when theme might have changed
        const updateColor = () => {
            const newColor = getThemeColor(cssColor)
            if (newColor !== resolvedColor) {
                setResolvedColor(newColor)
                if (process.env.NODE_ENV === 'development') {
                    console.log(`Color updated: ${cssColor} -> ${newColor} (theme: ${getCurrentTheme()})`)
                }
            }
        }

        // Check for theme changes
        const intervalId = setInterval(updateColor, 1000)

        // Listen for storage changes
        const handleStorageChange = (e) => {
            if (e.key === 'darkMode') {
                setTimeout(updateColor, 50)
            }
        }

        window.addEventListener('storage', handleStorageChange)

        return () => {
            clearInterval(intervalId)
            window.removeEventListener('storage', handleStorageChange)
        }
    }, [cssColor, resolvedColor])

    return resolvedColor
}

// Animated Grid Background Component
export function AnimatedGrid({
    size = 20,
    divisions = 50,
    color = "hsl(var(--primary))",
    opacity = 0.15,
}) {
    const gridRef = useRef()
    const resolvedColor = useResolvedColor(color)

    useFrame((state) => {
        if (gridRef.current && gridRef.current.material) {
            // Subtle breathing animation
            gridRef.current.material.opacity =
                opacity + Math.sin(state.clock.elapsedTime * 0.5) * 0.05
        }
    })

    return (
        <gridHelper
            ref={gridRef}
            args={[size, divisions, resolvedColor, resolvedColor]}
            rotation={[Math.PI / 2, 0, 0]}
            position={[0, 0, -2]}
        />
    )
}

// Circuit Board Lines Component
export function CircuitLines({ count = 15, color = "hsl(var(--secondary))" }) {
    const linesRef = useRef()
    const resolvedColor = useResolvedColor(color)

    const linePoints = useMemo(() => {
        const lines = []
        for (let i = 0; i < count; i++) {
            const points = []
            const startX = (Math.random() - 0.5) * 20
            const startY = (Math.random() - 0.5) * 15
            const startZ = Math.random() * 2 - 1

            // Create L-shaped and T-shaped circuit paths
            const segments = Math.floor(Math.random() * 3) + 2
            let currentX = startX
            let currentY = startY
            let currentZ = startZ

            points.push([currentX, currentY, currentZ])

            for (let j = 0; j < segments; j++) {
                const direction = Math.random() > 0.5 ? "horizontal" : "vertical"
                const distance = Math.random() * 3 + 1

                if (direction === "horizontal") {
                    currentX += (Math.random() > 0.5 ? 1 : -1) * distance
                } else {
                    currentY += (Math.random() > 0.5 ? 1 : -1) * distance
                }

                points.push([currentX, currentY, currentZ])
            }

            lines.push(points)
        }
        return lines
    }, [count])

    useFrame((state) => {
        if (linesRef.current) {
            // Pulse animation
            const pulse = (Math.sin(state.clock.elapsedTime * 2) + 1) * 0.5
            linesRef.current.children.forEach((line, index) => {
                const offset = index * 0.1
                // Safety check to ensure line has material before setting opacity
                if (line.material && typeof line.material.opacity !== "undefined") {
                    line.material.opacity =
                        0.3 + pulse * 0.4 + Math.sin(state.clock.elapsedTime + offset) * 0.2
                }
            })
        }
    })

    return (
        <group ref={linesRef}>
            {linePoints.map((points, index) => (
                <Line key={index} points={points} color={resolvedColor} lineWidth={2} transparent />
            ))}
        </group>
    )
}

// Flowing Data Lines Component
export function FlowingLines({ count = 8, color = "hsl(var(--accent))" }) {
    const groupRef = useRef()
    const resolvedColor = useResolvedColor(color)

    const lines = useMemo(() => {
        return Array.from({ length: count }, (_, i) => {
            const radius = 8 + i * 0.5
            const points = []
            const segments = 64

            for (let j = 0; j <= segments; j++) {
                const angle = (j / segments) * Math.PI * 2
                const x = Math.cos(angle) * radius
                const y = Math.sin(angle) * radius
                const z = Math.sin(angle * 3) * 0.5
                points.push([x, y, z])
            }

            return { points, phase: i * 0.2 }
        })
    }, [count])

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.z = state.clock.elapsedTime * 0.1

            groupRef.current.children.forEach((line, index) => {
                const offset = lines[index].phase
                // Safety check to ensure line has material before setting opacity
                if (line.material && typeof line.material.opacity !== "undefined") {
                    line.material.opacity =
                        0.4 + Math.sin(state.clock.elapsedTime * 1.5 + offset) * 0.3
                }
            })
        }
    })

    return (
        <group ref={groupRef}>
            {lines.map((line, index) => (
                <Line key={index} points={line.points} color={resolvedColor} lineWidth={1.5} transparent />
            ))}
        </group>
    )
}

// Neon Border Lines Component
export function NeonBorderLines({
    width = 10,
    height = 6,
    color = "hsl(var(--primary))",
    glowIntensity = 1,
}) {
    const borderRef = useRef()
    const resolvedColor = useResolvedColor(color)

    const borderPoints = useMemo(
        () => [
            // Top line
            [
                [-width / 2, height / 2, 0],
                [width / 2, height / 2, 0],
            ],
            // Right line
            [
                [width / 2, height / 2, 0],
                [width / 2, -height / 2, 0],
            ],
            // Bottom line
            [
                [width / 2, -height / 2, 0],
                [-width / 2, -height / 2, 0],
            ],
            // Left line
            [
                [-width / 2, -height / 2, 0],
                [-width / 2, height / 2, 0],
            ],
        ],
        [width, height]
    )

    useFrame((state) => {
        if (borderRef.current) {
            const glow = glowIntensity + Math.sin(state.clock.elapsedTime * 3) * 0.3
            borderRef.current.children.forEach((line, index) => {
                const offset = index * 0.25
                // Safety check to ensure line has material before setting opacity
                if (line.material && typeof line.material.opacity !== "undefined") {
                    line.material.opacity =
                        0.6 + Math.sin(state.clock.elapsedTime * 2 + offset) * 0.4
                }
            })
        }
    })

    return (
        <group ref={borderRef}>
            {borderPoints.map((points, index) => (
                <Line key={index} points={points} color={resolvedColor} lineWidth={3} transparent />
            ))}
        </group>
    )
}

// Radar Sweep Lines Component
export function RadarSweep({ radius = 5, color = "hsl(var(--secondary))", sweepSpeed = 1 }) {
    const radarRef = useRef()
    const sweepRef = useRef()
    const resolvedColor = useResolvedColor(color)

    const circlePoints = useMemo(() => {
        const points = []
        const segments = 64
        for (let i = 0; i <= segments; i++) {
            const angle = (i / segments) * Math.PI * 2
            const x = Math.cos(angle) * radius
            const y = Math.sin(angle) * radius
            points.push([x, y, 0])
        }
        return points
    }, [radius])

    const crossHairs = useMemo(
        () => [
            [
                [-radius, 0, 0],
                [radius, 0, 0],
            ], // Horizontal line
            [
                [0, -radius, 0],
                [0, radius, 0],
            ], // Vertical line
        ],
        [radius]
    )

    useFrame((state) => {
        if (sweepRef.current) {
            sweepRef.current.rotation.z = state.clock.elapsedTime * sweepSpeed
        }

        if (radarRef.current) {
            const pulse = Math.sin(state.clock.elapsedTime * 2) * 0.2
            radarRef.current.children.forEach((child) => {
                // Safety check to ensure child has material before setting opacity
                if (child.material && typeof child.material.opacity !== "undefined") {
                    child.material.opacity = 0.4 + pulse
                }
            })
        }
    })

    return (
        <group ref={radarRef}>
            {/* Radar circles */}
            <Line points={circlePoints} color={resolvedColor} lineWidth={2} transparent />
            <Line
                points={circlePoints.map(([x, y, z]) => [x * 0.6, y * 0.6, z])}
                color={resolvedColor}
                lineWidth={1.5}
                transparent
            />
            <Line
                points={circlePoints.map(([x, y, z]) => [x * 0.3, y * 0.3, z])}
                color={resolvedColor}
                lineWidth={1}
                transparent
            />

            {/* Crosshairs */}
            {crossHairs.map((points, index) => (
                <Line key={index} points={points} color={resolvedColor} lineWidth={1} transparent />
            ))}

            {/* Sweep line */}
            <group ref={sweepRef}>
                <Line
                    points={[
                        [0, 0, 0],
                        [radius, 0, 0],
                    ]}
                    color={resolvedColor}
                    lineWidth={3}
                    transparent
                />
            </group>
        </group>
    )
}

// Connection Lines Component (connects UI elements)
export function ConnectionLines({ points = [], color = "hsl(var(--primary))", animated = true }) {
    const linesRef = useRef()
    const resolvedColor = useResolvedColor(color)

    const connectionPaths = useMemo(() => {
        if (points.length < 2) return []

        const paths = []
        for (let i = 0; i < points.length - 1; i++) {
            const start = points[i]
            const end = points[i + 1]

            // Create curved connection
            const midPoint = [
                (start[0] + end[0]) / 2,
                (start[1] + end[1]) / 2 + Math.random() * 2 - 1,
                (start[2] + end[2]) / 2,
            ]

            paths.push([start, midPoint, end])
        }

        return paths
    }, [points])

    useFrame((state) => {
        if (linesRef.current && animated) {
            linesRef.current.children.forEach((line, index) => {
                const offset = index * 0.3
                // Safety check to ensure line has material before setting opacity
                if (line.material && typeof line.material.opacity !== "undefined") {
                    line.material.opacity =
                        0.5 + Math.sin(state.clock.elapsedTime * 1.5 + offset) * 0.3
                }
            })
        }
    })

    return (
        <group ref={linesRef}>
            {connectionPaths.map((path, index) => (
                <Line
                    key={index}
                    points={path}
                    color={resolvedColor}
                    lineWidth={2}
                    transparent
                    curveType="bezier"
                />
            ))}
        </group>
    )
}

// Main Lines Canvas Wrapper
export function LinesCanvas({
    children,
    className = "",
    camera = { position: [0, 0, 10], fov: 75 },
    ...props
}) {
    return (
        <div className={`absolute inset-0 pointer-events-none ${className}`}>
            <Canvas camera={camera} dpr={[1, 2]} {...props}>
                <ambientLight intensity={0.2} />
                {children}
            </Canvas>
        </div>
    )
}

// Simple background grid component for sections
export function BackgroundGrid({ opacity = 0.1, color = "hsl(var(--primary))", size = 20 }) {
    const resolvedColor = useResolvedColor(color)

    return (
        <div
            className="absolute inset-0 pointer-events-none"
            style={{
                backgroundImage: `
                    linear-gradient(${resolvedColor} 1px, transparent 1px),
                    linear-gradient(90deg, ${resolvedColor} 1px, transparent 1px)
                `,
                backgroundSize: `${size}px ${size}px`,
                opacity: opacity,
            }}
        />
    )
}
