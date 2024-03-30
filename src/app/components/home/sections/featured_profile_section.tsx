import CardsCarousel from "../../core/card_carousel";
import FeaturedProfileCard from "../featured_profile_card";

const featured_profile_cards = [
    {
        id: "1",
        userProfession: "UI/UX Designer",
        userPrice: "84"
    },
    {
        id: "2",
        userProfession: "UI/UX Designer",
        userPrice: "84"
    },
    {
        id: "3",
        userProfession: "UI/UX Designer",
        userPrice: "84"
    },
    {
        id: "4",
        userProfession: "UI/UX Designer",
        userPrice: "84"
    }
]



const FeaturedProfileSection = () => {
    return (
        <section className="h-fit bg-green-950 p-12">
            <div className="flex justify-between">
                <div className="lg:text-xl font-medium"><h1>{`See Who's Building the Future of Solana`}</h1></div>
                <button className="hidden text-sm md:block">View more</button>
            </div>
            <div className="pt-6">
                <CardsCarousel />
            </div>
        </section>
    )
}

export default FeaturedProfileSection;