import Link from "next/link"


const Post = ({title, body, id}) => {
  return (
    <>
<div className="w-full px-10 my-4 lg:mb-10 py-6 bg-slate-50 rounded-lg shadow-md">

        <div className="mt-2">
            <Link href={{
                pathname: `/post/${id}`,
            }} className="lg:text-2xl text-gray-700 font-bold hover:text-gray-600"><sup className="text-[10px]">{id}</sup> {title}</Link>
            <p className="mt-2 text-gray-600">{body.slice(0,body.length > 150? - 100: -50)}...</p>
        </div>
        <div className="flex justify-between items-center mt-4">
        <Link href={
        {
            pathname: `/post/${id}`,
        }
    } className="text-blue-600 hover:underline">Read more</Link>
            <div>
                <a className="flex items-center" href="#">
                    <img className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block" src="https://media.licdn.com/dms/image/D4D03AQGDtyVWUBWtgw/profile-displayphoto-shrink_400_400/0/1710334826803?e=1715817600&v=beta&t=atr6sVvK-u1sCgmKRBGDhE5iyYZLnuMqRKqvYHIOAMI" alt="avatar"/>
                    <h1 className="text-gray-700 font-bold">Mohammed Nazar</h1>
                </a>
            </div>
        </div>
    </div>
    </>
  )
}

export default Post