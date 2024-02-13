import { SVGProps } from 'react'
const HighIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={16} height={21} {...props}>
    <path d='M0 8h5v12a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V8h5L8 0 0 8Z' />
  </svg>
)
export default HighIcon
