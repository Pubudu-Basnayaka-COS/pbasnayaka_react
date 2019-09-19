import { render } from 'react-dom'
import React, { useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'

const slides = [
    { id: 0, url: 'https://pbasnayaka.com/sites/default/files/styles/style_web_work_thumbnail/public/2019-09/cow.jpg?h=b75af4a6&itok=rKGkG7ms' },
    { id: 1, url: 'https://pbasnayaka.com/sites/default/files/styles/style_web_work_thumbnail/public/2019-09/2.jpg?h=e09954a2&itok=7iZ7N8B6' },
    { id: 2, url: 'https://pbasnayaka.com/sites/default/files/styles/style_web_work_thumbnail/public/2019-09/11.jpg?h=96c5bfdb&itok=DLw5QHe1' },
    { id: 3, url: 'https://pbasnayaka.com/sites/default/files/styles/style_web_work_thumbnail/public/2019-09/3_0.jpg?h=eebd6862&itok=vGClVcS7' },
]

const CreativeCard = () => {
    const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
    const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

    return (
        <animated.div
            class="card"
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({xys: [0, 0, 1]})}
            style={{ transform: props.xys.interpolate(trans), backgroundImage: `url(${slides[0].url})` }}
        />
    )

}

export default CreativeCard;
