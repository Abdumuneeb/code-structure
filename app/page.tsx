import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Page(parms:any) {
const token = cookies().get("AUTH_TOKEN")?.value || ""
if(token){
  redirect('/dashboard')
} else {
  // redirect(`en/us/`)
  redirect(`/dashboard`)
}
}

