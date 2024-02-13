import { SpinnerContainer } from './style'

const Spinner = () => {
  return (
    <SpinnerContainer>
      <div className='loader'>
        <div className='sk-chase'>
          <div className='sk-chase-dot'></div>
          <div className='sk-chase-dot'></div>
          <div className='sk-chase-dot'></div>
          <div className='sk-chase-dot'></div>
          <div className='sk-chase-dot'></div>
          <div className='sk-chase-dot'></div>
        </div>
      </div>
    </SpinnerContainer>
  )
}
export default Spinner
