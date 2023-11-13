export default function MapIcon({ map }) {
  return (
    <div className="map-icon select-none cursor-pointer grid gap-2 place-items-center">
      <div className="map-image">
        <img src={map.splash} className="rounded-xl"/>
      </div>
      <b>{map.displayName}</b>
    </div>
  );
}
