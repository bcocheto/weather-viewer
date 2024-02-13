import { SVGProps } from 'react'

const SnowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={48} height={48} {...props}>
    <path fill='#BBDEFB' d='M29.5 5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 1 0 0-17Z' />
    <path
      fill='#BBDEFB'
      d='M37 14.893a7 7 0 1 0 0 14 7 7 0 1 0 0-14zM11 15a7 7 0 1 0 0 14 7 7 0 1 0 0-14z'
    />
    <path fill='#BBDEFB' d='M17.5 8a6.5 6.5 0 1 0 0 13 6.5 6.5 0 1 0 0-13Z' />
    <path fill='#BBDEFB' d='M25 12.893a7 7 0 1 0 0 14 7 7 0 1 0 0-14Z' />
    <path
      fill='#BBDEFB'
      d='M7 25a4 4 0 0 0 4 4h25a4 4 0 0 0 4-4v-1a4 4 0 0 0-4-4H11a4 4 0 0 0-4 4v1z'
    />
    <g fill='#2196F3'>
      <path d='M23 34h2v9h-2z' />
      <path d='m28.386 39.92-1.015 1.723-7.757-4.564 1.015-1.724z' />
      <path d='m27.434 35.425.979 1.742-7.847 4.408-.979-1.742zM10 31h2v9h-2z' />
      <path d='m15.387 36.919-1.013 1.724-7.76-4.56 1.014-1.725z' />
      <path d='m14.434 32.425.979 1.742-7.847 4.408-.979-1.742zM36 31h2v9h-2z' />
      <path d='m41.387 36.92-1.014 1.724-7.758-4.562 1.014-1.724z' />
      <path d='m40.433 32.425.979 1.742-7.848 4.408-.979-1.742z' />
    </g>
  </svg>
)
export default SnowIcon
