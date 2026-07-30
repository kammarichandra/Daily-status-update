import { useState } from "react";
import Tooltip from "./Tooltip";


function ToolTipHome() {

  let [tooltip, setTooltip] = useState({ show:false, x:0, y:0});

  return (

    <div className="container">

      <button onMouseMove={(e)=>
          setTooltip({
            show:true,
            x:e.clientX,
            y:e.clientY
          })
        }

        onMouseLeave={()=>

          setTooltip({
            ...tooltip,
            show:false

          })

        } >

        Hover Me

      </button>

      {tooltip.show && (<Tooltip x={tooltip.x} y={tooltip.y} text="Hello from Portal!"/> )}

    </div>
  );
}

export default ToolTipHome;