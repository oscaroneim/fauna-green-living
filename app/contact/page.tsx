import MaxWidthWrapper from 'components/max-width-wrapper';
import Image from 'next/image';
import forest from 'public/contact-form.jpeg';
import banner from 'public/forest-image.png';
import Form from './form';

export default async function ContactForm() {
  return (
    <MaxWidthWrapper className="space-y-6">
      <div className="bg-customLightGreen">
        <h1 className="text-5xl text-customDarkGreen">Contact us</h1>
        <h4 className="text-customGrey">Here To Bee Of Service</h4>
        <Image
          className="  h-120 w-80 rounded-lg object-cover"
          src={forest}
          alt="Picture of the man in forest"
        />
        <Form></Form>
      </div>

      <div className="relative">
        <Image className="w-full rounded-lg" src={banner} alt="Picture of the man in forest" />
        <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-lg px-4 py-2 text-5xl text-white">
          Frequently asked questions
        </h1>
      </div>
      <div className="h-[410px] rounded-lg bg-customDarkGreen text-white">
        <h1>Need To Fill</h1>
      </div>
    </MaxWidthWrapper>
  );
}
