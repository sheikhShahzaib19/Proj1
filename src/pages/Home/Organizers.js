import React from 'react'

export default function Organizers(props) {
  return (
    <>
         <div class="col-lg-6 col-md-6 mt-2">
           <div class="row">
             <div class="col-lg-5 col-5 ">
              <img src={props.imgsrc} alt="" class="img-fluid"/>
             </div>
             <div class="col-lg-7 col-7 pl-0">
             
                <h6 class="font-weight-bolder mb-0 text-white">{props.title} </h6>
                <small class="head mb-0 text-white">{props.text}</small>
                <p class="mb-0 text-white">
                <i class="fab fa-twitter mr-2"></i>
                <i class="fab fa-linkedin-in mr-2"></i> 
                <i class="fab fa-google-plus-g"></i></p> 
              <p class="content1 text-white">{props.des}
               </p>           
                </div>
             </div>
           </div>
           {/* <div class="col-lg-2 col-6 col-sm-4 col-md-4">
            <img src={props.imgsrc1} className="img-fluid" alt="" />
          </div>     */}


    </>
  )
}
