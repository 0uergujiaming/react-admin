import { Spin } from 'antd';
import { css } from '@emotion/css';

function LayoutLoading() {
  return (
    <div
      className={css`
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
      `}
    >
      <Spin />
    </div>
  );
}

export default LayoutLoading;
