import React from "react";
import { Newsletter, Title } from "../components/exportComp";
import { assets } from "../assets/assets";

function About() {
  return (
    <section>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          className="w-full md:max-w-[450px]"
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
            voluptatibus nesciunt harum iste fugit perspiciatis doloribus quis
            quia voluptates facere dolores, fugiat, alias modi sa. Blanditiis?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicingmagnam quam.
            Possimus perferendis nam facilis ipsa inventore. Sit odio voluptatum
            consequuntur voluptates vero ex, harum nobis officia a blanditiis.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            deserunt doloremque obcaecati numquam. Facilis omnis earum odio.
            Tenetur, totam, corporis vero esse ducimus mollitia asperiores
            inventore deserunt ad iusto libero!
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
            alias rerum fugit similique qui quisquam autem sit dolorem
            cupiditate temporibus tempora et ipsam eveniet, magnam quaerat sed
            ipsa vero incidunt?
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
            alias rerum fugit similique qui quisquam autem sit dolorem
            cupiditate temporibus tempora et ipsam eveniet, magnam quaerat sed
            ipsa vero incidunt?
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional customer service:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
            alias rerum fugit similique qui quisquam autem sit dolorem
            cupiditate temporibus tempora et ipsam eveniet, magnam quaerat sed
            ipsa vero incidunt?
          </p>
        </div>
      </div>
      <Newsletter />
    </section>
  );
}

export default About;
