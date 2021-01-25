import React from 'react'
import { FaAngleUp } from 'react-icons/fa'
class BackToTop extends React.Component {
  state = { height: 0 }
  //const [height, setHeight] = React.useState(0);
  componentDidMount() {
    window.addEventListener('scroll', () => {
      this.setState({ height: window.pageYOffset })
    })
    return () => window.removeEventListener('scroll', () => {})
  }

  //React.useEffect(() => {

  scrollBackToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }
  render() {
    const { height } = this.state
    return (
      <>
        <button
          className={height > 80 ? 'scroll-btn show-scroll-btn' : 'scroll-btn'}
          onClick={this.scrollBackToTop}
        >
          <FaAngleUp></FaAngleUp>
        </button>
      </>
    )
  }
}
export default BackToTop
