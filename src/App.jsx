import { useState } from 'react'
import './App.css'
import Weapon from "./Weapons";
import WeaponList from "./WeaponList";
import WeaponHead from "./WeaponHead";

function App() {

  const [weaponList, addWeapon] = useState([new Weapon("Rivers of Blood", "Katana", "76 phys / 76 fire", "Corpse Piler", 1500),
    new Weapon("Moonveil", "Katana", "80 phys / 80 magic", "Transient Moonlight", 2000),
    new Weapon("Bloodhound's Fang", "Greatsword", "82 phys / 82 bleed", "Bloodhound's Finesse", 2500),
    new Weapon("Dark Moon Greatsword", "Greatsword", "80 phys / 80 magic", "Moonlight Greatsword", 3000),
    new Weapon("Claymore", "Greatsword", "80 phys / 80 magic", "Claymore Slash", 3500),
    new Weapon("Grafted Blade Greatsword", "Greatsword", "82 phys / 82 holy", "Oath of Vengeance", 4000),
  ]);

  function addNewWeapon(name, type, dmg, special, price) {
    weaponList.push(new Weapon(name, type, dmg, special, price));
  }

  return (
    <div>
      <h1>Elden Ring Weapon List</h1>
      <table>
        <WeaponHead />
        <WeaponList weapons={weaponList} />
      </table>
    </div>

  )
}

export default App
// The code above defines a React application that imports a Weapon class and a WeaponList component.
// The App component initializes a list of weapons using the Weapon class and passes this list to the
// WeaponList component, which renders the details of each weapon in a table format. The weapons
// include various types such as katanas and greatswords, each with specific attributes like damage,
// special abilities, and prices. The application is styled with an external CSS file named App.css.
// The WeaponList component iterates over the weapons array and displays each weapon's name, type,
// damage, special ability, and price in a table row. The key for each row is set to the index of the weapon in the array to ensure each row is uniquely identified.
// The application is structured to be modular, with separate files for the Weapon class and the Weapon