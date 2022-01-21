export const containerVariants = {
    hidden: { opacity: 0, x: '100vw' },
    visible: { opacity: 1, x: 0, transition: { type: 'tween', delay: 0.3 } },
    exit: { x: '-100vw', transition: { ease: 'easeInOut' } }
}

export const dropdownVariants = {
    hidden: { opacity: 0, y: -200 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring' } },
    exit: { y: -200,  opacity: 0, transition: { type: 'tween' } }
}

