import React, { useState } from "react";
import { Button } from 'rsuite';

import './styles.scss'

export default function () {

  const [count, setCount] = useState(0)


  return (
    <>
      <div className="button_wrap" onClick={() => setCount(count + 1)}>BTN</div>

      <Button onClick={ () => setCount(count + 1)}>
        点我
      </Button>
      <p>我被点击了 { count } 次, 只是为了测试使用</p>
    </>
  )
}
