import { motion } from 'framer-motion'

const Skills = () => {
  return (
    <div className='mt-16 h-[360px] w-full sm:mt-32 sm:h-max lg:mt-48'>
      <h2 className='text-center text-4xl font-bold sm:text-6xl md:text-8xl'>
        Skills
      </h2>
      <div
        className='sm:bg-circularLightSm sm:dark:bg-circularDarkSm md:bg-circularLightMd
          md:dark:bg-circularDarkMd lg:bg-circularLightLg
          lg:dark:bg-circularDarkLg relative
          mx-auto flex h-5/6 w-[85vw] items-center justify-center 
          rounded-full bg-circularLight dark:bg-circularDark sm:h-[70vh] sm:w-full
          md:h-[70vh] lg:h-[80vh] 
          xl:h-screen
        '
      >
        <Skill name='React' y='-10.75em' />

        <Skill name='Next' x='-10em' y='-9.5em' />
        <Skill name='MERN' x='10em' y='-9.5em' />

        <Skill name='Next' x='-5em' y='-7em' />
        <Skill name='MERN' x='5em' y='-7em' />

        <Skill name='Next' x='-10em' y='-4.5em' />
        <Skill name='MERN' x='10em' y='-4.5em' />

        <Skill name='Next' x='-5em' y='-2em' />
        <Skill name='MERN' x='5em' y='-2em' />

        <Skill name='Next' x='-10em' y='2.5em' />
        <Skill name='MERN' x='10em' y='2.5em' />

        <Skill name='Cypress' y='5em' />

        <Skill name='Next' x='-10em' y='7.5em' />
        <Skill name='MERN' x='10em' y='7.5em' />

        <Skill name='CSS' x='-5em' y='10em' />
        <Skill name='TS' x='5em' y='10em' />

        <Skill name='Web' />
      </div>
    </div>
  )
}

export default Skills

const Skill = ({ name, x = 0, y = 0 }) => {
  return (
    <motion.div
      initial={{ x: 0, y: 0 }}
      whileInView={{
        x,
        y,
        transition: {
          duration: 2.75,
          ease: 'easeInOut',
          type: 'spring',
          bounce: 0.75,
        },
      }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className={`absolute flex cursor-pointer items-center justify-center 
        rounded-full
      bg-light px-3
        py-1.5 text-xs
       font-semibold text-dark shadow-dark hover:bg-light hover:text-dark 
      hover:ring-dark dark:bg-dark dark:text-light
       dark:shadow-light dark:hover:bg-dark
       dark:hover:text-light dark:hover:ring-light sm:bg-dark
      sm:text-light
        sm:ring-[1px] sm:ring-light
        sm:dark:bg-light sm:dark:text-dark
         md:px-3 md:py-1.5 md:text-lg lg:px-4 lg:py-2`}
    >
      {name}
    </motion.div>
  )
}

// Git
// Github

// React
// Next
// JS
// TS

// Cypress
// React TL
// Jest

// HTML

// CSS
// Bootstrap
// Tailwind
// SCSS
// Framer Motion

// MERN
// Express
// MongoDB / Mongoose

// DATO CMS

// RoR
// Ruby
// RSpec

// Solidity
// Ethers
// Hardhat
// Remix
// Metamask
// Alchemy
// Chainlink oracles

// Vercel
