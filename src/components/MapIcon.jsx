export default function MapIcon({ map, setPage, setInfo }) {
  return (
    <div
      className="map-icon select-none cursor-pointer grid gap-2 place-items-center"
      onClick={() => {
        setPage("Info");
        setInfo({ ...map, type: "Map" });
      }}
    >
      <div className="map-image">
        <img src={map.splash} className="rounded-xl" />
      </div>
      <b>{map.displayName}</b>
    </div>
  );
}
