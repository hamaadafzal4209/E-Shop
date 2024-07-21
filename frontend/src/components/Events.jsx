import EventCard from "./EventCard"

function Events() {
  return (
    <div>
      <div className="section">
        <h1 className="heading">Popular Events</h1>
        <div className="w-full mb-12">
          <EventCard/>
        </div>
      </div>
    </div>
  )
}

export default Events
