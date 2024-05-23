import FAQSection from 'components/contact/components/FAQSection';
import ContactForm from 'components/contact/contact-form';
import Image from 'next/image';
import forest from 'public/contact-form.jpeg';

export default async function ContactPage() {
  return (
    <>
      <div className="mx-2">
        <div className="flex gap-x-10 rounded-lg bg-customLightGreen p-4 pt-4 md:h-[900px] lg:h-[700px] xl:h-[800px] xl:gap-x-32 xl:px-12 xl:pb-12 xl:pt-12 2xl:h-[950px]">
          <div className=" flex w-full flex-col gap-y-6">
            <h1 className="text-6xl font-bold text-customDarkGreen">Contact us</h1>
            <h4 className="text-2xl text-customGrey">Here To Be Of Service</h4>
            <ContactForm />
          </div>

          <Image
            className="h-full w-96 rounded-lg object-cover max-md:hidden lg:w-[508px]"
            src={forest}
            alt="Picture of the man in forest"
          />
        </div>

        <div className="bg-frequently-asked-trees rounded-lg bg-cover bg-center bg-no-repeat px-4 py-6 text-center text-4xl font-bold text-white ">
          Frequently asked questions
        </div>
        <div className="rounded-lg bg-customDarkGreen px-2 py-8 text-white">
          <FAQSection />
        </div>
      </div>
    </>
  );
}
