import React, { useState } from 'react';
import { Snackbar } from 'react-native-paper';

export default function Banner({ message, show }) {
  const [visible, setVisible] = useState(show);
  return (
    <Snackbar
      visible={visible}
      onDismiss={() => setVisible(false)}
      action={{
        label: 'OK',
        onPress: () => setVisible(false)
      }}>
      {message}
    </Snackbar>
  );
}
