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
      <div className="stack-box">
        <div className="title">기획</div>
        <ul>
          {plan.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="stack-box">
        <div className="title">디자인</div>
        <ul>
          {design.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="stack-box">
        <div className="title">개발</div>
        <ul>
          {develope.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </StackStyle>
  )
}

export default StackInfo
const StackStyle = styled.div`
  .stack-box {
    display: flex;
    align-items: baseline;
    margin: 15px 0;
  }
  .title {
    min-width: 70px;
    margin-right: 20px;
    color: #888;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    & > li {
      padding: 8px 15px;
      border: 1px solid #333;
      border-radius: 50px;
      margin-right: 5px;
      margin-bottom: 5px;
      font-size: 14px;
    }
  }
`
