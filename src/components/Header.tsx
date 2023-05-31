'use client'

import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

interface Props {}

export default function Header({}: Props) {
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
  max-width: 1440px;
  @media (max-width: 1440px) {
    padding: 0 100px;
  }
`

const LogoBox = styled.div`
  font-size: 2rem;
  font-weight: bold;
  a {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
`

const NaviBox = styled.div`
  ul {
    display: flex;
    list-style: none;
    li {
      margin-left: 20px;
      a {
        color: #000;
        text-decoration: none;
        cursor: pointer;
      }
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
