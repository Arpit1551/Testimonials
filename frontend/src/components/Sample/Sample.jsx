import React from 'react'
import ReplyOne from '../Reply/ReplyOne'
import ReplyTwo from '../Reply/ReplyTwo'
import './Sample.css';

function Sample() {
  return (
    <>
      <div className="Container flex flex-col justify-center items-center bg-[rgb(21,23,25)] py-14">
        <div className='flex justify-center items-center text-center flex-col w-[50%]'>
          <h1 className='text-white text-[3rem] font-bold leading-10'>Add testimonials to your website with no coding!</h1>
          <p className='text-[rgb(155,169,180)] py-6 text-[1.2rem]'>Copy and paste our HTML code to add the Wall Of Love <a href="#">(👉 full version)</a> to your website. We support any no-code platform (Webflow, WordPress, you name it!)</p>
        </div>
        <div className='sampleMain'>

          <div className='sampleOne'>
            <ReplyTwo
              Video={"../../../high.mp4"}
              Poster={'../../../thumbnail-1.jpg'}
              Name={'Blaine Anderson'}
              About={'CEO and founder of Dating by Blaine'}
              Content={' " Once we added Testimonial, it unlocked so much more conversion for us! 🔥" '}
            />
          </div>

          <div className='sampleTwo'>
            <ReplyOne
              Text={'I LOVE Testimonial and so does our entire company! In just one month of being a customer, I have been thoroughly impressed by the speed of innovation and new features released. The team is constantly open to my feedback and not only listens to what I have to say but makes my ideas happen.'}
              Name={'Arpit Sharma'}
              About={'Head of Customer Marketing & Community, Mixpanel'}
              Profile={"https://firebasestorage.googleapis.com/v0/b/testimonialto.appspot.com/o/testimonials%2Fresized-avatar%2F074e3d59-19c9-4b21-9ae3-47649d5c362f%2Favatar-resized?alt=media&token=e38d52bf-d068-4cd1-a494-3e64e67ccfa1"}
              Company={"/partner-5.png"}
            />
          </div>

          <div className="sampleThree">
            <ReplyTwo
              Name={'Justin Welsh'}
              About={'Founder of The Saturday Solopreneur'}
              Content={'"For the small price I pay, it’s 3X’d conversions with such a massive ROI!"'}
              Poster={'../../../thumbnail-2.jpg'}
            />
          </div>

          <div className="sampleFour">
            <ReplyOne
              Name={'Madeleine Work'}
              About={'Content Marketing Manager at Chili Piper 🌶️'}
              Text={'Chili Piper just implemented our Wall of Love using Testimonial. So far results have been 🔥🔥🔥Check it out: chilipiper.com/wall-of-love'}
              Profile={'https://firebasestorage.googleapis.com/v0/b/testimonialto.appspot.com/o/linkedin-profile-image%2Fmadeleinework?alt=media&token=8611470f-e1e6-46eb-be88-498e8a81b92d'}
            />
          </div>

          <div className="sampleFive">
            <ReplyTwo
              Content={'" Once we added Testimonial, it unlocked so much more conversion for us! 🔥"'}
              Name={'Zuhayeer Musa'}
              About={'Co-founder, Levels.fyi'}
              Poster={'https://image.mux.com/ExYWlahf4NUpGPbwuJBkELTAlSH1D01kCgaFDe00eTB2s/thumbnail.jpg?time=55.076&width=350'}
            />
          </div>

          <div className="sampleSix">
            <ReplyTwo
              Content={`"It's the easiest and simplest solution we found on the market!"`}
              Poster={'https://image.mux.com/my1pgRrHGSx1zILB9i7KVeWk39wUGtv9Y9qFX9017SlM/thumbnail.jpg?time=1&width=350'}
              Name={'Darren Westall'}
              About={'CEO of Paiger.co'}
            />
          </div>

          <div className="sampleSeven">
            <ReplyOne
              Text={'Testimonial.to has helped us seamlessly integrating tweets from Twitter into our Wall of Love. It allows us to showcase authentic testimonials and amplify our credibility as a trusted partner in helping startups get acquired. Testimonial.to has truly transformed our community building efforts and continues to drive'}
              Profile={'https://firebasestorage.googleapis.com/v0/b/testimonialto.appspot.com/o/testimonials%2F91fa1a6e-c1a8-4db4-8099-04eb2bd1618e%2Favatar?alt=media&token=aab5c174-ecc8-4d30-b224-69a9ffdb60f0'}
              Name={'Andrew Gazdecki'}
              About={'Founder and CEO of Acquire.com'}
              Company={'https://firebasestorage.googleapis.com/v0/b/testimonialto.appspot.com/o/testimonials%2F-NW9tNoDI9TISHO5srVg%2FcompanyLogo?alt=media&token=dccc4060-ccfe-47a9-8516-e7a240275860'}
            />
          </div>

          <div className="sampleEight">
            <ReplyOne
              Text={'Testimonial has been a big part of my conversions. I’ve had multiple customers tell me they bought vim.so because of the reviews 👍'}
              Name={'Kenneth Cassel'}
              Profile={'https://firebasestorage.googleapis.com/v0/b/testimonialto.appspot.com/o/testimonials%2Fresized-avatar%2Fbc68133b-6fae-453f-a08f-c6998ec129bb%2Favatar-resized?alt=media&token=06326552-b18e-4868-a6ea-55952998ef1c'}
              About={'Founder of Slip.so'}
              Company={'https://firebasestorage.googleapis.com/v0/b/testimonialto.appspot.com/o/testimonials%2F-MSnN8ut9o9urolRradK%2FcompanyLogo?alt=media&token=44aac8b3-530f-41fa-a10f-ae86795b1a5d'}
            />
          </div>

          <div className="sampleNine">
            <ReplyOne
              Text={`I've been using testimonial.tolast few weeks and I absolutely LOVE it❤️
                    
                    Once you start, you understand how it boosts your social proof. Worth every penny.

                    Thanks @damengchen for building it 🙏`} 

                Profile={'https://firebasestorage.googleapis.com/v0/b/testimonialto.appspot.com/o/twitter-profile-image%2Ftibo_maker-470129898?alt=media&token=45e0c052-7f96-42c4-9d71-0fa48efccdb0'}
                Name={'Tibo'}
                About={'@tibo_maker'}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Sample   