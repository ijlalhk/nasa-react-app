export default function Footer(props) {
  const { handleToggleModal, data } = props
  return (
    <footer>
        <div className="bgGradient"></div>
      <div>
       <h1>{data?.date}</h1>
        <h2>{data?.title}</h2>
      </div>
      <button onClick={handleToggleModal}>
        <i className="fa-solid fa-info"></i> Get APOD
      </button>
    </footer>
  )
}