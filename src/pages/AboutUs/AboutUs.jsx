const AboutUs = () => {
  return (
    <div className="max-w-4xl mx-auto bg-[#F3F3F3]">
      <img
        className="w-full h-[350px] object-cover"
        src="https://i.ibb.co/7XzLMnV/Book-Series.jpg"
        alt=""
      />

      <div className="p-10">
        <h2 className="title text-3xl font-extrabold text-center my-5">
          Discover Your Next Beloved Read
        </h2>
        <p className="font-medium">
          Step into the Literary Wonderland of Book Vibe, where magic happens on
          every page! With staggering monthly visitors, you’ve stumbled upon the
          ultimate destination for book enthusiasts – and you’re exactly where
          you need to be!
        </p>
      </div>

      <div className="p-10 flex items-center justify-center gap-5">
        <div className="w-3/5">
          <h3 className="text-2xl font-bold mb-5">Who am I?</h3>
          <p className="font-medium mb-8">
            I’m Saddam hossen, founder of Book Vibe. As a graduate of English
            Literature at Rutgers University, I have been very passionate about
            reading versatile genres of books. These books are like life sources
            to me. They energize me and make me more willing to live a better
            life!
          </p>

          <p className="font-medium mb-8">
            In 2005, I created Book Vibe to connect readers with stunning reads.
            My team and I have curated selections, and an all-knowing algorithm
            guides you to epic books. Also, we are a leading authority in book
            discovery as Book Vibe is featured in The Guardian, Forbes, and
            more!
          </p>

          <p className="font-medium mb-8">
            I love taking my 9-year-old kid to any book fair near my home,
            especially in Shotwell. Often, he asks me, “Mom, tell me a story…” I
            smile again and again, then make him happy by telling stories from
            those books I have read.
          </p>
        </div>
        <div className="w-2/5">
          <img
            className="w-full rounded-2xl border-4 border-[#23BE0A]"
            src="https://i.ibb.co/k6wpdCX/saddam.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
