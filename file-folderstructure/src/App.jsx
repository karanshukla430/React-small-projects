import { useState } from 'react'
import './App.css'
import json from './data.json'

const List = ({list, addNewFolder, deleteFolder}) => {
  const [isExpanded, setIsExpanded] = useState({});
  return(
    <div className='container'>
      {list.map((node) => {
        return (
          <div key={node.id}>
          <span onClick={() => setIsExpanded((prev) => ({...prev, [node.name]: !prev[node.name]}))} style={{cursor: "pointer"}}>{node.isFolder && (isExpanded?.[node.name] ? '- ' : '+ ')}</span>
          <span>{node.name}</span>
          {node.isFolder && <img className='icon' onClick={() => addNewFolder(node.id)} src='https://static.vecteezy.com/system/resources/previews/029/163/362/non_2x/add-files-glyph-icon-add-folder-symbol-empty-folder-new-directory-for-document-portfolio-storage-online-gallery-outline-logo-pictogram-illustration-design-on-white-background-eps-10-vector.jpg' alt=''/>}
          <span><img onClick={() => deleteFolder(node.id)} className='icon' src="data:image/png;base64,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" alt="Delete" /></span>
          {isExpanded?.[node.name] && node.isFolder && <List list={node.children}
           addNewFolder={addNewFolder} deleteFolder={deleteFolder} />}
          </div>
        )
      })}
    </div>
  )
}


function App() {
  const [data, setData] = useState(json);

  const insertNode = (tree, nodeId, folderName) => {
    return tree.map ((node) => {
      if (node.id === nodeId) {
        return {...node, 
          children: [
            ...node.children,
            {
              "id": Date.now(),
              "name": folderName,
              "isFolder": true,
              "children": []
            }
          ]
        }
      }
      if (node.isFolder) {
        return {...node, children: insertNode(node.children, nodeId, folderName)}
      }
      return node;
    })
  }

  const addNewFolder = (nodeId) => {
    const folderName = window.prompt("Enter folder name");
    if(folderName) {
     const updatedData = insertNode (data, nodeId, folderName);
     setData(updatedData);
    }
  };

  const deleteFolder = (nodeId) => {
    const deleteNode = (tree, nodeId) => {
      return tree.filter((node) => {
        if (node.id === nodeId) {
          return false;
        }
        if (node.isFolder) {
          node.children = deleteNode(node.children, nodeId);
        }
        return true;
      })
    }
    const updatedData = deleteNode(data, nodeId);
    setData(updatedData);
  };

  return (
   <div>
      <h1>
        File explorer
      </h1>
      <List list={data}
       addNewFolder={addNewFolder}
       deleteFolder={deleteFolder} />
   </div>
  )}


export default App
