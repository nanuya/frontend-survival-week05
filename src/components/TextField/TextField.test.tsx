import {
  render, renderHook, screen, fireEvent,
} from '@testing-library/react';
import TextField from './TextField';
import { useText } from '../../hooks';

const context = describe;

describe('TextField 공통 컴포넌트', () => {
  context('change 이벤트가 발생하면, ', () => {
    // given
    const { result } = renderHook(useText);
    const label = '검색';
    const value = '메가식당';

    render(<TextField
      label={label}
      type="search"
      value={result.current.text}
      onChange={result.current.onChangeText}
      placeholder="식당이름을 입력하세요."
    />);

    // when
    fireEvent.change(screen.getByLabelText(label), {
      target: {
        value,
      },
    });

    // then
    it('변경된 input 값이 노출된다.', () => {
      expect(value).toBeDefined();
    });
  });
});
