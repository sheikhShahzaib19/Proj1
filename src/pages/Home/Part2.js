import React from 'react'
import Organizers from './Organizers'
import pic from '../../images/t17.png'
import t1 from '../../images/t18.jpg'
import t2 from '../../images/t19.jpg'
import t3 from '../../images/t20.jpg'
import t4 from '../../images/t21.jpg'
import t5 from "../../images/organizer-bottom-logo-1.png"


export default function Part2() {
  return (
    <>
    <div class="img1 mt-5">
    <div class="bg-color">
      <div class="container">
   <h1 class="first_t">Organizers</h1>
    <div class="row">
     <div class="col-lg-3 d-none d-lg-block pt-5">
       <img src={pic} class="img-fluid h-100 rounded orgimg" alt=""/>
     </div>
     <div class="col-lg-9 pt-5 ">
       <div class="row">
       
          <Organizers 
          imgsrc={t1}
          title='RICARDO TAYLOR'
          text='CO-FOUNDER & CEO, AMGS'
          des='Senior Managing Director, is the Global Chief Marketing Officer of BlackRock. He is a member of the Global Executive Committee and Global Operating.'
/>
         <Organizers imgsrc={t2}
         title='ROSS FLINTCH'
         text='USER EXPERIENCE DESIGNER'
         des='CEO of MZ in June 2018 after serving as the company’s COO since 2015. She manages MZ’s worldwide strategy and operations and has overseen the company’s growth into a gaming giant lore.'
         />
         <Organizers imgsrc={t3}
         title='MAX HUGHES'
         text='DATA ANALIST, GANT LTD'
         des='Max Hughes is the Chief Executive Officer and serves on the Board of Directors for Sonos and director of MNG.'
         />
         <Organizers imgsrc={t4}
         title='EV WILLIAMS'
         text='USER EXPERIENCE,DIGNET'
         des='The future belongs to the connected. Commissioner of the FCC. Impatient optimist. Mom, wife, inveterate coffee drinker.'
        />
       </div>
       </div>
    
    </div>
    <hr class="mt-5 bg-secondary" width="100%" />
    <div class="row mt-5 d-flex pb-5 text-center">
        <Organizers imgsrc1={t5}
          />
          
          {/* <div class="col-lg-2 col-6 col-sm-4 col-md-4">
            <img src="image/organizer-bottom-logo-2.png" class="img-fluid" alt="">
          </div>
          <div class="col-lg-2 col-4 col-sm-4 col-md-4">
            <img src="image/organizer-bottom-logo-6.png" class="img-fluid" alt=""/>
          </div>
          <div class="col-lg-2 col-4 mt-1 col-sm-4 col-md-4"> */}
            {/* <img src="image/ferrari.png" class="img-fluid" alt=""/>
          </div>
          <div class="col-lg-2 col-4 col-sm-4 col-md-4">
            <img src="image/ford.png" class="img-fluid" alt="">
          </div>
          <div class="col-lg-2 col-12 col-sm-4 col-md-4">
            <img src="image/organizer-bottom-logo-5.png" class="img-fluid" alt="">
          </div> */}
        </div>

    </div>
    </div>
    </div>
    
    </>
  )
}
