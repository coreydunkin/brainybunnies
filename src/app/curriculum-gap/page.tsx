import Image from "next/image";
import ExperienceChecklist from "@/components/Checklist/Checklist";
import {socialLinks} from "@/config/nav";
import Gallery from "@/components/Gallery/Gallery";

export default async function CurriculumGap() {


    return (
        <>
            <div
                className="grid pb-20 xs:p-20 sm:pt-10 font-[family-name:var(--font-geist-sans)] bg-[url('/img/slider-01-bg-2.png')] bg-top bg-no-repeat">

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
                                    <p className="text-orange-400 uppercase font-subheaders tracking-wider text-xl">Academic
                                        and Practical Skills</p>
                                    <h1 className="text-4xl md:text-5xl font-headers text-orange-500">The Gap in the
                                        Current Curriculums</h1>
                                </div>

                                {/* Description Paragraphs */}
                                <div className="space-y-6 text-neutral-600 font-light leading-relaxed">
                                    <p>We deliver learning programs that bridge the large gap between the Preschool and
                                        Kindergarten NSW curriculum. As you can see below, it is a big jump in academic
                                        expectations, so providing your child with the opportunity to get ahead of the
                                        curveball and stay ahead of it, is the service we offer.</p>

                                    <p>Not only do we target the newly reformed curriculum set by NESA, we also focus on
                                        the practical skills your child will need in order to display independence and
                                        ultimately succeed. From our experience, these practical skills are just as
                                        important as the academic skills. Find out more below.</p>
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
                        <div className="py-10">

                            <h3 className="text-orange-500 font-subheaders uppercase text-lg text-center tracking-widest">The
                                current</h3>
                            <h2 className="text-center text-orange-500 font-headers text-6xl">Curriculums</h2>

                            <div className="flex flex-col md:flex-row items-top justify-between gap-12  text-neutral-600 font-light leading-relaxed  py-10">
                                <div className="w-full md:w-1/2 space-y-8">
                                    <h3 className="text-orange-500 text-3xl text-center font-headers">Early Years
                                        Learning Framework</h3>
                                    <p><strong>(Preschool)</strong> 5 Learning Outcomes</p>
                                    <ol className="list-decimal pl-5">
                                        <li><span>Children have a strong sense of identity.</span>
                                        </li>
                                        <li><span>Children develop their emerging autonomy, inter-dependence, resilience and sense of agency.</span>
                                        </li>
                                        <li><span>Children have a strong sense of wellbeing.</span>
                                        </li>
                                        <li><span>Children are confident and involved learners.</span>
                                        </li>
                                        <li><span>Children are effective communicators.</span>
                                        </li>
                                    </ol>
                                    <p>– Australian Children’s Education & Care Quality Authority (ACECQA)</p>
                                    <Image
                                        width={199}
                                        height={300}
                                        src="/img/early-years.png"
                                        alt="Early years hero"
                                        className="mx-auto pt-10 block"
                                    />
                                </div>
                                <div className="w-full md:w-1/2 space-y-8">
                                    <h3 className="text-orange-500 text-3xl text-center font-headers">Early Stage 1
                                        Curriculum</h3>
                                    <p><strong>(Kindergarten)</strong> English Outcomes only</p>
                                    <ol className="list-decimal pl-5">
                                        <li><span><strong>Oral Language and Communication:</strong> Communicates using interpersonal conventions and language.</span>
                                        </li>
                                        <li><span><strong>Vocabulary:</strong> Understands and effectively uses Tier 1 and 2 words.</span>
                                        </li>
                                        <li><span><strong>Phonological Awareness:</strong> Identifies, blends, segments and manipulates phonological units in spoken words.</span>
                                        </li>
                                        <li><span><strong>Print Conventions:</strong> Reads and writes from left to right, from top to bottom and identifies features of print.&nbsp;</span>
                                        </li>
                                        <li><span><strong>Phonic Knowledge:</strong> Uses letter-sound relationships and simple digraphs to sound out and spell words.</span>
                                        </li>
                                        <li><span><strong>Reading Fluency:</strong> Reads decodable texts aloud with fluency.</span>
                                        </li>
                                        <li><span><strong>Reading Comprehension:</strong> Comprehends independently read texts.</span>
                                        </li>
                                        <li><span><strong>Creating Written Texts:</strong> Writes sentences with at least 2 related ideas and correct simple sentences.</span>
                                        </li>
                                        <li><strong>Spelling</strong>: Spells words by sounding out and
                                            spells familiar high-frequency words whilst writing.
                                        </li>
                                        <li><span><strong>Handwriting:</strong> Forms all lower-case and upper-case letters.</span>
                                        </li>
                                    </ol>
                                    <p>– NSW Education Standards Authority (NESA)</p>
                                    <Image
                                        width={199}
                                        height={300}
                                        src="/img/stage-1.png"
                                        alt="Stage 1 hero"
                                        className="mx-auto pt-10 block"
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
