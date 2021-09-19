import React from "react";
import { Spinner, StateItem } from "components";

export default function StateList({
  states,
  loading,
  setStateChange,
  eliminatedState,
}) {
  return (
    <div className="list">
      <div className="list__head">
        <div className="list__column nombre">Nombre</div>
        <div className="list__column descripcion">Descripción</div>
      </div>
      <div className="List__body">
        {loading ? (
          <Spinner />
        ) : (
          states &&
          states.map((state) => (
            <StateItem
              {...state}
              key={state.id}
              setStateChange={setStateChange}
              eliminatedState={eliminatedState}
            />
          ))
        )}
      </div>
    </div>
  );
}
