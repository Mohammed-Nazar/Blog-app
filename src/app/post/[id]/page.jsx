import Comments from "../../components/Comments";

const page = async ({ params }) => {
  const postId = params.id;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const data = await res.json();

  return (
    <>
      <div className=" px-10 my-4 py-6 bg-white rounded-lg  min-h-screen ">
        <div className="p-8 shadow-md rounded-lg bg-slate-50">
          <div className="mb-10">
            <a className="flex items-center">
              <img
                className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
                src="https://media.licdn.com/dms/image/D4D03AQGDtyVWUBWtgw/profile-displayphoto-shrink_400_400/0/1710334826803?e=1715817600&v=beta&t=atr6sVvK-u1sCgmKRBGDhE5iyYZLnuMqRKqvYHIOAMI"
                alt="avatar"
              />
              <h1 className="text-gray-700 font-bold">Mohammed Nazar</h1>
            </a>
          </div>
          <div className="mt-5">
            <h1 className="text-xl text-gray-700 font-bold hover:text-gray-600 w-7/12">
              {data.title}.
            </h1>
            <p className="mt-10 text-gray-600 w-7/12 pb-10">{data.body}</p>
          </div>
        </div>

        <div className=" px-10 my-4 py-6 bg-white  ">
          <h1 className="text-gray-700 font-bold">Comments</h1>

          <Comments id={postId} />

          <div className="flex items-center justify-center shadow-lg mb-4 max-w-lg ">
            <form className="w-full max-w-xl bg-slate-50 rounded-lg px-4 pt-2">
              <div className="flex flex-wrap -mx-3 mb-6">
                <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">
                  Add a new comment
                </h2>
                <div className="w-full md:w-full px-3 mb-2 mt-2">
                  <textarea
                    className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                    name="body"
                    placeholder="Type Your Comment"
                    required
                  ></textarea>
                </div>
                <div className="w-full md:w-full flex items-start md:w-full px-3">
                  
                  <div className="-mr-1">
                    <input
                      type="submit"
                      className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100"
                      value="Submit"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
