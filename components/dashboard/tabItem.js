
export default function TabItem({tabIndex, setTabIndex, text}) {
  return (
    <li onClick={setTabIndex}
        className={`px-5 py-3 inline-block cursor-pointer text-gray-500 ${tabIndex && `text-gray-900 bg-gray-100`} hover:text-gray-900 text-lg`}
        >{text}
    </li>
  )
}
