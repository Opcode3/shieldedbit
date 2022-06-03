import TabItem from './tabItem'

export default function Tab({items = [], children}) {

  return (
      <>
        <div className=" px-[2%] lg:px-[8%] border-y bg-white ">
            <ul>
                {
                    items.map( (item,index) => <TabItem key={index} tabIndex={item.tabIndex} setTabIndex={item.setTabIndex} text={item.text} />)
                }
            </ul>
        </div>
        <div className='px-[3%] lg:px-[8%] py-1'>
            { children }
        </div>
      </>
  )
}
