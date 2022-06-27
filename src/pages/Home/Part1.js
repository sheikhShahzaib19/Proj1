import p1 from '../../images/about-us.png';
import p2 from '../../images/section_01.jpg'
import Firstsec from './Firstsec';


    const Part1=()=>{
        return(
            <>
            <div className="container">
            <div className="row mt-4">
          <Firstsec 
          imgsrc={p1}
            title=  'About Us'
            text=  'You have inspired new consumer, racked up click-thrus, blown-up brand enes. We cant give you back the weekends you worked, or erase the pain ebeing to make the logo bigger. But if you submit your best work we ajusts might be able to give the chance to show you best digital marketing CES is the worlds gathering place for all'
        />
            <Firstsec imgsrc={p2}
            title='What is our goal'
            text='Hear 9 inspiring talks, meet the best product people in Europe, and party together after the event! Twice a year, a group of interesting and impactful people gathers for the week-long experience which attendees have described as “the ultimate brain spa” and “a journey into the future in the company of those creating it.”year,a group of interesting and impactful people gathers for the week-long experience — which attendees have described as “the ultimate brain spa” and “a journey into the future in the company of those creating it.'
        />
          </div>
            </div>
        </>
        )}

    
  
export default Part1;
