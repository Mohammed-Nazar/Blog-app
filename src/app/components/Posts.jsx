
import Post from "./Post";


async function getPosts(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    
    return res.json();
}


const Posts = async () => {
    const posts = await getPosts();
    
  return (
    <>
    <div className="flex flex-col items-center justify-center m-10 lg:mx-40 ">
      {posts.map((post)=> <Post key={post.id} title={post.title} body={post.body} id={post.id}  />)}
      </div>
    </>
  )
}

export default Posts