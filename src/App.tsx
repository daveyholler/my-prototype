import React, { useState } from 'react';
import { EuiBadge, EuiPanel, EuiRange } from '@elastic/eui';

function App() {
  const [value, setValue] = useState(1);
  const [badgeDetails, setBadgeDetails] = useState({text: "That's a bad slide", color: "danger"});

  const onChange = (event: any) => {
    setValue(event.target.value)
    if (event.target.value < 4) {
      setBadgeDetails({text: "That's a bad slide", color: "danger"})
    } else if (event.target.value >= 4 && event.target.value <= 7) {
      setBadgeDetails({text: "Meh meh meh", color: "warning"})
    } else {
      setBadgeDetails({text: "Much amaze!", color: "secondary"})
    }
  }

  return (
    <div style={{ margin: '5rem auto', maxWidth: '60rem' }}>
      <EuiPanel style={{ display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: 'center' }}>
        <EuiRange
          id="mySlider"
          min={1}
          max={10}
          value={value}
          onChange={onChange}
          aria-label="An example of EuiRange with showValue prop"
        />
        <EuiBadge color={badgeDetails.color}>{badgeDetails.text}</EuiBadge>
      </EuiPanel>
    </div>
  );
}

export default App;
