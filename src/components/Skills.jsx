import { motion } from 'framer-motion'

const Skills = () => {
  return (
    <div className='mt-64 w-full'>
      <h2 className='text-center text-8xl font-bold'>Skills</h2>
      <div className='bg-circularLight dark:bg-circularDark relative flex h-screen w-full items-center justify-center rounded-full '>
        <Skill name='React' y='-20em' />
        <Skill name='CSS' x='-20em' y='20em' />
        <Skill name='TS' x='20em' y='20em' />
        <Skill name='JS' y='10em' />
        <Skill name='Next' x='-10em' y='-10em' />
        <Skill name='MERN' x='10em' y='-10em' />
        <Skill name='Cypress' y='5em' />
        <Skill name='Next' x='-10em' y='-10em' />
        <Skill name='MERN' x='10em' y='-10em' />
        <Skill name='RoR' x='-30em' />
        <Skill name='Solidity' x='30em' />
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
      className='absolute flex cursor-pointer items-center justify-center rounded-full bg-dark px-4 py-2 font-semibold text-light shadow-dark ring-[1px] ring-light hover:bg-light hover:text-dark hover:ring-dark dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:hover:ring-light'
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
