export default function Hello({ person }) {
  //const { name, message, seatNumbers } = props; //props destructuring

  return (
    <div>
      <h1>
        Good Morning {person.name},{" "}
        <span style={{ color: "green" }}>
          {person.message} {person.seatNumbers}
        </span>
      </h1>
    </div>
  );
}
