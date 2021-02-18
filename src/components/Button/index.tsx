import React, { useState } from "react";


import './styles.scss'

export default function () {

  const [count, setCount] = useState(0)


  return (
    <>
      <div className="button_wrap" onClick={() => setCount(count + 1)}>我是一个Button</div>

      <p>我被点击了 { count } 次</p>
    </>
  )

}
