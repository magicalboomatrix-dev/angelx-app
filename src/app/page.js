import React from 'react'
import Link from 'next/link'
import styles from "./page.module.css";

const LandinPage = () => {
  return (
    <div className='landingPage'>
      <main className={styles.pagenotcenter} style={{width:'100%',display:'block'}}>
        <div className="page-wrappers">
          <div className="page-wrapper-login"></div>
           <div className='top-part'>
            <div className='logo-icon'><img src="images/applinkimg.jpeg"/></div>
            <div className='desc-right'>
                <h1>AngelX</h1>
                <h4>HTTPS://WWW.ANGELX.CO/</h4>
                <Link href="#" className='btn'>Download</Link>
            </div>
           </div>
            <section className="section-01">
            <div className='wrap-rw'>
                <div className='bx'>
                    <h4>15K RATINGS</h4>
                    <h2>4.8</h2>
                    <div className="rating rating2">
                        <a href="#5" title="Give 5 stars">★</a>
                        <a href="#4" title="Give 4 stars">★</a>
                        <a href="#3" title="Give 3 stars">★</a>
                        <a href="#2" title="Give 2 stars">★</a>
                        <a href="#1" title="Give 1 star">★</a>
                    </div>
                </div>

                <div className='bx'>
                    <h4>AGES</h4>
                    <h2>4+</h2>
                    <div className="text">In-App Controls</div>
                </div>

                <div className='bx'>
                    <h4>DEVELOPER</h4>
                    <h2><i className='fa fa-user'></i></h2>
                    <div className="text">AngelX Ind</div>
                </div>

                <div className='bx'>
                    <h4>LANGUAGE</h4>
                    <h2>EN</h2>
                    <div className="text">+ 10 More</div>
                </div>

                <div className='bx'>
                    <h4>SIZE</h4>
                    <h2>460.04</h2>
                    <div className="text">MB</div>
                </div>

            </div>
            </section>

            <section className="section-inc section-02">
                <h2 className='title'>What's New <div className="arw-btn"><img src="/images/back-btn.png"/></div></h2>
                <div className='flx'><div className='version'>Version 3.11.2</div> <div className='time'>1w ago</div></div>
                <div className='para'><p>We'hv made performance improvements and fixed bugs. Look forward to future updates.</p></div>
            </section>

            <section className="section-preview section-03">
                <h2>Preview </h2>
                <div className='prev-image'><img src="images/AngelX-prev.jpg" /></div>
            </section>

            <section className="section-inc section-wnw section-04">
                <h2 className='title'>Ratings & Reviews <div className="arw-btn"><img src="/images/back-btn.png"/></div></h2>
                <div className='rating-info flx'>
                    <h2>4.8</h2>
                    <div className='ri-rating'>
                        <div className="rating rating2">
                            <a href="#5" title="Give 5 stars">★</a>
                            <a href="#4" title="Give 4 stars">★</a>
                            <a href="#3" title="Give 3 stars">★</a>
                            <a href="#2" title="Give 2 stars">★</a>
                            <a href="#1" title="Give 1 star">★</a>
                        </div>
                        <div className='txt'>15K Ratings</div>
                    </div>
                </div>                
            </section>

            <section className="section-inc section-privacy section-05">
                <h2 className='title'>App Privacy <div className="arw-btn"><img src="/images/back-btn.png"/></div></h2>
                <div className='para'><p>
The developer, AngelX, indicated that the app's privacy practices may include
handling of data as described below. </p></div>        
                <div className='round-bx'>
                    <div className='bx'>
                        <div className='icon'><img src="images/tp-icon.jpg"/></div>
                        <h4><b>Data Used to Track You</b></h4>
                        <div className='para'><p>The following data may be used to track you across apps and websites owned by other companies:</p></div>    
                    </div>

                    <div className='bx'>
                        <div className='icon'><img src="images/tp-icon2.jpg"/></div>
                        <h4><b>Data Linked to You</b></h4>
                        <div className='para'><p>The following data may be collected and linked to your identify:</p></div>    
                    </div>

                    <div className='bx'>
                        <div className='icon'><img src="images/tp-icon3.jpg"/></div>
                        <h4><b>Data Not Linked to You</b></h4>
                        <div className='para'><p>The following data may be collected but it is not linked to your identify:</p></div>    
                    </div>

                    <div className='para' style={{paddingTop:'20px'}}><p>
Privacy practices may vary, for example, based on
the features you use or your age.  <Link href="#" style={{color:'#0076db'}}>Learn More</Link></p></div>    
                </div>      
            </section>

            <section className="section-inc section-information section-02">
                <h2 className='title'>Information </h2>
                <div className='flx-wrap'>
                    <div className='flx rw'>
                    <div className='version'>Buyer</div> <div className='time'>AngelX </div>
                    </div>
                    <div className='flx rw'><div className='version'>Size</div> <div className='time'>460.04 MB </div></div>
                    <div className='flx rw'><div className='version'>Category</div> <div className='time'>Business </div></div>
                    <div className='flx rw'><div className='version'>Language</div> <div className='time'>English </div></div>
                    <div className='flx rw'><div className='version'>Age Rating</div> <div className='time'>4+ </div></div>
                    <div className='flx rw'><div className='version'>Copyright</div> <div className='time'>© 2021 - 2026 angelx.pro </div></div>
                    <div className='flx rw'><div className='version' style={{color:'#0076db'}}>Developer Website</div> <div className='icon'><img src="images/tp-icon4.jpg" style={{maxWidth:"30px"}}/></div></div>
                </div>
            </section>
        
        </div>
      </main>

    </div>
  )
}

export default LandinPage
