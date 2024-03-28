"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';



import FeaturedProfileCard from '../home/featured_profile_card';

const cardInfo = [
    {
        id: "1",
        userName: "Michael Freeman",
        userProfession: "UI/UX Designer",
        userPrice: "84",
        userImage: "https://tse3.mm.bing.net/th?id=OIP.IGNf7GuQaCqz_RPq5wCkPgAAAA&pid=Api&P=0&h=220"
    },
    {
        id: "2",
        userName: "Michael Freeman",
        userProfession: "UI/UX Designer",
        userPrice: "84",
        userImage: "https://tse3.mm.bing.net/th?id=OIP.IGNf7GuQaCqz_RPq5wCkPgAAAA&pid=Api&P=0&h=220"
    },
    {
        id: "3",
        userName: "Michael Freeman",
        userProfession: "UI/UX Designer",
        userPrice: "84",
        userImage: "https://tse3.mm.bing.net/th?id=OIP.IGNf7GuQaCqz_RPq5wCkPgAAAA&pid=Api&P=0&h=220"
    },
    {
        id: "4",
        userName: "Michael Freeman",
        userProfession: "UI/UX Designer",
        userPrice: "84",
        userImage: "https://tse3.mm.bing.net/th?id=OIP.IGNf7GuQaCqz_RPq5wCkPgAAAA&pid=Api&P=0&h=220"
    },
    {
        id: "5",
        userName: "Michael Freeman",
        userProfession: "UI/UX Designer",
        userPrice: "84",
        userImage: "https://tse3.mm.bing.net/th?id=OIP.IGNf7GuQaCqz_RPq5wCkPgAAAA&pid=Api&P=0&h=220"
    },
    {
        id: "6",
        userName: "Michael Freeman",
        userProfession: "UI/UX Designer",
        userPrice: "84",
        userImage: "https://tse3.mm.bing.net/th?id=OIP.IGNf7GuQaCqz_RPq5wCkPgAAAA&pid=Api&P=0&h=220"
    },
    {
        id: "7",
        userName: "Michael Freeman",
        userProfession: "UI/UX Designer",
        userPrice: "84",
        userImage: "https://tse3.mm.bing.net/th?id=OIP.IGNf7GuQaCqz_RPq5wCkPgAAAA&pid=Api&P=0&h=220"
    },
    {
        id: "8",
        userName: "Michael Freeman",
        userProfession: "UI/UX Designer",
        userPrice: "84",
        userImage: "https://tse3.mm.bing.net/th?id=OIP.IGNf7GuQaCqz_RPq5wCkPgAAAA&pid=Api&P=0&h=220"
    },

]

const CardsCarousel = () => {
    return (
        <Swiper
            spaceBetween={30}
            slidesPerView={4}
            // onSlideChange={() => { }}
            // onSwiper={() => { }}
            navigation={true} modules={[Navigation]}
        >
            {
                cardInfo.map((cardInfo) => (
                    <SwiperSlide key={cardInfo.id}>
                        <FeaturedProfileCard {...cardInfo} />
                    </SwiperSlide>
                ))
            }

        </Swiper >
    )
}

export default CardsCarousel;