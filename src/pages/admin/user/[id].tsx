import { useRouter } from "next/router"
import Link from "next/link";

export default function AdminUser() {
   const router = useRouter();

   function handleOnClick() {
      router.push('/login');
   }

   console.log("router", router);

   return (
      <>
         <h1>Admin - User Page {router.query.id}</h1>
            <Link href="/login">
               <button>
                  Go to homepage by a tag
               </button>
            </Link>
            <br />
         <button onClick={handleOnClick}>Go to homepage</button>
      </>
   )
}