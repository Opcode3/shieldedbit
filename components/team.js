
export default function Team({data}) {
  return (
    <div className="aboutTeam"> {/* Team Cover*/}
        <div className="teamImage">
            <img src={`/assets/images/team/${data.img}`} alt=""/>
        </div>
        <h5>{data.name}</h5>
        <p>{data.description}</p>
  </div>
  )
}
