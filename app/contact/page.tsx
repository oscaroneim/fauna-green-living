import FAQSection from 'components/contact/components/FAQSection';
import ContactForm from 'components/contact/contact-form';
import Head from 'next/head';
import Image from 'next/image';
import forest from 'public/contact-form.jpeg';

export default async function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us - Sustainable Living Products</title>
        <meta
          name="description"
          content="Get in touch with us for inquiries about our eco-friendly and sustainable living products. We're here to help you embrace a zero waste lifestyle."
        />
        <meta
          name="keywords"
          content="Contact, Eco-friendly, Sustainable living, Zero waste, Green living, Ethical products, Environmentally conscious, Customer service"
        />
      </Head>

      <div className="mx-2">
        <div className="flex gap-x-10 rounded-md bg-customLightGreen p-4 pt-4 md:h-[900px] lg:h-[700px] xl:h-[800px] xl:gap-x-32 xl:px-12 xl:pb-12 xl:pt-12 2xl:h-[950px]">
          <div className=" flex w-full flex-col gap-y-6">
            <h1 className="text-5xl font-bold text-customDarkGreen">Contact us</h1>
            <h4 className="text-xl text-customGrey">Here To Be Of Service</h4>
            <ContactForm />
          </div>

          <Image
            className="h-full w-96 rounded-md object-cover max-md:hidden lg:w-[508px]"
            src={forest}
            alt="Picture of the man in forest"
          />
        </div>
        <br></br>

        <div className="rounded-md bg-frequently-asked-trees bg-cover bg-center bg-no-repeat px-4 py-10 text-center text-4xl font-bold text-white ">
          Frequently asked questions
        </div>

        <div className="rounded-md bg-white px-2 py-8 text-white">
          <FAQSection />
        </div>
      </div>
    </>
  );
}
