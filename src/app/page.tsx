import Image from "next/image";
import HeaderContainer from "@/components/Header/HeaderContainer";
import FooterContainer from "@/components/Footer/FooterContainer";
import {socialLinks} from "@/config/nav";

export default function Home() {
  return (
      <>
        <div
            className="grid p-8 pb-20 sm:p-20 sm:pt-10 font-[family-name:var(--font-geist-sans)] bg-[url('/img/slider-01-bg-2.png')] bg-center bg-no-repeat">
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <div className="mx-auto ">
              <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                {/* Left Content */}
                <div className="w-full md:w-1/2 space-y-8">



                  {/* Mobile Image */}
                  <div className="w-100 ml-10 mr-10 md:hidden sm:block">
                    <div className="relative">
                      <div className="bg-purple-100 drop-shadow-[10px_10px_0px_#e5d4ff] rounded-[60px] max-h-[500px] overflow-hidden">
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
                      role it plays in preparing children for success in school and beyond!</p>

                    <p>Our specialised programs are designed to assess, target specific needs, and support the
                      development of children between the ages of 4 to 8.</p>

                    <p>Our comprehensive learning programs have a major focus on addressing Literacy and Numeracy needs,
                      but also takes a holistic approach by identifying additional areas of need, including speech
                      development, gross and fine motor development, as well as language and communication development,
                      to support the whole child.</p>

                    <p>Most parents often forget that when their child is starting 'big school', this involves the child
                      having a higher level of independence in practical, everyday skills. We purposefully focus on
                      these skills during our lesson and encourage continual growth in this area.</p>
                  </div>

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
                <div className="w-full md:block sm:hidden md:w-2/5 md:pl-12">
                  <div className="relative">
                    <div className="bg-purple-100 drop-shadow-[20px_20px_0px_#e5d4ff] rounded-[60px] max-h-[600px] overflow-hidden">
                      <Image
                          width={768}
                          height={1152}
                          src="/img/hero.jpg"
                          alt="Teacher reading to children"
                          className="object-contain object-center"
                      />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </main>
        </div>
      </>
  );
}
