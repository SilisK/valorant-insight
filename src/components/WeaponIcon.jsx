export default function WeaponIcon({ weapon }) {
  return (
    <div className="weapon-icon select-none cursor-pointer grid gap-2 place-items-center">
      <div className="weapon-image">
        <img src={weapon.displayIcon} />
      </div>
      <b>{weapon.displayName}</b>
    </div>
  );
}
