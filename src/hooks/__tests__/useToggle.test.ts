import { renderHook, act } from '@testing-library/react';
import useToggle from '../useToggle';

describe('useToggle', () => {
  it('default false', () => {
    const { result } = renderHook(() => useToggle());
    expect(result.current[0]).toBe(false);
  });

  it('switch value', () => {
    const { result } = renderHook(() => useToggle(false));
    
    act(() => {
      result.current[1]();
    });
    
    expect(result.current[0]).toBe(true);
  });
});