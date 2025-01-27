import Image from "next/image";
import ExperienceChecklist from "@/components/Checklist/Checklist";
import {socialLinks} from "@/config/nav";
import Gallery from "@/components/Gallery/Gallery";

export default async function CurriculumGap() {


    return (
        <>
            <div
                className="grid pb-20 xs:p-20 sm:pt-10 font-[family-name:var(--font-geist-sans)] bg-[url('/img/slider-01-bg-2.png')] bg-center bg-no-repeat">

                <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

                    <div className="mx-auto ">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                            {/* Left Content */}
                            <div className="w-full md:w-5/12 space-y-8">


                                {/* Mobile Image */}
                                <div className="w-100 ml-10 mr-10 md:hidden sm:block">
                                    <div className="relative">
                                        <div
                                            className="bg-purple-100 drop-shadow-[10px_10px_0px_#e5d4ff] rounded-[60px] max-h-[500px] overflow-hidden">
                                            <Image
                                                width={1536}
                                                height={1536}
                                                src="/img/curriculum-gap-hero.jpg"
                                                alt="Curriculum gap hero"
                                                className="object-contain object-bottom"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Welcome Text */}
                                <div className="space-y-4">
                                    <p className="text-orange-400 uppercase font-subheaders tracking-wider text-xl">Academic and Practical Skills</p>
                                    <h1 className="text-4xl md:text-5xl font-headers text-orange-500">The Gap in the Current Curriculums</h1>
                                </div>

                                {/* Description Paragraphs */}
                                <div className="space-y-6 text-neutral-600 font-light leading-relaxed">
                                    <p>We deliver learning programs that bridge the large gap between the Preschool and Kindergarten NSW curriculum. As you can see below, it is a big jump in academic expectations, so providing your child with the opportunity to get ahead of the curveball and stay ahead of it, is the service we offer.</p>

                                    <p>Not only do we target the newly reformed curriculum set by NESA, we also focus on the practical skills your child will need in order to display independence and ultimately succeed. From our experience, these practical skills are just as important as the academic skills. Find out more below.</p>
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
                            <div
                                className="w-full hidden md:block md:w-6/12 md:pl-16 md:mr-32 sm:mr-0 sm:pl-0 min-[768px]:pl-0 min-[768px]:mr-0 min-[1024px]:pl-16 min-[1024px]:mr-32">
                                <div className="relative">
                                    <div
                                        className="bg-purple-100 drop-shadow-[20px_20px_0px_#e5d4ff] rounded-[60px] max-h-[600px] overflow-hidden">
                                        <Image
                                            width={768}
                                            height={1152}
                                            src="/img/curriculum-gap-hero.jpg"
                                            alt="Curriculum gap hero"
                                            className="object-center object-bottom"
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
