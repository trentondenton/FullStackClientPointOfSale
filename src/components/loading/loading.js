import React from 'react';

export default function Loading() {
  return (
    <React.Fragment>
      <div className="loading-master-container">
        <div className="loading-container">
          <div className="coast">
            <div className="wave-rel-wrap">
              <div className="wave"></div>
            </div>
          </div>
          <div className="coast delay">
            <div className="wave-rel-wrap">
              <div className="wave delay"></div>
            </div>
          </div>
          <div className="loading-text loading-text-K">K</div>
          <div className="loading-text loading-text-a">a</div>
          <div className="loading-text loading-text-l">l</div>
          <div className="loading-text loading-text-d">d</div>
          <div className="loading-text loading-text-r">r</div>
        </div>
      </div>
      <div className="loading-pos-container">
        <h2>Point of Sale System</h2>
      </div>
    </React.Fragment>
  )
}