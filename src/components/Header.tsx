'use client'

import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

export default function Header() {
  return (
    <HeaderContainer>
      <LogoBox>
        <Link href="/">ARF</Link>
      </LogoBox>
      <NaviBox>
        <ul>
          <li>
            <Link href="/member">Member</Link>
          </li>
          <li>
            <Link href="/project">Project</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/study">Study</Link>
          </li>
          <li>
            <Link href="/issue">Issue</Link>
          </li>
        </ul>
      </NaviBox>
    </HeaderContainer>
  )
}

// 마진 값 세부 조정 필요
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1280px;
  @media (max-width: 1280px) {
    padding: 0 100px;
  }
`

const LogoBox = styled.div`
  font-size: 2rem;
  font-weight: bold;
`

const NaviBox = styled.div`
  ul {
    display: flex;
    li {
      margin-left: 20px;
      a:hover {
        color: #ccc;
        transition: 0.3s;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`
