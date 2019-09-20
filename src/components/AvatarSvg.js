import React from 'react'
import { useState } from 'react'
import { useSpring, animated } from 'react-spring'


const AnimFeTurbulence = animated('feTurbulence')
const AnimFeDisplacementMap = animated('feDisplacementMap')

function AvatarSvg() {
    const [open, toggle] = useState(false)
    const {freq, scale, transform, opacity} = useSpring({
        reverse: open,
        from: {scale: 20, opacity: 1, transform: 'scale(0.9)', freq: '0.141, 0.141'},
        to: {scale:20, opacity: 1, transform: 'scale(111)', freq: '0.130, 0.130'},
        config: {duration: 3000}
    })

    return (
        <div onClick={() => toggle(!open)}>
            <animated.svg style={{ transform, opacity }} viewBox="0 0 512 512">
                <defs>
                    <filter id="water">
                        <AnimFeTurbulence type="fractalNoise" baseFrequency={freq} numOctaves="1" result="TURB" seed="1" />
                        <AnimFeDisplacementMap xChannelSelector="R" yChannelSelector="G" in="SourceGraphic" in2="TURB" result="DISP" scale={scale} />
                    </filter>
                </defs>
                <g filter="url(#water)">
                    <animated.path
                        d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z"

                    />
                </g>
            </animated.svg>
        </div>

    )


}

export default AvatarSvg
