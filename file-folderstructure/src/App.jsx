import { useState } from 'react'
import './App.css'
import json from './data.json'

const List = ({list}) => {
  const [isExpanded, setIsExpanded] = useState({});
  return(
    <div className='container'>
      {list.map((node) => {
        return (
          <div key={node.id}>
          <span onClick={() => setIsExpanded((prev) => ({...prev, [node.name]: !prev[node.name]}))} style={{cursor: "pointer"}}>{node.isFolder && (isExpanded?.[node.name] ? '- ' : '+ ')}</span>
          <span>{node.name}</span>
          {node.isFolder && <img className='icon' onClick={addNewFolder(node.id)} src='https://static.vecteezy.com/system/resources/previews/029/163/362/non_2x/add-files-glyph-icon-add-folder-symbol-empty-folder-new-directory-for-document-portfolio-storage-online-gallery-outline-logo-pictogram-illustration-design-on-white-background-eps-10-vector.jpg' alt=''/>}
          {isExpanded?.[node.name] && node.isFolder && <List list={node.children} />}
          </div>
        )
      })}
    </div>
  )
}


function App() {
  const [data, setData] = useState(json);

  const addNewFolder = () => {
    
  }

  return (
   <div>
      <h1>
        File explorer
      </h1>
      <List list={data} />
   </div>
  )
}

export default App
