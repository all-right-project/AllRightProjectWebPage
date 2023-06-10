'use client'
import styled from 'styled-components'
type Props = {
  plan: Array<string>
  design: Array<string>
  develope: Array<string>
}
const StackInfo = ({plan, design, develope}: Props) => {
  return (
    <StackStyle>
      <div className="title">기획</div>
      <ul>
        {plan.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="title">디자인</div>
      <ul>
        {design.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="title">개발</div>
      <ul>
        {develope.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </StackStyle>
  )
}

export default StackInfo
const StackStyle = styled.div`
  display: flex;
  align-items: baseline;
  .title {
    width: 100px;
    margin-right: 20px;
    color: #888;
  }
  & > ul {
    display: flex;
    & > li {
      padding: 8px 15px;
      border: 1px solid #333;
      border-radius: 50px;
      margin-right: 10px;
      font-size: 14px;
    }
  }
`
