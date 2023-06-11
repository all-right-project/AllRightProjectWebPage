import styled from 'styled-components'
import Image from 'next/image'
import tempImg from '@/assets/project-img.png'

type Props = {}

const Carousel = ({}: Props) => {
  return (
    <CarouselContainer>
      <Image src={tempImg} className="img" alt="project introduce" />
      <MoveButton left="-30px">&lt;</MoveButton>
      <MoveButton right="-30px">&gt;</MoveButton>
    </CarouselContainer>
  )
}
export default Carousel

const CarouselContainer = styled.div`
  width: 736px;
  heigth: 443px;
  background-color: #333;
  border-radius: 10px;
  position: relative;
  .img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`
const MoveButton = styled.button<{left?: string; right?: string}>`
  width: 80px;
  height: 80px;
  background-color: rgba(255, 255, 255, 0.95);
  border: none;
  border-radius: 50px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 30px;
  position: absolute;
  left: ${props => props.left || 'unset'};
  right: ${props => props.right || 'unset'};
  top: calc(50% - 40px);
`
