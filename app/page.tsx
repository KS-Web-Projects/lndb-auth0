import { DownloadRecord, getXataClient } from '@/src/xata'
import { RecordArray, SelectedPick } from '@xata.io/client';
import { cache } from 'react';

// server side query

const xata = getXataClient()

export default async function Home()  {
  
  const { records: items, hasNextPage, nextPage} = await xata.db.download.getPaginated()
  
  return (
    <div className='w-screen h-screen text-center'>
      <h1>Placeholder text</h1>
      
      <div id="card-holder" className='mx-10 flex flex-col flex-wrap items-start'>
        {items.length === 0 && <p>No Records Found</p>}
        {items.map((item) => {
          return (
            <div id='card' key={item.id}>
              <a href={item.link || ""} target='_blank'>

              <h1>{item.name}</h1>
              </a>
            </div>
          )
        })}
      </div>
    
    </div>
  )
}
