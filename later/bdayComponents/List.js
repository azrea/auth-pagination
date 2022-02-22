const List = ({ people }) => {
  return (
    <div>
      {people.map((person) => {
        const { id, name, age, image, gender } = person;

        return (
          <article key={id} className="person">
            <img src={image} alt="" />
            <div>
              <h3>{name}</h3>
              {gender === "boy" ? (
                <p>{age} years</p>
              ) : (
                <p>You should not ask a girl for her age</p>
              )}{" "}
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
