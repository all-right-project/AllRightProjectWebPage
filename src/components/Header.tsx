'use client'

import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import MenuBar from '@/assets/menu_bar.png'
import Image from 'next/image'

export default function Header() {
  const [openMenu, setOpenMenu] = React.useState(false)
  const handleMenu = () => {
    setOpenMenu(!openMenu)
  }
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
        <div className="mobile">
          <Image
            src={MenuBar}
            width={20}
            height={20}
            alt="menuBar"
            onClick={handleMenu}
          />
        </div>
      </NaviBox>

      {openMenu && (
        <PopUpMenu>
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
        </PopUpMenu>
      )}
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
    @media (max-width: 1280px) {
      display: none;
    }
    li {
      margin-left: 20px;
      a:hover {
        color: #ccc;
        transition: 0.3s;
      }
    }
  }
  .mobile {
    display: none;
    @media (max-width: 1280px) {
      display: block;
    }
  }
`
const PopUpMenu = styled.ul`
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  width: 80%;
  margin: 0 auto;
  justify-content: space-evenly;
  background-color: #fff;
  margin-top: 100px;
  border: 1px solid #ccc;
  padding: 20px 0;
  border-radius: 10px;
  li {
  }
  @media (min-width: 1280px) {
    display: none;
  }
`
