import quote from "../../assets/testimonials/quote.png";
import star from "../../assets/testimonials/star.png";
import "../../styles/testimonials.css";

export default function Testimonials() {
	let slides = [
		{
			url: "https://p4.wallpaperbetter.com/wallpaper/433/232/31/blondes-women-white-actress-jennifer-aniston-celebrity-simple-background-white-background-people-celebrity-hd-art-wallpaper-preview.jpg",
			name: "Jennifer Anniston",
			text: `There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration`,
		},
		{
			url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHi5Vn2oLULOgdLkWZ88jJ9xgJincg5uYpDIANxV-oaA&s",
			name: "Shakira",
			text: `There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration`,
		},
		{
			url: "https://i1.sndcdn.com/avatars-46GF1rag02JyR6y8-zIUu6w-t500x500.jpg",
			name: "Saul Goodman",
			text: `There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration`,
		},
		{
			url: "https://i1.sndcdn.com/avatars-46GF1rag02JyR6y8-zIUu6w-t500x500.jpg",
			name: "Saul Goodman",
			text: `There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration`,
		},
		{
			url: "https://i1.sndcdn.com/avatars-46GF1rag02JyR6y8-zIUu6w-t500x500.jpg",
			name: "Saul Goodman",
			text: `There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration`,
		},
	];
	return (
		<div className="bg-image-testimonials w-full h-full pb-16">
			<div className="testimonials-container">
				<section className="reviews relative left-8">
					<div className="flex justify-center">
						<h2 className="text-3xl text-center pt-8 mb-6 btn-home">
							Opiniones
						</h2>
					</div>

					<div className="swiper customer-reviews grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
						{slides.map((s, index) => {
							return (
								<div className="swiper-wrapper w-9/12 md:w-11/12" key={index}>
									<div className="swiper-slide w-full review-card">
										<img className="quote-icon" src={quote} />
										{/* <FontAwesomeIcon className="quote-icon" icon={faQuoteLeft}/> */}
										<h3 className="card-title">I loved it</h3>
										<p className="card-body">{s.text}</p>

										<div className="card-footer">
											<img
												src={s.url}
												alt="profile photo"
												className="profile-photo"
											/>
											<div>
												<span className="name lighter-blue">{s.name}</span>
												<div className="flex">
													<img className="star w-6" src={star} />
													<img className="star w-6" src={star} />
													<img className="star w-6" src={star} />
													<img className="star w-6" src={star} />
													<img className="star w-6" src={star} />
												</div>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</section>
			</div>
		</div>
	);
}
