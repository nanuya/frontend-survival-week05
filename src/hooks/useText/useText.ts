import { ChangeEventHandler, useState } from 'react';

export default function useText({
  text: initialText = '',
} = {}) {
  const [text, setText] = useState(initialText);

  const handleTextChange: ChangeEventHandler<HTMLInputElement> = ({ currentTarget }) => {
    setText(currentTarget.value ?? '');
  };

  return {
    text,
    onChangeText: handleTextChange,
    onResetText: (resetText = initialText) => setText(resetText),
  };
}
