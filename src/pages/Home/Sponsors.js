import React from 'react'
import Picsection from './Picsection'
import {Arraypic} from './Arraypic'

export default function Sponsors() {
  return (
    <section class="mt-5 pb-5">
      <div class="bg-color3 pb-5">
        <div class="container mt-5 pt-5">
          <h1 class="text-primary fw-bold">Sponsors</h1>
          <div class="row">
            {
              Arraypic.map((pic, ind) => {
            
                return (
                  <Picsection key={ind} imgsrc={pic} />
                )
              })

            }

          </div>
        </div>
      </div>
    </section>
  )
}
