import styled from 'styled-components'
import Image from 'next/image'
import * as Icon from '@/assets/icon'

const Banner = () => (
  <BannerStyle>
    <div className="banner-wrapper">
      <div className="banner">
        <div>All Right</div>
        <div>Frontend</div>
      </div>
      <button>Meet Our Team</button>
    </div>
    <div className="img-wrapper">
      <Image src={Icon.padaeng} className="img" alt="profile icon" />
      <Image src={Icon.basak} className="img" alt="profile icon" />
      <Image src={Icon.siyun} className="img" alt="profile icon" />
    </div>
    <div className="background"></div>
  </BannerStyle>
)

export default Banner

const BannerStyle = styled.div`
  height: 750px;
  .banner-wrapper {
    margin: 200px 0 0 17%;
    .banner {
      font-size: 145px;
      margin-bottom: 50px;
      font-family: var(--font-poppins);
      font-weight: 600;
      line-height: 180px;
    }
  }
  button {
    width: 200px;
    height: 45px;
    background-color: #000;
    color: #fff;
    border: none;
    font-size: 20px;
    font-weight: 500;
    border-radius: 50px;
  }
  .img-wrapper {
    position: relative;
    left: 42%;
    top: -480px;
    z-index: -1;
    .img {
      width: 270px;
      height: 500px;
      margin-right: 20px;
    }
  }
  .background {
    background-color: #4aa8d8;
    width: 100%;
    height: 1390px;
    position: absolute;
    top: 520px;
    z-index: -2;
    border-radius: 1250px 0 0 0;
  }
`
