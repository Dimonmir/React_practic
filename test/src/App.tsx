import React from 'react';
import ReactDOM from 'react-dom';


function HomeComponent(props: { firstProp: string }) {
    return (
      <div>
        { props.firstProp }
      </div>
  )
}

export default HomeComponent;
