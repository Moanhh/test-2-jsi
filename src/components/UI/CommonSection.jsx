import React from 'react'
import './commonSection.css'

import {Container} from 'reactstrap'



function CommonSection({title}) {
  return (
    <>
        <section className="common_section">
            <Container className="text-center">
                <h1>{title}</h1>
            </Container>
        </section>
    </>
  )
}

export default CommonSection