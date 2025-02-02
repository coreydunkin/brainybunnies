import Image from "next/image";
import ExperienceChecklist from "@/components/Checklist/ExperienceChecklist";
import {socialLinks} from "@/config/nav";
import Gallery from "@/components/Gallery/Gallery";
import PracticalChecklist from "@/components/Checklist/PracticalChecklist";

export default async function PricesAndEnquiries() {


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
                                            className="bg-purple-100 drop-shadow-[10px_10px_0px_#e5d4ff] rounded-[60px] max-h-[500px]">
                                            <Image
                                                width={1536}
                                                height={1536}
                                                src="/img/prices-hero.jpg"
                                                alt="Priceshero"
                                                className="object-contain object-bottom rounded-[60px]"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Welcome Text */}
                                <div className="space-y-4">
                                    <h1 className="text-4xl md:text-5xl font-headers text-orange-500">Flexible Lessons</h1>
                                </div>

                                {/* Description Paragraphs */}
                                <div className="space-y-6 text-neutral-600 font-light leading-relaxed">
                                    <p>We understand that each child is unique and has varying educational needs. With our School Readiness learning, the teacher will observe and assess throughout your child’s first lesson to see where to start from, meet your child there and create a progressive learning program to build on each week. These sessions will include foundational skills in Literacy and Numeracy. </p>
                                    <p>If you require Kindergarten to Year Two tuition for your child, you probably already have an idea based on Parent Teacher Interviews or your child’s Semester Report, what skills you’d like me to support your child with (Literacy and/or Numeracy). The educator may request an emailed copy of your child’s last report or an email from their teacher to understand the full scope of skills and knowledge on a topic for lesson planning purposes. </p>
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
                                            src="/img/prices-hero.jpg"
                                            alt="Prices hero"
                                            className="object-center object-bottom"
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="pt-0 sm:pt-20">
                            <div
                                className="flex flex-col md:flex-row items-top justify-between gap-12  text-neutral-600 font-light leading-relaxed text-lg  py-10">
                                <div className="w-full md:w-1/2 space-y-8">
                                    <h3 className="text-orange-500 text-3xl text-left sm:text-center font-headers">Prices </h3>
                                    <ul className="list-disc pl-5">
                                        <li><span className="font-medium">Kindergarten to Year 2 Tuition:</span> Flexible - <span className="font-medium text-orange-500">$100 for 1 hour</span> or <span className="font-medium text-orange-500">$145 for 1.5 hours</span> (duration per child is flexible, i.e. older sibling may have longer lesson than younger sibling if required etc)
                                        </li>
                                        <li><span className="font-medium">1:1 Mobile K-2 tutoring lesson:</span> <span className="font-medium text-orange-500">$75 for a 45 minute session</span>
                                        </li>
                                        <li><span className="font-medium">1:1 Mobile Year 2 only tutoring lesson:</span> <span className="font-medium text-orange-500">$100 for 1 hour session</span> (not suitable for all)
                                        </li>
                                        <li><span className="font-medium">1:1 Mobile back to back Siblings lesson:</span> Flexible - <span className="font-medium text-orange-500">$100 for 1 hour</span> or <span className="font-medium text-orange-500">$145 for 1.5 hours</span> (duration per child is flexible, i.e. older sibling may have longer lesson than younger sibling if required etc)
                                        </li>
                                    </ul>
                                    <Image
                                        width={300}
                                        height={166}
                                        src="/img/counters_01-300x166.png"
                                        alt="Prices hero"
                                        className="mx-auto pt-0 block max-w-40 sm:pt-10 sm:max-w-full"
                                    />
                                </div>
                                <div className="w-full md:w-1/2 space-y-8">
                                    <h3 className="text-orange-500 text-3xl text-left sm:text-center font-headers">Enquires</h3>
                                    <p>Please contact us via email or DM us on Instagram for all enquiries:</p>
                                    <ul>
                                        {socialLinks.toReversed().map((link) => (
                                            <li key={link.name}>
                                                <a
                                                    key={link.id}
                                                    href={link.href}
                                                    className="text-orange-500 hover:text-orange-600"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <i aria-hidden="true" className={`${link.icon} mr-2`}/>
                                                    <span><span className="font-medium">{link.name}</span>: {link.alt}</span>
                                                </a>
                                            </li>

                                        ))}
                                    </ul>
                                    <p>Ensure you give us a little information about your child in your initial enquiry so we can assist as promptly as possible. For example: your child’s name, age, learning focus, your suburb (lesson location within Sutherland Shire or close to), days/times you are interested in.</p>
                                    <Image
                                        width={199}
                                        height={300}
                                        src="/img/early-years.png"
                                        alt="Early years hero"
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
