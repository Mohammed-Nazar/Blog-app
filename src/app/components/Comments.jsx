const Comments = async ({ id }) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments/");
  const data = await res.json();
  const postComments = data.filter((i) => i.postId == id);

  return (
    <>
      {postComments.map((cm) => {
        let randImage = Math.floor(Math.random() * 100);
        return (
          <div key={cm.id} className="flex flex-col shadow-sm rounded-md  p-5 my-4 lg:my-10 bg-slate-50 lg:w-9/12">
            <p className="inline-flex items-center mr-3 my-5 text-sm text-gray-900font-semibold">
              <img
                className="mr-2 w-6 h-6 rounded-full"
                src={`https://xsgames.co/randomusers/assets/avatars/male/${randImage}.jpg`}
                alt="Michael Gough"
              />
              {cm.name}
            </p>
            <p className="text-sm text-gray-600 py-3 ">
              {cm.body} 
            </p>
          </div>
        );
      })}
    </>
  );
};

export default Comments;
