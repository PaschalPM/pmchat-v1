import { ContainerType } from "./@types"

function Container({ children, classname }:ContainerType){
    return(
      <div className={`container ${classname}`}>
        {children}
      </div>
    )
  }

  export default Container