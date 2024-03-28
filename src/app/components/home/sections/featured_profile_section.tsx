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
                <div className="text-xl font-medium">{`See Who's Building the Future of Solana`}</div>
                <button className="text-sm">View more</button>
            </div>
            <div className="lg:flex flex-row gap-4 mt-16 md:grid grid-cols-2">
                <CardsCarousel />
            </div>
        </section>
    )
}

export default FeaturedProfileSection;