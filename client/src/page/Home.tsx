import React from "react";
import nftImage from "../images/OIP.jfif";
import getstart from "../images/getstart.png";

const altText = "nft-img"; 


const Home = () => {
  
  return (
    <div className="w-[90%] mx-auto ">
      <div className=" mt-12">
        <img className="h-44 w-full  rounded-lg" src={nftImage} alt={altText} />
      </div>

      {/* content info  */}
      <div className="mt-12">
        <h1 className="text-2xl font-bold my-4">lorem title</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
        molestiae voluptatum incidunt itaque alias sed deserunt quas nesciunt.
        Earum debitis cum nulla nobis tempore, tenetur, commodi alias ducimus,
        numquam dolor illum eum molestias iure. Pariatur soluta eius quasi!
        Autem, reprehenderit explicabo? Eaque, distinctio laborum ab magni,
        perferendis voluptate quia laboriosam officiis repellat dolores magnam.
        Delectus itaque ullam, aut voluptatibus cum mollitia veniam aperiam quod
        deserunt repellendus, at laborum numquam nobis incidunt obcaecati libero
        accusantium aliquam optio illum sapiente sint facilis nisi beatae
        cupiditate? Distinctio aut quis placeat accusantium architecto hic
        nostrum assumenda harum corporis expedita! Beatae architecto modi
        tempora quia maxime officia sequi magni quidem, assumenda aperiam
        repellendus nemo delectus sint ea earum temporibus, at cumque! Illum
        quisquam eum eligendi quod at impedit deserunt, accusantium tempora
        soluta, officia sunt sapiente. Aspernatur nihil eum laudantium,
        cupiditate voluptates sequi suscipit nisi. Repellat minima, possimus
        fugit dicta illo optio molestias sed culpa, tempora reprehenderit saepe.
      </div>

      <div className="flex flex-wrap sm:flex-nowrap justify-between mt-12  gap-3 ">
        <img className="h-40 w-48 " src={nftImage} alt="nft-img" />
        <img className="h-40 w-48 " src={nftImage} alt="nft-img" />
        <img className="h-40 w-48 " src={nftImage} alt="nft-img" />
      </div>
      <div className="mt-12">
        <h1 className="text-2xl font-bold my-4">About</h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
        Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies
        sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius
        a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy
        molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.
        Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium
        a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra
        tempor.
      </div>

      <div className="flex  justify-between mt-12">
        <div>
          <h1 className="font-extrabold text-3xl ">
            Find your people this year
          </h1>
          <p className="text-gray-500 mt-2">
            Make time for your interests and meet people who share them. Lasting
            connections are made on Meetup.
          </p>

          <button
            type="button"
            className="text-gray-900 w-48 bg-gradient-to-r mt-1 from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Start today
          </button>
        </div>
        <div>
          {" "}
          <img
            className="w-64 rounded-3xl  h-60"
            src={getstart}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
