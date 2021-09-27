import sendEventToGA from "../services/sendEventToGA"

const Users = () => {
  const handleSendEvent = () => {
    sendEventToGA({ category: 'Users', action: 'Send User Event' })
  }

  return (
    <>
      <h2>Users</h2>
      <button onClick={handleSendEvent}>Send Event</button>
    </>
  )
}

export default Users