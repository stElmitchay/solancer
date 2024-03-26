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
        <>

            <section className="h-fit bg-green-950 p-12">
                <div className="flex justify-between">
                    <div className="text-xl font-medium">Featured profile this week</div>
                    <div className="text-sm">View more</div>
                </div>
                <div className="lg:flex flex-row gap-4 mt-16 md:grid grid-cols-2">
                    {
                        featured_profile_cards.map((card) => (
                            <div key={card.id} className="w-full">
                                <FeaturedProfileCard cardId={card.id} userProfession={card.userProfession} userPrice={card.userPrice} userName={"David"} userImage={"https://img.freepik.com/free-photo/casual-young-african-man-smiling-isolated-white_93675-128895.jpg?w=740&t=st=1711255753~exp=1711256353~hmac=517869ef737dd30f0d791777a7b87cb64295f3ff7e63f451481dfb38b0aeb5a2"} />
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default FeaturedProfileSection;