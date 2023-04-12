import { useEffect, useState } from "react";
import React from "react";

export function BurialList() {
  return (
    <React.Fragment>
      <div className="p-5">
        <div>
          <h3 className="text-center">Burial Information</h3>
        </div>
        <br />
        <div>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>N/S Coordinates</th>
                <th>Area</th>
                <th>Burial Number</th>
                <th>Depth</th>
                <th>Estimate Stature</th>
                <th>Head Direction</th>
                <th>Age at Death</th>
                <th>Sex</th>
                <th>Textile Color</th>
                <th>Textile Structure</th>
                <th>Textile Function</th>
                <th>Hair Color</th>
                <th>More Info</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>N/S Coordinates</td>
                <td>Area</td>
                <td>Burial Number</td>
                <td>Depth</td>
                <td>Estimate Stature</td>
                <td>Head Direction</td>
                <td>Age at Death</td>
                <td>Sex</td>
                <td>Textile Color</td>
                <td>Textile Structure</td>
                <td>Textile Function</td>
                <td>Hair Color</td>
                <td>More Info</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
}
