import React from 'react';

export default function Loading() {
  return (
    <React.Fragment>
      <div className="loading-master-container">
        <div class="loading-container">
          <div class="coast">
            <div class="wave-rel-wrap">
              <div class="wave"></div>
            </div>
          </div>
          <div class="coast delay">
            <div class="wave-rel-wrap">
              <div class="wave delay"></div>
            </div>
          </div>
          <div class="loading-text loading-text-K">K</div>
          <div class="loading-text loading-text-a">a</div>
          <div class="loading-text loading-text-l">l</div>
          <div class="loading-text loading-text-d">d</div>
          <div class="loading-text loading-text-r">r</div>
        </div>
      </div>
      <div className="loading-pos-container">
        <h2>Point of Sale System</h2>
      </div>
    </React.Fragment>
  )
}