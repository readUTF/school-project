import React, {useState} from 'react'



export default function CardForm({onSubmit}) {

  const [keywordInput, setKeyword] = useState('')
  const [descInput, setDesc] = useState('')
  const [currentId, setCurrentId] = useState(0)
  
  const getId = () => {
    setCurrentId(currentId + 1)
    return currentId;
  }

  const handleSubmit = e => {
    e.preventDefault();
    
    onSubmit({
      id: getId(),
      desc: descInput,
      keyWord: keywordInput
    })

    setKeyword('');
    setDesc('');
  }


    return (
        <form className="card-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Keyword" value={keywordInput} name="text" onChange={e => setKeyword(e.target.value)} className='card-input'/>
            <input type="text" placeholder="description" value={descInput} name="text" onChange={e => setDesc(e.target.value)} className='card-input'/>
            <button className="card-button">Add Card</button>
        </form>
    )
}