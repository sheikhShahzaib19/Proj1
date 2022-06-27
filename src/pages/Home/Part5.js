import React from 'react'
import Registration from './Registration'

export default function Part5() {
  const bronzeListing=['Expo','Seminar','Live Concert','Expo Party']
  return (
    <section className="image3 mt-5">
    <div className="bg-color4 pb-5">
    <div className="container pt-5 pb-2">
    <h1 className="text-white">Registration Pricing</h1>
    <div className="row align-content-center">

            <Registration 
            title='Bronze'
            price='50'
            statement='1st day of first person'
            listing={bronzeListing}
            />
            <Registration 
            title='Bronze'
            price='70'
            statement='2nd day of first person'
            listing={bronzeListing}
            />
            <Registration 
            title='Bronze'
            price='80'
            statement='3rd day of first person'
            listing={bronzeListing}
            />

            <Registration 
            title='Bronze'
            price='90'
            statement='4th day of first person'
            listing={bronzeListing}
            />

        </div>
        </div>
        </div>
     </section>   
  )

}
