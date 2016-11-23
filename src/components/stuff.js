import React from 'react'

export default () => {
  const items = [1, 2, 5, 9, 13]

  return (<ul>
    {items.map(item => <li key={item}>{item}</li>)}
  </ul>)
  
}
