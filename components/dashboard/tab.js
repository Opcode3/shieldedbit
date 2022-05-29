import TabItem from './tabItem'

export default function Tab({items = [], children}) {
  return (
      <>
        <div className=" border-y ">
            <ul>
                {
                    items.map( (item,index) => <TabItem key={index} text={item} />)
                }
            </ul>
        </div>
        <div>
            { children }
        </div>
      </>
  )
}
