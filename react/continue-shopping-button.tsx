import React from 'react'
import { useRuntime } from 'vtex.render-runtime'
import { useProduct } from 'vtex.product-context'

import styles from './continue-shopping-button.module.css'

const ContinueShoppingButton = () => {
  const productContextValue = useProduct()
  const runtime = useRuntime()
  const { location } = window


  console.log(location)

  console.log(productContextValue)
  console.log(runtime)
  const onClickHandler = (evt:any) => {
    const category =
      productContextValue.product.categoryTree[
        productContextValue.product.categoryTree.length - 1
      ].href
    debugger
    console.log(category)
    evt.preventDefault()
    location.href = category
  }

  return (
    <div className={styles.container}>
      <button onClick={(evt) => onClickHandler(evt)}>Continue shopping</button>
    </div>
  )
}

export default ContinueShoppingButton
