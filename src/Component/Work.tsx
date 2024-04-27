
import WorkItem from './WorkItem'
const data = [
    {
        year : 2016,
        title : 'Pia Pe Pong',
        duration:'3 Years',
        details: 'Heluu moi nguoi lai la minh pia pe pong day ...',
    },
    {
        year : 2017,
        title : 'Lionel Messi',
        duration:'5 Years',
        details: 'Heluu Me la top 1 sever football ...',
    },

    {
        year : 2021,
        title : 'Tryccc',
        duration:'18 Years',
        details: 'Heluu minh la thanh truc minh la ngai iu chu che cua ngoc quang cutii nhess moi nguoi ...',
    },
    {
        year : 2018,
        title : 'kem thui',
        duration:'6 Years',
        details: 'Heluu moi nguoi lai la minh kem pe pong day ...',
    },

]
const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
        {
            data.map((item, index) => {
                return <WorkItem key={index} year={ item.year} duration={item.duration} details={item.details} />
            })
        }
    </div>
  )
}

export default Work