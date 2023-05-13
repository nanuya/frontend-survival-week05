import { ChangeEvent } from 'react';
import { renderHook, act } from '@testing-library/react';
import useText from './useText';

const context = describe;

describe('useText', () => {
  context('useText 인자로 { text } 를 전달하면, ', () => {
    // given 테스트 준비항목
    const INITIAL_TEXT = 'initial text';

    // when
    const { result } = renderHook(() => useText({ text: INITIAL_TEXT }));

    // then
    expect(INITIAL_TEXT).toBe(result.current.text);
  });

  context('onChangeText 인자로 input event 를 전달하면, ', () => {
    // given 테스트 준비항목
    const { result } = renderHook(() => useText());

    const mockEvent = {
      currentTarget: {
        value: 'useText 에 onChangeText 테스트',
      },
    } as ChangeEvent<HTMLInputElement>;

    // when input 에 변경 발생
    act(() => result.current.onChangeText(mockEvent));

    // then input.currentTarget.value 가 text 에 저장됨
    it('해당 input value 값으로 text 가 변경된다.', () => {
      expect(mockEvent.currentTarget.value).toBe(result.current.text);
    });
  });

  context('onResetText 를 호출하면, ', () => {
    // given
    const INITIAL_TEXT = 'initial text';

    const { result } = renderHook(() => useText({
      text: INITIAL_TEXT,
    }));

    const mockEvent = {
      currentTarget: {
        value: 'useText 에 onChangeText 테스트',
      },
    } as ChangeEvent<HTMLInputElement>;

    act(() => result.current.onChangeText(mockEvent));

    // when
    act(() => result.current.onResetText());

    // then
    it('text 는 useText 로 넘긴 text 값으로 초기화 된다.', () => {
      expect(INITIAL_TEXT).toBe(result.current.text);
    });
  });
});
