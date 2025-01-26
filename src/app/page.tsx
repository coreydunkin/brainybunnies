import Image from "next/image";
import HeaderContainer from "@/components/Header/HeaderContainer";
import FooterContainer from "@/components/Footer/FooterContainer";
import {socialLinks} from "@/config/nav";
import Gallery from "@/components/Gallery/Gallery";
import ExperienceChecklist from "@/components/Checklist/Checklist";


export default async function Home() {


  return (
      <>
        <div
            className="grid pb-20 xs:p-20 sm:pt-10 font-[family-name:var(--font-geist-sans)] bg-[url('/img/slider-01-bg-2.png')] bg-center bg-no-repeat">

          <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <div className="mx-auto ">
              <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                {/* Left Content */}
                <div className="w-full md:w-1/2 space-y-8">


                  {/* Mobile Image */}
                  <div className="w-100 ml-10 mr-10 md:hidden sm:block">
                    <div className="relative">
                      <div
                          className="bg-purple-100 drop-shadow-[10px_10px_0px_#e5d4ff] rounded-[60px] max-h-[500px] overflow-hidden">
                        <Image
                            width={1536}
                            height={1536}
                            src="/img/hero-mobile.jpg"
                            alt="Teacher reading to children"
                            className="object-contain object-bottom"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Welcome Text */}
                  <div className="space-y-4">
                    <p className="text-orange-400 uppercase font-subheaders tracking-wider text-xl">Welcome to</p>
                    <h1 className="text-4xl md:text-6xl font-headers text-orange-500">Brainy Bunnies</h1>
                  </div>

                  {/* Description Paragraphs */}
                  <div className="space-y-6 text-neutral-600 font-light leading-relaxed">
                    <p>At Brainy Bunnies, we understand the importance of Early Childhood development and the crucial
                      role it plays in preparing children for success in school and beyond! We offer both School
                      Readiness lessons (Pre-K) and Kindergarten to Year 2 targeted tuition in the comfort of your home
                      within the Sutherland Shire of Sydney!</p>

                    <p>We personalise each lesson to your child based on their strengths and their specific learning
                      needs or areas requiring further challenge. Our learning programs usually have a major focus on
                      Literacy and Numeracy skills dependent on the goal of the session. The educator can also assist
                      you in identifying additional areas of need before your child starts school, including speech
                      development, gross and fine motor development, as well as language and communication development.
                      We nurture each child to ensure they are growing into a well-rounded, confident child who is keen
                      and enthusiastic to tackle all challenges ahead.</p>
                  </div>
                  <ExperienceChecklist/>
                  {/* Social Links */}
                  <div className="flex justify-start space-x-6 py-2">
                    {socialLinks.map((link) => (
                        <a
                            key={link.id}
                            href={link.href}
                            className="text-orange-500 hover:text-orange-600"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                          <i aria-hidden="true" className={`${link.icon} mr-2`}/>
                          <span>{link.name}</span>
                        </a>
                    ))}
                  </div>
                </div>

                {/* Right Image */}
                <div
                    className="w-full hidden md:block md:w-2/6 md:pl-16 md:mr-32 sm:mr-0 sm:pl-0 min-[768px]:pl-0 min-[768px]:mr-0 min-[1024px]:pl-16 min-[1024px]:mr-32">
                  <div className="relative">
                    <div
                        className="bg-purple-100 drop-shadow-[20px_20px_0px_#e5d4ff] rounded-[60px] max-h-[600px] overflow-hidden">
                      <Image
                          width={768}
                          height={1152}
                          src="/img/hero.jpg"
                          alt="Teacher reading to children"
                          className="object-center object-bottom"
                      />
                    </div>
                  </div>
                </div>

              </div>
            </div>


            <div className="container mx-auto sm:pt-10 md:pt-20">
              <div className="flex flex-col min-[1024px]:flex-row gap-8">
                <div className="w-full min-[1024px]:w-1/2 max-[349px]:hidden">
                  <h3 className="text-2xl font-bold font-headers text-orange-500 mb-6">Instagram</h3>
                  <Gallery/>
                </div>
                <div className="w-full min-[1024px]:w-1/2 space-y-6 min-[1024px]:pl-16">
                  <h3 className="text-2xl font-bold font-headers text-orange-500">About Us: Meet the Educator</h3>
                  <div className="space-y-4 text-neutral-600">
                    <p>Welcome! My name is Mrs Nicole Dunkin, the director and educator at Brainy Bunnies. As a
                      qualified primary educator, I’ve worked with children from Pre-Kindergarten to Year 6 for over
                      seven years. My expertise lies in Early Education, with my experience being the Head of
                      Kindergarten for six years in the Independent School Sector.</p>
                    <p>For the past six years, I’ve been approached by parents asking for advice on preparing their
                      child for Kindergarten. In 2023, this inspired me to start this business, focusing on providing
                      personalised education in 1-on-1 or small group settings.</p>
                    <p>What sets us apart from larger tuition and school readiness businesses? I prioritise building
                      strong and meaningful relationships with both students and parents - getting to know everything
                      about the child, their interests and hobbies, their families and more. I pride myself in my
                      flexibility, positivity, enthusiasm, relatability and sense of humor, ensuring all my students
                      feel safe, secure and supported, and most importantly, that they have fun!</p>
                    <p>I emphasise hands-on learning tasks, as complimented with traditional pen-to-paper activities. I
                      believe that high-quality early education is transformative, and my mission is to instill a love
                      for learning, curiosity, discovery, and self-confidence in the children I work with.</p>
                    <p className="text-orange-500 font-bold">Nicole Dunkin</p>
                    <Image
                        width={224}
                        height={102}
                        src="/img/about-dino.png"
                        alt="Dino"
                        className="block m-auto pt-16"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </>
  );
}
