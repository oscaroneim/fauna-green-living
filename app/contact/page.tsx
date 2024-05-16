import ContactForm from 'components/contact/contact-form';
import MaxWidthWrapper from 'components/max-width-wrapper';
import Image from 'next/image';
import forest from 'public/contact-form.jpeg';

export default async function ContactPage() {
  return (
    <MaxWidthWrapper className="space-y-6">
      <div className="flex gap-x-10 bg-customLightGreen p-4 pt-4 md:h-[750px] lg:h-[673px] xl:gap-x-32 xl:px-12 xl:pb-12">
        <div className=" flex w-full flex-col gap-y-6">
          <h1 className="text-6xl font-bold text-customDarkGreen">Contact us</h1>
          <h4 className="text-2xl text-customGrey">Here To Bee Of Service</h4>
          <ContactForm />
        </div>
        <Image
          className="h-full w-96 rounded-lg object-cover max-md:hidden lg:w-[508px]"
          src={forest}
          alt="Picture of the man in forest"
        />
      </div>

      <div className="rounded-lg bg-frequently-asked-trees bg-cover bg-center bg-no-repeat px-4 py-6 text-center text-4xl font-bold text-white ">
        Frequently asked questions
      </div>
      <div className="h-[410px] rounded-lg bg-customDarkGreen text-white">
        <h1>Need To Fill</h1>
      </div>
    </MaxWidthWrapper>
  );
}