import './WeaponItem.css';

function WeaponItem(props) {

    return (
        <tr>
            <td>{props.weapon.name}</td>
            <td>{props.weapon.type}</td>
            <td>{props.weapon.dmg}</td>
            <td>{props.weapon.special}</td>
            <td>{props.weapon.price}</td>
        </tr>
    )
}

export default WeaponItem;