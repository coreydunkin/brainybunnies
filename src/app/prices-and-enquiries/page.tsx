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

                <h1>Prices and Enquiries</h1>

            </div>
        </>
    );
}
