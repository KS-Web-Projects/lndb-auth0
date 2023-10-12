import Image from 'next/image'

export default function Home() {
  let data = [{
    name: "The Apothecary Diaries",
    link: "https://mega.nz/folder/P3IAGTLD#RFOo78yHfppMMqrPF2PfWQ"
  }]
  return (
    <div className='w-screen h-screen text-center'>
      <h1>Placeholder text</h1>
      <form action=""><input type="text" name="search" id="search" className='w-10/12'/></form>
      <div id="card-holder" className='mx-10 flex flex-col flex-wrap items-start'>
        {data.map((item, id) => {
          return (
            <div id='card' key={id}>
              <a href={item.link} target='_blank'>

              <h1>{item.name}</h1>
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}
