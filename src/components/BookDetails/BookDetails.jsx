const BookDetails = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 lg:gap-10 lg:my-12 p-4">
      <div className="bg-[#F3F3F3] flex justify-center items-center p-16 rounded-2xl flex-1">
        <img
          src="http://localhost:5173/src/assets/img/1.png?t=1711429777137"
          alt=""
        />
      </div>
      <div className="details flex-1 space-y-5">
        <h2 className="text-2xl lg:text-4xl font-bold font_playfair">
          The Catcher in the Rye
        </h2>
        <p className="text-xl font-medium">By : Awlad Hossain</p>
        <h4 className="text-xl font-medium border-y-2 border-[#F3F3F3] py-2">
          Fiction
        </h4>
        <p>
          <span className="text-lg font-extrabold">Review :</span> Sit amet
          consectetur. Interdum porta pulvinar non sit aliquam. Aenean pulvinar
          blandit vel non enim elementum penatibus pellentesque ac. Nec accumsan
          euismod nulla adipiscing lectus. Morbi elementum a auctor erat diam
          tellus. Fermentum faucibus nulla enim ornare. Id neque neque pretium
          enim platea urna non dictum. Faucibus dignissim ridiculus nibh
          tristique massa non.
        </p>
        <div className="flex gap-5">
          <h3 className="font-extrabold">Tag</h3>
          <button className="bg-[#F3F3F3] text-[#23BE0A] px-2 rounded-3xl">
            #Young Auduilt
          </button>
          <button className="bg-[#F3F3F3] text-[#23BE0A] px-2 rounded-3xl">
            #Identity
          </button>
        </div>

        <table className="table">
          <tbody>
            {/* row 1 */}
            <tr>
              <td>Number of pages</td>
              <td className="font-bold">280</td>
            </tr>

            <tr>
              <td>Publisher:</td>
              <td className="font-bold">J.B Lippincott & Co.</td>
            </tr>

            <tr>
              <td>Year of Publishing:</td>
              <td className="font-bold">1960</td>
            </tr>

            <tr>
              <td>Rating:</td>
              <td className="font-bold">4.8</td>
            </tr>
          </tbody>
        </table>

        <div className="*:px-5">
          <button className="btn btn-outline mr-5">Read</button>
          <button className="btn bg-[#59C6D2] text-white">wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
