import React from 'react'

const Contacter = () => {
  return (
    <div>
        <div>
            <h1>NOUS CONTACTER</h1>
            <span>Écrivez-nous</span>
            <p>Contactez nous et nous vous répondrons aussi rapidement que possible.</p>
        <form>
              <label for="name"> nom  : </label>
              <input type="text" name="nom" id="nom" required />
              <label for="email"> Email  : </label>
              <input type="text" name="email" id="email" required />
              <label for="numero"> numero de téléphone : </label>
              <input type="text" name="téléphone" id="téléphone" required />
              <label for="message">Que voulez vous nous dire ? : </label>
              <textarea id='erea' placeholder='Que voulez vous nous dire ' required></textarea>
              </form>
        </div>
    </div>
  )
}

export default Contacter