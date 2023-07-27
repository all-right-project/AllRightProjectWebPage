'use client'

import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import {Card, CardList} from '@/components/parts'
import CardContents from '@/components/project/CardContent'

type Props = {}

const page = (props: Props) => {
  const arr = [1, 2, 3, 4]
  return (
    <ProjectContainer>
      <h1>PROJECT</h1>
      <CardList>
        {arr.map(item => {
          return (
            <Link href={`/project/${item}`} key={item}>
              <Card>
                <CardContents></CardContents>
              </Card>
            </Link>
          )
        })}
      </CardList>
    </ProjectContainer>
  )
}

export default page

const ProjectContainer = styled.div`
  max-width: 1280px;
  margin: 70px auto 0;
  padding: 0 10px;
  h1 {
    margin: 30px 0;
  }
  @media (max-width: 1310px) {
    h1 {
      text-align: center;
    }
  }
`
