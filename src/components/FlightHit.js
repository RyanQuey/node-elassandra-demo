import { get } from "lodash";

import {
    Hits,
    SearchkitComponent,
    HitItemProps
} from "searchkit";
import React from 'react'

const FlightHit = (props) => (
  <div className={props.bemBlocks.item().mix(props.bemBlocks.container("item"))}>
    <div className={props.bemBlocks.item("title")}>{props.result._source.DestAirportID} -> {props.result._source.OriginAirportID}</div>
    <div className={props.bemBlocks.item("details")}>
      <strong>From:</strong>
      <div className={props.bemBlocks.item("Origin")}>{props.result._source.Origin}</div>
      <strong>To:</strong>
      <div className={props.bemBlocks.item("Dest")}>{props.result._source.Dest}</div>
    </div>
  </div>
)

export default FlightHit
