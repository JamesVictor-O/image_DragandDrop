
import {DragDropContext, Droppable,Draggable} from "react-beautiful-dnd"
import Card from "./card"
import "../index.css"
import { useState } from "react"
const ImageContainer = ({images}) => {
    const [imageContainer, setImageContainer]=useState(images)

    const getItemStyle = (isDraggingOver) => ({
        background: isDraggingOver ? "lightgrey" : "lightblue",
        padding: "10px",
        display: "grid",
        width: 250
    })
    const onDragEnd = (result) => {
        if (!result.destination) return;
        const updatedList = [...imageContainer]
        const [reorderedItems] = updatedList.splice(result.source.index, 1)
        updatedList.splice(result.destination.index,0, reorderedItems)
        setImageContainer(updatedList)
     }

    
        
    return (
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="image-drop">
                {(provided, snapshot) => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className="grid grid-cols-2 md:grid-cols-3 gap-4"
                        // style={getItemStyle(snapshot.isDraggingOver)}
                    >
                        {imageContainer.map((picture, index) => (
                            <Card key={picture.id} picture={ picture} index={index} />
                        ))}
                    </div>
                     )}
                </Droppable>
            </DragDropContext> 
    )
}

export default ImageContainer;
























// const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    // userSelect: 'none',
    // padding: grid * 2,
    // margin: `0 ${grid}px 0 0`,
  
    // change background colour if dragging
    // background: isDragging ? 'lightgreen' : 'grey',
  
    // styles we need to apply on draggables
//     ...draggableStyle,
//   });
  
//   const getListStyle = isDraggingOver => ({
//     background: isDraggingOver ? 'lightblue' : 'lightgrey',
//     display: 'flex',
//     padding: grid,
//     overflow: 'auto',
//   });

// onDragEnd(result) {
    // // dropped outside the list
    // if (!result.destination) {
    //   return;
    // }

    // const items = reorder(
    //   this.state.items,
    //   result.source.index,
    //   result.destination.index
// );
    
// return (
//     <DragDropContext onDragEnd={this.onDragEnd}>
//       <Droppable droppableId="droppable" direction="horizontal">
//         {(provided, snapshot) => (
//           <div
//             ref={provided.innerRef}
//             style={getListStyle(snapshot.isDraggingOver)}
//             {...provided.droppableProps}
//           >
//             {this.state.items.map((item, index) => (
//               <Draggable key={item.id} draggableId={item.id} index={index}>
//                 {(provided, snapshot) => (
//                   <div
//                     ref={provided.innerRef}
//                     {...provided.draggableProps}
//                     {...provided.dragHandleProps}
//                     style={getItemStyle(
//                       snapshot.isDragging,
//                       provided.draggableProps.style
//                     )}
//                   >
//                     {item.content}
//                   </div>
//                 )}
//               </Draggable>
//             ))}
//             {provided.placeholder}
//           </div>
//         )}
//       </Droppable>
//     </DragDropContext>
//   );
// }
// }