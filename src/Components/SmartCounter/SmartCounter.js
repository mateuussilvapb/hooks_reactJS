import { useState } from "react";

function SmartCounter() {
  /**
   * Retorna um vetor que:
   *  1. variável stateful;
   *  2. função amarrada a variável que
   *     atualiza seu valor.
   */
  const [quantity, changeQuantity] = useState(1);
  return (
    <>
      <button onClick={() => changeQuantity(quantity + 1)}>Aumentar</button>
      <h1>{quantity}</h1>
      <button onClick={() => changeQuantity(quantity - 1)}>Diminuir</button>
    </>
  );
}

export default SmartCounter;
