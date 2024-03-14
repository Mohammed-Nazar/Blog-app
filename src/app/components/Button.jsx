
import Link from "next/link"

const Button = ({id}) => {

  return (
    <Link href={
        {
            pathname: `/post/${id}`,
        }
    } className="text-blue-600 hover:underline">Read more</Link>
  )
}

export default Button