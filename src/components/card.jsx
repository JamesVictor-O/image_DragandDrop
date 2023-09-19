import {Draggable} from "react-beautiful-dnd"
const Card = ({picture,index}) => {
    return (
        <Draggable
            draggableId={picture.id.toString()}
            index={index}
            >
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="bg-red-400 border-black border w-[100%] md:w-[50%]"
                >
                    {
                        <img src={picture.img} alt="image"/>
                    }
                </div>
            )}
        </Draggable>
    )
}

export default Card;