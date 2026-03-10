import { createClient } from "@supabase/supabase-js"

const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpzcWxycmpoZ3pieWVpbWhodWFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMxNDMzMzUsImV4cCI6MjA4ODcxOTMzNX0.-eOUe1Uscj_LpUlNEbQbGOtYp_xCoJmaGf9Yv7r9qGQ"
const supabaseUrl = "https://zsqlrrjhgzbyeimhhuaa.supabase.co"

const supabase = createClient(supabaseUrl , supabaseKey)

export default function uploadFile(file){
    return new Promise(
        (resolve, reject)=>{

            if(file == null){
                reject("No file provided")
                return
            }

            const timestamp = new Date().getTime()
            const fileName = timestamp + "-" + file.name

            supabase.storage.from("images").upload(fileName , file , {
                upsert: false,
                cacheControl: 3600
            }).then(
                ()=>{
                  const url = supabase.storage.from("images").getPublicUrl(fileName).data.publicUrl
                  resolve(url)
                }
            ).catch(
                ()=>{
                    reject("Failed to upload file")
                }
            )
        }
    )

}