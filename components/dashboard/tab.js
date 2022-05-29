import TabItem from './tabItem'

export default function Tab({items = [], children}) {

  return (
      <>
        <div className=" border-y bg-white ">
            <ul>
                {
                    items.map( (item,index) => <TabItem key={index} tabIndex={item.tabIndex} setTabIndex={item.setTabIndex} text={item.text} />)
                }
            </ul>
        </div>
        <div>
            { children }
        </div>
      </>
  )
}
