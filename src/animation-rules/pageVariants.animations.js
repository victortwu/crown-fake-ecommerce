export const containerVariants = {
    hidden: { opacity: 0, x: '100vw' },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', delay: 0.3 } },
    exit: { x: '-100vw', transition: { ease: 'easeInOut' } }
}

