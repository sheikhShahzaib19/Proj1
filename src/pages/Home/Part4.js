import React from 'react'
import Sponsors1 from './Sponsors1'
import p1 from '../../images/apple.png'
import p2 from '../../images/cn.png'
import p3 from '../../images/mtv.png'
import p4 from '../../images/nike.png'
import p5 from '../../images/nasa.png'
import p6 from '../../images/adidas.png'
import p7 from '../../images/inc.png'
import p8 from '../../images/harley.png'
import p9 from '../../images/PUMA_THUMB_720x.jpg'
import p10 from '../../images/fila.png'
import p11 from '../../images/asus.png'

export default function Part4() {
    return (
        <section className="mt-5 pb-5">
            <div className="container mt-5 pt-5">
                <h1 className="text-primary font-weight-bold">Sponsors</h1>

                <div class="row">
                    <Sponsors1 imgsrc={p1} />
                    <Sponsors1 imgsrc={p2} />
                    <Sponsors1 imgsrc={p3} />
                    <Sponsors1 imgsrc={p4} />
                    <Sponsors1 imgsrc={p5} />
                    <Sponsors1 imgsrc={p6} />
                    <Sponsors1 imgsrc={p7} />
                    <Sponsors1 imgsrc={p8} />
                    <Sponsors1 imgsrc={p9} />
                    <Sponsors1 imgsrc={p10} />
                    <Sponsors1 imgsrc={p11} />
                </div>
            </div>
        </section>
    )
}
