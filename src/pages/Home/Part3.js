import React from 'react'
import pic from "../../images/t1.png"
import p1 from '../../images/t15.png'
import p2 from '../../images/t16.jpg'
import p3 from '../../images/t11.jpg'
import p4 from '../../images/t13.jpg'
import p5 from '../../images/t10.jpg'
import p6 from '../../images/t9.jpg'
import Speakers from './Speakers'

// import {icon} from 'fab fa-twitter'

export default function Part3() {
  return (
    <section className='mt-5'>
    <div className="container">
        <div className="row">
        <div className="col-lg-3 col-12">
            <h2 className="text-primary fw-bold">Our Speakers</h2>
          <p className="mt-3">        
          <small>
          Dummy text 2019 meshes international stars of the digital marketing scene, up-and-coming players and hidden champions of the industry.
          Simultaneously, we’re giving you a solid mix of absolute experts with profound insights and engaging personalities, who you wouldn’t typically associate with marketing at first glance. Here’s a small taste of what’s to come Here’s a small taste of what’s to come</small></p> 
          <button className="btn btn-block btn-primary">Apply to speak now</button>
          </div>
          
          <div className="col-lg-9 mt-4">
          <div className="row">
              <div className="col-lg-5 col-md-6 col-12">
                <img src={pic} width="100%" height="auto" className="img-fluid rounded" alt="" />
              </div>
              <div className="col-lg-7 col-12 col-md-6">
               <h3 className="text-primary pb-0"> KARA SWUSGER</h3>
             <h5>FOUNDER & CEO</h5>
             <p className="para1">
        <i>kara swusger is the ceo and founder of houzz, a home re-modeling and design platform, bringing together both professionals and homeowners via mobile, local and social tools. adi and her husband alon cohen started houzz after facing challenges during their own re-modeling process. today, millions of homeowners and more than 2.3 million active home professionals connect through houzz.com and its mobile apps every month, sharing their photos, advice and product recommendations.</i></p>
              </div>
            </div>
            <div className="row">
           <Speakers  imgsrc={p1}
           title='RICHARD HENDRICKS'
           small='CEO OF PIEDPIPER'
           para='Richard hendricks CMO leading all global marketing, brand, content, digital, sponsorship, and customer experience for the company. Boff is also GE’s Vice President.'
           />
           <Speakers 
           imgsrc={p2}
           title="MONICA GELLER"
           small="FOUNDER OF QUICKER"
           para="Monica geller is the Founder of quicker, host of the Recode Decode podcast and co-executive producer of the Code Conference. She also is a contributing opinion writer for the New York Times."
           />
           <Speakers
           imgsrc={p3}
           title="RICHARD HENDRICKS"
           small="CEO OF PIEDPIPER"
           para="Richard hendricks CMO leading all global marketing, brand, content, digital, sponsorship, and customer experience for the company. Boff is also GE’s Vice President."
           />
           <Speakers
           imgsrc={p4}
           title="MONICA GELLER"
           small="FOUNDER OF QUICKER"
           para="Monica geller is the Founder of quicker, host of the Recode Decode podcast and co-executive producer of the Code Conference. She also is a contributing opinion writer for the New York Times."
           />
           <Speakers
           imgsrc={p5}
           title="PETER GREGORY"
           small="FOUNDER OF RAVIGA"
           para="Peter gregory Founder of raviga in June 2018 after serving as the company’s COO since 2015. She manages MZ’s worldwide strategy and operations."
           />
           <Speakers
           imgsrc={p6}
           title="ERLICH BACHMAN"
           small="CEO OF AVIATO"
           para="Erlich Bachman, is a CEO of Kader Food Center. He has been on the Forbes Midas List since 2050 and was also named one of “8 Rising Stars” by FORTUNE"
           />
              </div>
             
          </div>
        </div>
    </div>
         
    </section>
  )
}
