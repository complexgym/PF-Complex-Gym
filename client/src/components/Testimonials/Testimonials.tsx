import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import {useState} from "react"

export default function Testimonials(){
        const slides = [
		{
			url: 'https://p4.wallpaperbetter.com/wallpaper/433/232/31/blondes-women-white-actress-jennifer-aniston-celebrity-simple-background-white-background-people-celebrity-hd-art-wallpaper-preview.jpg',
            name: 'Jennifer Anniston'
        },
		{
			url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHi5Vn2oLULOgdLkWZ88jJ9xgJincg5uYpDIANxV-oaA&s',
            name: 'Shakira'
        },
        {
			url: 'https://p4.wallpaperbetter.com/wallpaper/433/232/31/blondes-women-white-actress-jennifer-aniston-celebrity-simple-background-white-background-people-celebrity-hd-art-wallpaper-preview.jpg',
            name: 'Jennifer Anniston'
        },
		{
			url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHi5Vn2oLULOgdLkWZ88jJ9xgJincg5uYpDIANxV-oaA&s',
            name: 'Shakira'
        }, 
	];
    return(
        <div className="w-full min-h-[1800px] md:min-h-[1200px] xl:min-h-[700px] bg-testimonials pt-36">
            <div className="flex justify-center relative">
                <h2 className="btn-home">Opiniones</h2>
            </div>

            <div className="cards w-4/5 h-32 mx-auto grid md:grid-cols-2 pt-8 xl:grid-cols-3 gap-8">
                {slides.map((s,index)=>{
                    if(index<3){ //renderizes the first 3 reviews
                        return ( 
                            <div className="card w-full bg-card-testimonials flex flex-col items-center py-8 rounded-2xl">
                                <img src={s.url} className="w-28 h-28 rounded-full border-4 border-gold"/>
                                <h2 className="lighter-blue">{s.name}</h2>
                                <p className="text-center text-xs bg-white w-2/3 my-4 p-4 rounded-xl border-4 border-gold"
                                >
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus rerum numquam aliquam alias excepturi non expedita quas. Accusantium reiciendis, earum accusamus neque eos nostrum ab, error sed obcaecati architecto facere!
                                </p>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}

// export default function Testimonials(){
//     const slides = [
// 		{
// 			url: 'https://p4.wallpaperbetter.com/wallpaper/433/232/31/blondes-women-white-actress-jennifer-aniston-celebrity-simple-background-white-background-people-celebrity-hd-art-wallpaper-preview.jpg',
//             name: 'Jennifer Anniston'
//         },
// 		{
// 			url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHi5Vn2oLULOgdLkWZ88jJ9xgJincg5uYpDIANxV-oaA&s',
//             name: 'Shakira'
//         }
// 	];

// 	const [currentIndex, setCurrentIndex] = useState(0);

// 	const prevSlide = () => {
// 		const isFirtsSlide = currentIndex === 0;
// 		const newIndex = isFirtsSlide ? slides.length - 1 : currentIndex - 1;
// 		setCurrentIndex(newIndex);
// 	};
// 	const nextSlide = () => {
// 		const isLastSlide = currentIndex === slides.length - 1;
// 		const newIndex = isLastSlide ? 0 : currentIndex + 1;
// 		setCurrentIndex(newIndex);
// 	};

//     return(
//         <div className="min-h-screen bg-testimonials pt-10 pl-10 flex flex-col justify-center">
//             <div className="flex justify-center relative bottom-10">
// 				<h2 className="btn-home">Opiniones</h2>
// 			</div>
//             <div className={`max-w-3xl mx-auto border-2 border-white rounded-2xl`}>
//                 <div className="flex flex-col h-full items-center py-10">
//                     <div className='flex relative w-full justify-center '>
//                         <BsChevronCompactLeft className='text-white cursor-pointer relative right-1/3 top-28' size={50}
//                         onClick={prevSlide}/>
//                         <BsChevronCompactRight className='text-white cursor-pointer relative left-1/3 top-28' size={50}
//                         onClick={nextSlide}/>
//                     </div>
//                     <div className="flex flex-col h-full items-center">
//                         <img className="rounded-full w-48 h-48" src={slides[currentIndex].url}/>
//                         <h2 className="text-xl lighter-blue pt-4 pb-2">{slides[currentIndex].name}</h2>
//                         <p className='text-sm text-white text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati esse sequi possimus saepe. Assumenda fugiat perspiciatis, nihil vitae quasi placeat officiis neque a, quo et eius esse ea reprehenderit. Omnis?</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }