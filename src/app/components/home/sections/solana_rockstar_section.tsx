import React from "react";
import SolanaRockstarCard from "../solana_rockstar_card";

const cards = [
  {
    id: "1",
    header: "From Rookie to Expert",
    subHeader:
      "Dive deep into the world of Solana development with our comprehensive suite of resources. Whether you’re a complete beginner or a seasoned developer looking to expand your skill set, we’ve got you covered. Learn at your own pace, collaborate with fellow builders, and put your newfound knowledge to the test.",
  },
  {
    id: "2",
    header: "Land Freelance Gigs and Put Your Skills to Work",
    subHeader:
      "Showcase your expertise to a network of potential clients and secure freelance gigs that fit your skill set and schedule. The Solana ecosystem is booming, and there’s a growing need for talented developers.",
  },
  {
    id: "3",
    header: "Connect, Collaborate, And Build the Future of Solana",
    subHeader:
      "Connect with a vibrant community of Solana developers, exchange ideas, and work together to bring your innovative projects to life. The Solana ecosystem thrives on collaboration, and our platform provides the perfect space to join forces and make your mark on the blockchain.",
  },
];

const SolanaRockStarSection = () => {
  return (
    <>
      <div className="h-fit flex justify-center pb-12">
        <div className="flex flex-col">
          <div className=" text-green-950">
            <h1 className="text-xl md:text-3xl font-semibold text-center">Everything You Need to Become a Solana Rockstar</h1>
          </div>
          <div className="flex flex-col items-center md:flex-row gap-12 pt-24">
            {cards.map((card) => (
              <div key={card.id}>
                <SolanaRockstarCard
                  header={card.header}
                  subHeader={card.subHeader}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SolanaRockStarSection;
