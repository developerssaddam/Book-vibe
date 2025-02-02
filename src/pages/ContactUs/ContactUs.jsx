const ContactUs = () => {
  return (
    
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-[#F3F3F3] my-5">
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
              Let`s talk!
            </h2>
            <div className="">Vivamus in nisl metus? Phasellus.</div>
          </div>
          <img
            src="https://i.ibb.co/CHB1dD4/1.jpg"
            alt=""
            className="p-6 h-52 w-80 md:h-64"
          />
        </div>
        <form className="space-y-6">
          <div>
            <label className="text-lg">Full name</label>
            <input
              id="name"
              type="text"
              placeholder=""
              className="w-full p-3 rounded-lg"
            />
          </div>
          <div>
            <label className="text-lg">Email</label>
            <input id="email" type="email" className="w-full p-3 rounded-lg" />
          </div>
          <div>
            <label className="text-lg">Message</label>
            <textarea
              id="message"
              rows="5"
              className="w-full p-3 rounded-lg"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-[#23BE0A] text-white"
          >
            Send Message
          </button>
        </form>
      </div>
  );
};

export default ContactUs;
