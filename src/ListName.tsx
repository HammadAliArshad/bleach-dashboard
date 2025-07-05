import Person from "./Person";

function ListName() {
  const names = ["Aizen", "Urahara", "Ichigo", "Aizen"];
  const persons = [
    {
      id: 1,
      name: "Aizen",
      age: 200,
      skills: "Everything",
    },
    {
      id: 2,
      name: "Urahara",
      age: 150,
      skills: "Nothing",
    },
    {
      id: 3,
      name: "Ichigo",
      age: 20,
      skills: "Bankai",
    },
  ];
  const namesList = names.map((name, index) => (
    <h2 key={index}>
      {index} {name}
    </h2>
  ));
  const personsList = persons.map((person) => (
    <Person key={person.id} person={person}></Person>
  ));
  return (
    <>
      <div>{namesList}</div>
      <div>{personsList}</div>
    </>
  );
}

export default ListName;
