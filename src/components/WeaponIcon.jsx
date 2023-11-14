export default function WeaponIcon({ weapon, setPage, setInfo }) {
  return (
    <div className="weapon-icon select-none cursor-pointer grid gap-2 place-items-center"  onClick={() => {
      setPage("Info")
      setInfo({...weapon, type: "Weapon"})
    }}>
      <div className="weapon-image">
        <img src={weapon.displayIcon} />
      </div>
      <b>{weapon.displayName}</b>
    </div>
  );
}
