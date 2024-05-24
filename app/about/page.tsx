import Head from 'next/head';
import Image from 'next/image';
import bamboo from 'public/bamboo-2.jpeg';
import kim from 'public/Kim headshot.jpg';
import PlasticWasteStats from '../../components/plastic-waste-stats';
import dear from '../../public/LogoImages/dear.png';

export default async function About() {
  return (
    <>
      <Head>
        <title>About Us - Eco-Conscious & Sustainable Living</title>
        <meta
          name="description"
          content="Learn more about our mission to provide eco-friendly and sustainable living products. Join us in embracing a zero waste lifestyle."
        />
        <meta
          name="keywords"
          content="Eco-conscious, Sustainable living, Environmentally friendly, Ethical products, Green living, Mindful living, Reduce, reuse, recycle, Eco-minded, Nature-inspired"
        />
      </Head>
      <div className="flex w-full gap-6 max-md:flex-col md:h-[520px] ">
        <div className="space-y-4  rounded-lg bg-customGreen p-10 text-center text-white md:hidden">
          <h2 className="text-5xl font-bold ">OUR MISSION</h2>
          <p className="text-xl">Make Our Planet Clean Again</p>
        </div>
        <div className="flex">
          <Image className="rounded-lg object-cover" src={dear} alt="Picture of the deer" />
        </div>
        <div className="flex shrink-0 flex-col gap-y-6 md:basis-[500px] ">
          <div className="space-y-4 rounded-lg bg-customGreen p-10 text-center text-white max-md:hidden  ">
            <h2 className="text-5xl  font-bold ">OUR MISSION</h2>
            <p className="text-xl">Make your home beautiful and sustainable</p>
          </div>
          <div className="grow space-y-4 rounded-lg bg-customDarkGreen p-10 text-center text-white ">
            <h2 className="text-5xl font-bold ">OUR VISION</h2>
            <p className="text-xl ">
              At Fauna Green Living, we envisage ourselves helping each and every individual do what
              they can to bring sustainability and responsibility back into our purchasing habits.
              We are here to provide sustainable ways to make your home beautiful
            </p>
          </div>
        </div>
      </div>
      <div className="space-y-8 rounded-lg bg-customGreen p-10 text-center text-white">
        <h2 className="text-5xl font-medium">How do we do it?</h2>
        <div className="flex gap-x-8 gap-y-10 text-xl max-md:flex-col ">
          <p className="md:basis-1/3 ">All of our products are handmade in Cambridgeshire, UK</p>
          <p className="md:basis-1/3">
            We use local, recycled, or compostable products, wherever possible
          </p>
          <p className="md:basis-1/3">
            We are always looking for the most sustainable ways of producing everyday products
          </p>
        </div>
      </div>

      <div className="flex w-full items-center justify-between gap-10 rounded-lg bg-customDarkGreen p-10 text-white max-md:flex-col  md:h-[664px] md:flex-row ">
        <div className=" flex flex-col gap-y-10 text-center md:w-1/2">
          <h2 className="text-5xl font-bold ">Our Story</h2>
          <p className="text-xl">
            We opened our doors in August of 2022 because we wanted to make your homes, your lives,
            and our planet a better place. <br />
            We all want our homes to be our place of rest, relaxation, and sanctuary, and we all
            want our planet to be clean, healthy, and free of plastic pollution. <br />
            We're here to bridge that gap - we're committed to making your home a more beautiful
            place, and committed to not using single use plastic. Let's do this together.
          </p>
        </div>
        <div className="text-center">
          <Image
            className=" h-[500px] w-[500px] rounded-lg border-4 object-cover "
            src={kim}
            alt="Picture of Kim"
          />
          <br></br>
          <h1 className="text-bold text-4xl">Hi, i'm Kim!</h1>
          <small>Founder of Fauna green Living</small>
        </div>
      </div>

      <PlasticWasteStats />
      <div className="flex items-center justify-between gap-6 gap-x-28 rounded-lg bg-customGreen p-10 text-white  max-md:flex-col">
        <div className="flex">
          <Image
            className="h-[450px] w-full rounded-lg object-cover"
            src={bamboo}
            alt="Picture of bamboos"
          />
        </div>
        <div className=" flex flex-col gap-y-6 max-md:text-center md:w-[500px] ">
          <h1 className="text-5xl font-bold ">Why Bamboo?</h1>

          <ul className="text-xl italic">
            <li>- Naturally anti-microbial</li>
            <br></br>
            <li>- Pesticides free</li>
            <br></br>
            <li>- 60% more absorbent than cotton</li>
            <br></br>
            <li>- Dries 40% faster than cotton</li>
            <br></br>
            <li>- Uses 1/200th of water than cotton</li>
            <br></br>
            <li>- Does not require the use of pesticides</li>
          </ul>
        </div>
      </div>
    </>
  );
}
