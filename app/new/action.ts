"use server"

import { getXataClient } from "@/src/xata"
import { redirect } from "next/navigation"

export async function createNewRecord(data: {
    name: string,
    link: string
}) {
    try {
        const record = await getXataClient().db.download.create({name: data.name, link: data.link})
    if (record.id != null) {
        redirect('/')
    }
    } catch (error) {
       console.log(error);
        
    }
    
}