export default function SideBar(props) {
  const { handleToggleModal, data } = props
  return (
    <div className="sideBar">
        <div className="bgOverlay" onClick={handleToggleModal}></div>
    <div className="sideBarContent">
      <h2>{data?.title}</h2>
      <div>
        <p className="descriptionTitle">{data?.date}</p>
        <p className="descriptionContainer">{data?.explanation}</p>
      </div>
      <button onClick={handleToggleModal}>
        <i className="fa-solid fa-right-long"></i>
      </button>
    </div>
    </div>
  )
}