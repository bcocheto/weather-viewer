import { SVGProps } from 'react'

const HazeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={48} height={48} {...props}>
    <path
      fill='#FF9800'
      d='M24 6 6 24l1 1h1a2 2 0 0 1 2 2c0 .293-.066.569-.18.82L23 41h2l17-17L24 6z'
    />
    <path fill='#FF9800' d='M11 11h26v26H11z' />
    <path
      fill='#FFEB3B'
      d='M13 24c0 6.077 4.923 11 11 11 6.076 0 11-4.923 11-11s-4.924-11-11-11c-6.077 0-11 4.923-11 11'
    />
    <path
      fill='#64B5F6'
      d='M40 37h-9a2 2 0 0 1 0-4h3a2 2 0 0 0 0-4H19a2 2 0 0 1-.01-3.999H21a2 2 0 0 0 2-2V23a2 2 0 0 0-2-2H7v.001a2 2 0 0 0 0 4h1A1.998 1.998 0 0 1 7.99 29H8a2 2 0 0 0 0 4h1a2 2 0 0 1 0 4 2 2 0 0 0 0 4h31c.8 0 1.485-.473 1.805-1.152h.001l.001-.002c.057-.123.104-.25.135-.385l.008-.023A2 2 0 0 0 40 37z'
    />
    <path
      fill='#BBDEFB'
      d='M24 35c4.273 0 7.969-2.44 9.79-6H19a2 2 0 0 1-.01-3.999H21a2 2 0 0 0 2-2V23a2 2 0 0 0-2-2h-7.576c-.27.955-.424 1.959-.424 3 0 6.077 4.923 11 11 11z'
    />
  </svg>
)
export default HazeIcon
