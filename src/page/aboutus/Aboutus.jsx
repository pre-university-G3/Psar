import img1 from '../../../src/assets/img1.png'
import img2 from '../../../src/assets/img2.png'
import logo1 from '../../../src/assets/logo1.png'
import img3 from '../../../src/assets/img3.png'
import logo2 from '../../../src/assets/logo2.png'
import img4 from '../../../src/assets/img4.png'
import logo3 from '../../../src/assets/logo3.png'
import logodana from '../../../src/assets/logodana.png'
import logophea from '../../../src/assets/logophea.png'
import logovengroth from '../../../src/assets/logovengroth.png'
import logolong from '../../../src/assets/logolong.png'
import logothearoth from '../../../src/assets/logothearoth.png'
import logovisal from '../../../src/assets/logovisal.png'
import logokheang from '../../../src/assets/logokheang.png'
import logopheng from '../../../src/assets/logopheng.png'
import logoheng from '../../../src/assets/logoheng.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faTelegram, faGithub  } from '@fortawesome/free-brands-svg-icons'

export default function Aboutus() {
    return(
       <>
       <div className="bg-[#f8f4ff] p-8">
            <div className="max-w-6xl mx-auto grid gap-6">
                {/* Section 1 */}
                <section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center bg-black text-white p-6 rounded-lg">
                    <div>
                        <h2 className="text-3xl font-bold mb-10 ">A Family That Keeps On Growing</h2>
                        <p className="mt-2 text-sm ">
                        We always aim to please the home market, supplying great computers smart phone tap late iWatch PC and hardware at great prices to non-corporate customers, through our large Melbourne CBD showroom and our online store.
                        Shop management approach fosters a strong customer service focus in our staff.
                        We prefer to cultivate long-term client relationships rather than achieve quick sales, demonstrated in the measure of our long-term success.
                        </p>
                    </div>
                    <div className='flex justify-end'>
                        <img 
                            src={img1}
                            alt="Office"
                            className="w-[60%] rounded-lg shadow-lg"
                        />
                    </div>
                </div>
                </section>
       {/* Section 2 */}     
                <section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center bg-gray-100 text-gray p-6 rounded-lg">
                <div className='flex justify-center'>
                        <img src={img2} alt="Office"
                            className="w-[50%] rounded-lg shadow-lg"/>
                    </div>
                    <div>
                        <div className='flex'>
                        <img 
                            src={logo1}
                            alt="Office"
                            className="w-[12%]"/>
                        <h2 className="text-4xl font-bold mb-10 ">Tech-7</h2>
                        </div>
                        <p className="mt-2 text-sm ">
                        T-7.com is a proudly USA owned, Melbourne based supplier of I.T. goods and services, operating since 2025. Our client base encompasses individuals, small business, corporate and government organizations. We provide complete business IT solutions, centered on high quality hardware and exceptional customer service.
                        </p>
                    </div>
                </div>
             </section>
          {/* Section 3 */}
            <section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center bg-black text-white p-6 rounded-lg">
                    <div>
                    <div className='flex'>
                        <img 
                            src={logo2}
                            alt="Office"
                            className="w-[10%]"/>
                        <h2 className="text-4xl font-bold mb-10 ">Now You're In Safe Hands</h2>
                        </div>
                        <p className="mt-2 text-sm ">
                        Experience a 40% boost in computing from last generation. MSI Desktop equips the 10th Gen. Intel® Core™ i7 processor with the upmost computing power to bring you an unparalleled gaming experience.
                        *Performance compared to i7-9700. Specs varies by model.
                        </p>
                    </div>
                    <div className='flex justify-end'>
                        <img 
                            src={img3}
                            alt="Office"
                            className="w-[60%] rounded-lg shadow-lg"/>
                    </div>
                </div>
            </section>

        {/* Section 4 */}
            <section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center bg-gray-100 text-gray p-6 rounded-lg">
                <div className='flex justify-center'>
                        <img 
                            src={img4}
                            alt="Office"
                            className="w-[50%] rounded-lg shadow-lg"/>
                    </div>
                    <div>
                        <div className='flex'>
                        <img 
                            src={logo3}
                            alt="Office"
                            className="w-[10%]"/>
                        <h2 className="text-3xl font-bold mb-10 ">The Highest Quality of Products</h2>
                        </div>
                        <p className="mt-2 text-sm ">
                        We guarantee the highest quality of the products we sell. Several decades of successful operation and millions of happy customers let us feel certain about that. Besides, all items we sell pass thorough quality control, so no characteristics mismatch can escape the eye of our professionals.
                        </p>
                    </div>
                </div>
          </section>
        </div>
    {/* section 5 */}
      <section>
           <h3 className="flex  justify-center m-auto  font-medium text-[35px] py-[40px]">
               OUR MENTOR
        </h3>
        <div className="w-[90%] h-[auto] bg-gray-100  m-auto    rounded-[20px]  grid max-sm:grid-cols-1   sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          <div className="w-[300px] h-[320px] bg-white m-auto rounded-[25px] max-sm:mt-[190px]  mt-[190px] mb-[200px] md:mb-[100px] ">
            <figure className="w-[210px] h-[210px] rounded-[150px] m-auto relative top-[-100px] bg-amber-200 border-[6px] ">
            <img 
               src={logopheng}
                  alt="Office"
                  className="w-[100%] rounded-lg shadow-lg" />
            </figure>
            <h3 className="flex w-full justify-center relative top-[-100px] text-[25px]">
              Kim Chansokpheng
            </h3>
            <p className="flex w-full justify-center relative top-[-100px] text-[20px]">
              Instructor
            </p>
            <ul className="flex justify-center relative gap-10 top-[-50px]">
                <li><FontAwesomeIcon icon={faLinkedin} size="2xl" /></li>
                <li><FontAwesomeIcon icon={faTelegram} size="2xl" /></li>
                <li><FontAwesomeIcon icon={faGithub} size="2xl" /></li>
              </ul>
          </div>
          <div className="w-[300px] h-[320px] bg-white m-auto rounded-[25px] max-sm:mt-[190px]  mt-[190px] mb-[200px] md:mb-[100px] ">
            <figure className="w-[210px] h-[210px] rounded-[150px] m-auto relative top-[-100px] bg-amber-200 border-[6px] ">
            <img 
               src={logophea}
                  alt="Office"
                  className="w-[100%] rounded-lg shadow-lg" />
            </figure>
            <h3 className="flex w-full justify-center relative top-[-100px] text-[25px]">
              Sin Sreyphea
            </h3>
            <p className="flex w-full justify-center relative top-[-100px] text-[20px]">
              Instructor
            </p>
            <ul className="flex justify-center relative gap-10 top-[-50px]">
                <li><FontAwesomeIcon icon={faLinkedin} size="2xl" /></li>
                <li><FontAwesomeIcon icon={faTelegram} size="2xl" /></li>
                <li><FontAwesomeIcon icon={faGithub} size="2xl" /></li>
              </ul>
          </div> 
        </div>
      </section>
      {/* section 6 */}
      <section>
        <h3 className="flex  justify-center m-auto  font-medium text-[35px] py-[40px]">
          OUR TEAM
        </h3>
        <div className="w-[90%] pt-[] h-[auto] bg-gray-100 m-auto pt-[90px] rounded-[20px] ">
          <div className="w-[300px] h-[320px] bg-white m-auto rounded-[25px] mt-[100px] max-sm:mt-[70px] ">
            <figure className="w-[210px] h-[210px] rounded-[150px] m-auto relative top-[-100px] border-[6px] ">
              <img 
                 src={logodana}
                      alt="Office"
                        className="w-[100%] rounded-lg shadow-lg"/>
            </figure>
            <h3 className="flex w-full justify-center relative top-[-100px] text-[25px]">
              Dorn Dana
            </h3>
            <p className="flex w-full justify-center relative top-[-100px] text-[20px]">
              Leader
            </p>
            <ul className="flex justify-center relative gap-10 top-[-50px]">
                <li><FontAwesomeIcon icon={faLinkedin} size="2xl" /></li>
                <li><FontAwesomeIcon icon={faTelegram} size="2xl" /></li>
                <li><FontAwesomeIcon icon={faGithub} size="2xl" /></li>
              </ul>
          </div>
          <div className="my-[50px] grid mt-[200px] pb-[70px] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            <div className="w-[300px] h-[320px] bg-white m-auto rounded-[25px]  ">
              <figure className="w-[210px] h-[210px] rounded-[150px] m-auto relative top-[-100px] bg-amber-200 border-[6px] ">
              <img 
                 src={logoheng}
                      alt="Office"
                        className="w-[100%] rounded-lg shadow-lg"/>
              </figure>
              <h3 className="flex w-full justify-center relative top-[-100px] text-[25px]">
                Keo Sreyheng
              </h3>
              <p className="flex w-full justify-center relative top-[-100px] text-[20px]">
                Front-End
              </p>
              <ul className="flex justify-center relative gap-10 top-[-50px]">
                <li><FontAwesomeIcon icon={faLinkedin} size="2xl" /></li>
                <li><FontAwesomeIcon icon={faTelegram} size="2xl" /></li>
                <li><FontAwesomeIcon icon={faGithub} size="2xl" /></li>
              </ul>
            </div>
            <div className="w-[300px] h-[320px] bg-white m-auto rounded-[25px] mt-[200px] md:mt-[0] lg:mt-[0] xl:mt-[0] ">
              <figure className="w-[210px] h-[210px] rounded-[150px] m-auto relative top-[-100px]  border-[6px] ">
              <img 
                 src={logovengroth}
                      alt="Office"
                        className="w-[100%] rounded-lg shadow-lg"/>
              </figure>
              <h3 className="flex w-full justify-center relative top-[-100px] text-[25px]">
                Lor Vengroth
              </h3>
              <p className="flex w-full justify-center relative top-[-100px] text-[20px]">
                Front-End
              </p>
              <ul className="flex justify-center relative gap-10 top-[-50px]">
                <li><FontAwesomeIcon icon={faLinkedin} size="2xl" /></li>
                <li><FontAwesomeIcon icon={faTelegram} size="2xl" /></li>
                <li><FontAwesomeIcon icon={faGithub} size="2xl" /></li>
              </ul>
            </div>
            <div className="w-[300px] h-[320px] bg-white m-auto rounded-[25px] mt-[200px] xl:mt-[0]">
              <figure className="w-[210px] h-[210px] rounded-[150px] m-auto relative top-[-100px] bg-amber-200 border-[6px] ">
              <img 
                 src={logothearoth}
                      alt="Office"
                        className="w-[100%] rounded-lg shadow-lg"/>
              </figure>
              <h3 className="flex w-full justify-center relative top-[-100px] text-[25px]">
                Oum Kunthearoth
              </h3>
              <p className="flex w-full justify-center relative top-[-100px] text-[20px]">
                Front-End
              </p>
              <ul className="flex justify-center relative gap-10 top-[-50px]">
                <li><FontAwesomeIcon icon={faLinkedin} size="2xl" /></li>
                <li><FontAwesomeIcon icon={faTelegram} size="2xl" /></li>
                <li><FontAwesomeIcon icon={faGithub} size="2xl" /></li>
              </ul>
            </div>
            <div className="w-[300px] h-[320px] bg-white m-auto rounded-[25px] mt-[200px] ">
              <figure className="w-[210px] h-[210px] rounded-[150px] m-auto relative top-[-100px] bg-amber-200 border-[6px] ">
              <img 
                 src={logovisal}
                      alt="Office"
                        className="w-[100%] rounded-lg shadow-lg"/>
              </figure>
              <h3 className="flex w-full justify-center relative top-[-100px] text-[25px]">
                Long Visal
              </h3>
              <p className="flex w-full justify-center relative top-[-100px] text-[20px]">
                Front-End
              </p>
              <ul className="flex justify-center relative gap-10 top-[-50px]">
                <li><FontAwesomeIcon icon={faLinkedin} size="2xl" /></li>
                <li><FontAwesomeIcon icon={faTelegram} size="2xl" /></li>
                <li><FontAwesomeIcon icon={faGithub} size="2xl" /></li>
              </ul>
            </div>
            <div className="w-[300px] h-[320px] bg-white m-auto rounded-[25px] mt-[200px]">
              <figure className="w-[210px] h-[210px] rounded-[150px] m-auto relative top-[-100px] bg-amber-200 border-[6px] ">
              <img 
                 src={logokheang}
                      alt="Office"
                        className="w-[100%] rounded-lg shadow-lg"/>
              </figure>
              <h3 className="flex w-full justify-center relative top-[-100px] text-[25px]">
                Sovann Sivkheang
              </h3>
              <p className="flex w-full justify-center relative top-[-100px] text-[20px]">
                Front-End
              </p>
              <ul className="flex justify-center relative gap-10 top-[-50px]">
                <li><FontAwesomeIcon icon={faLinkedin} size="2xl" /></li>
                <li><FontAwesomeIcon icon={faTelegram} size="2xl" /></li>
                <li><FontAwesomeIcon icon={faGithub} size="2xl" /></li>
              </ul>
            </div>
            <div className="w-[300px] h-[320px] bg-white m-auto rounded-[25px] mt-[200px] ">
              <figure className="w-[210px] h-[210px] rounded-[150px] m-auto relative top-[-100px] bg-amber-200 border-[6px] ">
              <img 
                 src={logolong}
                      alt="Office"
                        className="w-[100%] rounded-lg shadow-lg"/>
              </figure>
              <h3 className="flex w-full justify-center relative top-[-100px] text-[25px]">
                Srieng Menglong
              </h3>
              <p className="flex w-full justify-center relative top-[-100px] text-[20px]">
                Front-End
              </p>
              <ul className="flex justify-center relative gap-10 top-[-50px]">
                <li><FontAwesomeIcon icon={faLinkedin} size="2xl" /></li>
                <li><FontAwesomeIcon icon={faTelegram} size="2xl" /></li>
                <li><FontAwesomeIcon icon={faGithub} size="2xl" /></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h3 className="text-[30px] font-medium pl-[60px] max-sm:pl-[25px]">
          Contact Us
        </h3>
        <h3 className="pl-[45px] mt-[20px] max-sm:pl-[25px]">
          We love hearing from you, Our shop customers. <br />
          Please contact us and we will make sure to get back to you soon as we
          possible can.
        </h3>
        <div className="flex mt-[20px] pl-[45px] max-sm:pl-[25px] max-sm:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row">
          <div className="w-[50vw]  mb-[45px] max-sm:w-[100vw] sm:w-[100vw]">
            <h3 className="font-medium mb-[5px]">Your Name</h3>
            <label htmlFor="name" className="border-[0.5px] pb-[30px] rounded-[5px]">
              <input
                type="text"
                placeholder="Your Name"
                className="w-[90%] pb-[30px]  pl-[20px]  "
              />
            </label>
          </div>
          <div className=" w-[50vw] mb-[45px] max-sm:w-[100vw] sm:w-[100vw]">
            <h3 className="font-medium mb-[5px]">Your Email</h3>
            <label htmlFor="name" className="border-[0.5px] w-[45vw] pb-[30px] rounded-[5px]">
              <input
                type="text"
                placeholder="Your Email"
                className="w-[90%] pb-[30px]  pl-[20px]"
              />
            </label>
          </div>
        </div>
        <div className=" w-[50vw] pl-[45px]  mb-[40px] max-sm:pl-[25px] max-sm:w-[100vw] sm:w-[100vw] md:w-[50vw]  lg:w-[50vw]  xl:w-[50vw]">
          <h3 className="font-medium mb-[5px]">Your Phone Number</h3>
          <label htmlFor="name" className="border-[0.5px] pb-[30px] rounded-[5px]">
            <input
              type="text"
              placeholder="Your Phone number"
              className="w-[95%] pb-[30px]  pl-[20px]"
            />
          </label>
        </div>
        <div className=" w-[100vw] h-[210px] pl-[45px] max-sm:pl-[25px]">
          <h3 className="font-medium mb-[5px]">What on your mind?</h3>
          <label htmlFor="name" className="border-[0.5px] pb-[150px] rounded-[5px] ">
            <input
              type="text"
              placeholder="Got us a note and we will get back you as quick as possible"
              className="w-[95%]  pb-[150px] pl-[20px]"
            />
          </label>
        </div>
        <div className="w-full flex justify-center ">
        <button className="bg-blue-600 mt-[10px] py-[10px] px-[70px] rounded-4xl  text-white font-medium ">
          Submit
        </button>
        </div>
      </section>
        </div>     
       </>
    )
}
