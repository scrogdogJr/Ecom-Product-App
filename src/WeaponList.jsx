import WeaponItem from './WeaponItem';
function WeaponList(props) {
  return (
    <>
      {props.weapons.map((weapon, index) => (
        <WeaponItem key={index} weapon={weapon} />
      ))}
    </>
  );
}

export default WeaponList;