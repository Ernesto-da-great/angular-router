export interface myHero {
   name: string,
   power: string,
   age: number,
   description: string
}

export interface Crisis {
   name: string,
   level: number,
   description: string
}

export const ourFile: myHero[] = [
   {
      name: 'Alex',
      power: 'Speed',
      age: 26,
      description: 'Faster than the speed of sound and can circle the earth in 1 hour' 
   },

   {
      name: 'Ernest',
      power: 'Intellect',
      age: 21,
      description: 'Smarty pants with the ability to analyse scenarios and give quick solutions'
   },

   {
      name: 'Mubeen',
      power: 'Angular',
      age: 25,
      description: 'The ultimate nerdy Programmer with strong skills in angular'
   }
]

export const crisisFile: Crisis[] = [
   {
      name: 'Hurricane',
      level: 4,
      description: 'This crisis is no match for any of our Heroes'
   },

   {
      name: 'Fire',
      level: 4,
      description: 'This crisis is no match for any of our Heroes'
   },

   {
      name: 'Explosion',
      level: 7,
      description: 'This crisis is to be handled by ALEX'
   },

   {
      name: 'Unemployment',
      level: 10,
      description: 'This crisis is no match for any of our Heroes'
   },

   {
      name: 'Scarcity',
      level: 4,
      description: 'This crisis is to be handled by ERNEST'
   },
]