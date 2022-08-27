import './DisplayCountry.css'
const DisplayCountry = (props) => {
  return (
    <div className="card">
      <img src={props.photo} alt="" />
      <h3>Country Name: {props.name}</h3>
      <h4>Country Full Name: {props.fullName}</h4>
    </div>
  );
};

export default DisplayCountry;