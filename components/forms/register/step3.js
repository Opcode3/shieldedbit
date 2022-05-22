import PayService from "../PayService"
export default function Step3({ accountType, setLevel }) {
  return (
    <>
      {
        (accountType == 1) ? <PayService /> : setLevel(4) 
        // (accountType == 0 || accountType == 1) ? <PayService /> : setLevel(4) 
      }
    </>
  )
}
